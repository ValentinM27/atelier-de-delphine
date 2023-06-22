import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("GET");
}

export async function DELETE() {
  return NextResponse.json("DELETE");
}

export async function POST(req: NextRequest) {
  return NextResponse.json(await req?.json());
}
