"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebaseClient";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let userCred;
      if (isRegistering) {
        userCred = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCred = await signInWithEmailAndPassword(auth, email, password);
      }

      // Get ID token and exchange for a secure session cookie
      const idToken = await userCred.user.getIdToken(true);
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) throw new Error("Failed to create session");

      router.push("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message || "Auth failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/lock.jpg')] bg-cover bg-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-[#4b2e1e] text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border text-black"
          required
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isRegistering ? "Register" : "Login"}
        </button>

        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-sm text-blue-700 mt-3 underline w-full"
        >
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>

        <Link href="/" className="block text-center mt-3 text-blue-600 hover:underline">
          Go Back
        </Link>
      </form>
    </div>
  );
}
