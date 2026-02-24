
"use client";
import { useState } from "react";

export default function JoinButton({ activityId }) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = async () => {
    setLoading(true);
    const res = await fetch(`/api/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activityId }),
    });
    if (res.ok) setJoined(true);
    setLoading(false);
  };

  return (
    <button
      onClick={handleJoin}
      disabled={loading || joined}
      className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-cyan-900 text-white px-8 py-2 rounded-lg font-semibold shadow-md hover:bg-cyan-800 transition"
    >
      {joined ? "Tilmeldt" : loading ? "Tilmeld..." : "Tilmeld"}
    </button>
  );
}