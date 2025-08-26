import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function getServerUser() {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    return decoded; // contains uid, email, etc.
  } catch {
    return null;
  }
}
