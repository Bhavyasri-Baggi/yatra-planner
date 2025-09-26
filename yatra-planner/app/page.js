// app/page.js
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-200 to-indigo-400 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-white mb-6 text-center">
        Welcome to Yatra Planner
      </h1>
      <p className="text-lg text-white text-center max-w-xl mb-8">
        Plan your dream trips effortlessly! Explore destinations, create itineraries, and make your journeys unforgettable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition">
          Plan a Trip
        </button>
        <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
          Explore Destinations
        </button>
      </div>
    </main>
  );
}
