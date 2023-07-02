import { isLogged } from "@/lib/auth";
import db from "@/lib/db";
import { NextResponse } from "next/server";

// models
import post from "@/models/post";

export async function GET() {
  const session = await isLogged();

  if (!session)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    await db();

    const data = await post.find().exec();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
