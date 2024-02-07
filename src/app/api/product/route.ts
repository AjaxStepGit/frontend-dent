import { NextResponse } from "next/server";

export async function GET(req: any) {
  return NextResponse.json({ msg: "Hello from Ajax!!" });
}
