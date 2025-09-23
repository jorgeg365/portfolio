"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${fullName || "Unknown"}`);
    const bodyLines = [
      fullName ? `Name: ${fullName}` : null,
      email ? `Email: ${email}` : null,
      "",
      message || "",
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailtoHref = `mailto:jorgeagrullon@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoHref;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm opacity-80">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
            required
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm opacity-80">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm opacity-80">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[140px] w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="How can I help?"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-md px-5 py-2.5 font-semibold bg-blue-600 hover:bg-blue-500 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}


