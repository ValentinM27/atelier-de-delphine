import { isLogged } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

// models
import post, { IPost, postSchemaValidation } from "@/models/post";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await isLogged();

  if (!session)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const id = req.nextUrl.searchParams.get("id");

  if (!id) return NextResponse.json({ error: "Invalid data" }, { status: 400 });

  try {
    await db();

    const data = await post.findOne({ _id: id }).exec();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: "Servor error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await isLogged();

  if (!session)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  let data: IPost;

  try {
    data = postSchemaValidation.parse(await req?.json());
  } catch (error: any) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    await db();

    data = {
      ...data,
      createdAt: new Date(),
    };

    const newPost = new post(data);
    const savedPost = await newPost.save();

    return NextResponse.json(savedPost);
  } catch (error: any) {
    return NextResponse.json({ error: "Servor error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await isLogged();

  if (!session)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const id = req.nextUrl.searchParams.get("id");

  if (!id) return NextResponse.json({ error: "Invalid data" }, { status: 400 });

  try {
    await db();

    await post.deleteOne({ _id: id }).exec();

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Servor error" }, { status: 500 });
  }
}
