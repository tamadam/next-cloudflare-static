import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(`POST SUCCESS WITH BODY: ${body}`, { status: 201 });
}
