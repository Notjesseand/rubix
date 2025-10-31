"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill in all fields");

    setLoading(true);
    try {
      // TODO: Replace with your auth API call
      await new Promise((r) => setTimeout(r, 1500));
      alert("Login successful!");
      router.push("/");
    } catch (err) {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="bg-gray-900 w-full max-w-md rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white font-montserratbold">
            Welcome Back 👋
          </h1>
          <p className="text-gray-400 text-sm mt-2 font-montserrat">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 mb-1 text-sm font-montserrat"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 font-montserrat"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 mb-1 text-sm font-montserrat"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 font-montserrat"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-montserratbold transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-center text-sm mt-6 font-montserrat">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-violet-400 font-montserratbold hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </main>
  );
}
