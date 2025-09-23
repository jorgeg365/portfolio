"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [pendingAction, setPendingAction] = useState<null | "mailto">(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      const greeting = "Hi! I'm Jorge's assistant. I can introduce Jorge, guide you to projects, resume, or contact info, and answer FAQs. What would you like to see?";
      setMessages([{ id: crypto.randomUUID(), role: "assistant", text: greeting }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const quickPrompts = useMemo(
    () => [
      "Who is Jorge?",
      "Show projects",
      "View resume",
      "How to contact?",
      "Cybersecurity work",
    ],
    []
  );

  function navigateForIntent(intent: string) {
    // Use Next.js client-side navigation via location for same-site anchors and paths
    if (intent === "projects") {
      window.location.href = "/projects";
    } else if (intent === "contact") {
      // Go to home contact section
      window.location.href = "/#contact";
    } else if (intent === "about" || intent === "resume") {
      window.location.href = "/about";
    } else if (intent === "project-tpot") {
      window.location.href = "/projects#project-tpot";
    } else if (intent === "project-gophish") {
      window.location.href = "/projects#project-gophish";
    }
  }

  function openEmailDraft() {
    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent("Hi Jorge,\n\nI saw your portfolio and would like to connect.\n\nThanks,");
    window.location.href = `mailto:jorgeagrullon@gmail.com?subject=${subject}&body=${body}`;
  }

  function respond(userText: string): string {
    const t = userText.toLowerCase();

    // Handle pending confirmations first
    if (pendingAction === "mailto") {
      if (/(^|\b)(yes|yep|yeah|sure|please|ok|okay|do it|go ahead)(\b|$)/.test(t)) {
        setPendingAction(null);
        setTimeout(() => openEmailDraft(), 150);
        return "Opening an email draft to Jorge...";
      }
      if (/(^|\b)(no|nope|not now|later|cancel|stop)(\b|$)/.test(t)) {
        setPendingAction(null);
        return "No problem — you can use the contact form below or ask me anytime.";
      }
      // If unclear, re-prompt
      return "Would you like me to open an email draft to Jorge now? (yes/no)";
    }
    // Intro / elevator pitch
    if (/(who.*jorge|introduce|about (you|jorge)|who are you)/.test(t)) {
      return "Jorge Grullon is a full‑stack developer with a focus on clean, performant web apps and security projects. This portfolio highlights selected projects, experience, and ways to get in touch.";
    }
    // Navigation
    if (/project|portfolio|work|show project/.test(t)) {
      navigateForIntent("projects");
      return "Taking you to Projects. Want a summary of T‑Pot or GoPhish?";
    }
    if (/resume|cv/.test(t)) {
      navigateForIntent("resume");
      return "Opening the About/Resume page. Want highlights here as well?";
    }
    if (/(contact|email|reach|hire)/.test(t)) {
      navigateForIntent("contact");
      return "Taking you to the Contact section. You can use the form below or ask me to open an email draft to Jorge.";
    }
    // FAQs
    if (/background|experience/.test(t)) {
      return "Background: hands‑on full‑stack development and security‑focused projects (e.g., T‑Pot honeypot setup, GoPhish lab). Comfortable with TypeScript/Next.js, APIs, and cloud tooling.";
    }
    if (/technolog|tech stack|tools|stack/.test(t)) {
      return "Tech stack includes TypeScript, Next.js/React, Node.js, Tailwind CSS, and experience with Linux, Docker, and security tooling.";
    }
    if (/freelance|collaborat|open to work|opportunities?/.test(t)) {
      return "Jorge is open to interesting freelance or collaboration opportunities. Share what you have in mind and a way to contact you.";
    }
    // Project specifics
    if (/cybersec|security|honeypot|t-?pot/.test(t)) {
      navigateForIntent("project-tpot");
      return "Opening the T‑Pot honeypot project. Quick summary: step‑by‑step installation on Ubuntu 24.04 LTS with ELK integration.";
    }
    if (/gophish|phishing|mailhog/.test(t)) {
      navigateForIntent("project-gophish");
      return "Opening the GoPhish + Mailhog local testing lab project.";
    }
    if (/best project|favorite project|highlight/.test(t)) {
      return "Popular picks include the T‑Pot Honeypot Installation Guide and a GoPhish + Mailhog local testing lab. Ask for either and I'll take you there.";
    }
    // Default
    return "I can help with projects, resume, or contact info. Try: ‘Show projects’, ‘View resume’, or ‘How to contact?’";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text: trimmed };
    const reply: Message = { id: crypto.randomUUID(), role: "assistant", text: respond(trimmed) };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  }

  function handleQuick(prompt: string) {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    if (prompt === "How to contact?") {
      navigateForIntent("contact");
      setPendingAction("mailto");
      const ask: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "Taking you to the Contact section. Would you like me to open an email draft to Jorge now? (yes/no)",
      };
      setMessages((prev) => [...prev, ask]);
      return;
    }
    const reply: Message = { id: crypto.randomUUID(), role: "assistant", text: respond(prompt) };
    setMessages((prev) => [...prev, reply]);
  }

  function handleCaptureContact() {
    const subject = encodeURIComponent("Portfolio inquiry from chatbot");
    const body = encodeURIComponent("Hi Jorge, I'd like to connect.\n\n— Sent from the site chatbot");
    window.location.href = `mailto:jorgeagrullon@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-colors"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm rounded-xl border border-white/10 bg-gray-900/90 text-white shadow-2xl backdrop-blur p-3 flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="font-semibold">Ask Jorge&apos;s Assistant</div>
            <button className="text-sm opacity-70 hover:opacity-100" onClick={() => setOpen(false)} aria-label="Close">Close</button>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            {quickPrompts.map((q) => (
              <button key={q} onClick={() => handleQuick(q)} className="text-left text-sm px-3 py-2 rounded-md bg-white/5 hover:bg-white/10">
                {q}
              </button>
            ))}
          </div>

          <div className="mt-3 flex-1 min-h-[160px] max-h-64 overflow-y-auto pr-1 space-y-2">
            {messages.map((m) => (
              <div key={m.id} className={`text-sm leading-relaxed ${m.role === "user" ? "text-blue-300" : "text-gray-100"}`}>
                {m.role === "user" ? "You: " : "Assistant: "}
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="rounded-md px-4 py-2 bg-blue-600 hover:bg-blue-500 font-semibold">Send</button>
          </form>

          <button onClick={handleCaptureContact} className="mt-2 text-xs text-blue-300 hover:underline self-start">
            Send a message to Jorge via email
          </button>
        </div>
      )}
    </>
  );
}


