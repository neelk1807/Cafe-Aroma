"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/firebaseClient";   // ✅ new
import { ref, get } from "firebase/database";

type User = { username: string; password?: string };

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [userList, setUserList] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        // 1) Verify session via httpOnly cookie
        const res = await fetch("/api/auth/me", { method: "GET", cache: "no-store" });
        if (!res.ok) {
          router.replace("/login");
          return;
        }
        const me = await res.json();
        if (!mounted) return;

        setCurrentUser(me.email || me.uid || "");

        // 2) Load users from RTDB (you may want to stop storing passwords there)
        const snapshot = await get(ref(db, "users"));
        if (!mounted) return;

        if (snapshot.exists()) {
          const usersData: Record<string, User> = snapshot.val();
          const usersArray = Object.values(usersData);
          setUserCount(usersArray.length);
          setUserList(usersArray.map((u) => u.username));
        } else {
          setUserCount(0);
          setUserList([]);
        }
      } catch (err) {
        console.error(err);
        router.replace("/login");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/session", { method: "DELETE" }); // clears httpOnly cookie
    } finally {
      router.push("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading…
      </div>
    );
  }

  return (
    <div className="dashboard-container min-h-screen bg-gray-100 p-6">
      <div className="dashboard-section max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="dashboard-heading text-2xl font-bold mb-4 text-center text-[#4b2e1e]">
          Dashboard
        </h1>

        <p className="dashboard-currentuser mb-2 text-[#4b2e1e]">
          <strong>Welcome:</strong> {currentUser}
        </p>
        <p className="dashboard-totaluser mb-4 text-[#4b2e1e]">
          <strong>Total Registered Users:</strong> {userCount}
        </p>

        <div className="dashboard-usernames mb-4 text-[#4b2e1e]">
          <strong>Usernames:</strong>
          <ul className="list-disc ml-6 mt-1 text-gray-700">
            {userList.map((username, idx) => (
    <li key={username + idx}>{username}</li>
  ))}
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded w-full cursor-pointer"
        >
          Logout
        </button>

        <Link href="/" className="block text-center mt-3 text-blue-600 hover:underline">
          Go Back
        </Link>
      </div>
    </div>
  );
}
