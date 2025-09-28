"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-cyan-400 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to YatraONE</h1>
      
      <div className="flex gap-4">
        {/* Navigate to Trip Planner */}
        <Link href="/plan-trip">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
            Plan a Trip
          </button>
        </Link>

        {/* Navigate to Destinations */}
        <Link href="/destinations">
          <button className="px-6 py-3 bg-white text-blue-600 border border-blue-500 hover:bg-blue-100 rounded-lg shadow-md">
            Explore Destinations
          </button>
        </Link>
      </div>
    </div>
  );
}
