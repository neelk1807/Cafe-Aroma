// app/api/contact/route.js
import { db } from "@/lib/firebaseConfig";
import { ref, push } from "firebase/database";

export async function POST(req) {
  try {
    const body = await req.json();

    // Push data to Firebase Realtime Database
    const messagesRef = ref(db, "contactMessages");
    await push(messagesRef, {
      name: body.name,
      email: body.email,
      message: body.message,
      receivedAt: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return new Response(JSON.stringify({ error: "Failed to save message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } 
}
