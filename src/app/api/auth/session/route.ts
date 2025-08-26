/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

const COOKIE_NAME = "session";
const FIVE_DAYS = 60 * 60 * 24 * 5 * 1000;

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    if (!idToken) return NextResponse.json({ error: "Missing idToken" }, { status: 400 });

    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: FIVE_DAYS });

    const res = NextResponse.json({ ok: true });
    res.cookies.set({
      name: COOKIE_NAME,
      value: sessionCookie,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: FIVE_DAYS / 1000,
    });
    return res;
  } catch (e) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export async function DELETE() {
  // Clear cookie
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return res;
}
