import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin"; // from earlier setup

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("session")?.value;
  if (!cookie) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    // decoded contains uid, email, etc.
    return NextResponse.json(decoded, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
