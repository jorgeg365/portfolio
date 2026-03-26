"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type ActionId =
  | "start"
  | "about"
  | "projects"
  | "tools"
  | "contact"
  | "tpot"
  | "gophish"
  | "github"
  | "linkedin"
  | "email";

type ChatAction = {
  id: ActionId;
  label: string;
};

type Message = {
  id: string;
  text: string;
  actions?: ChatAction[];
};

const assistantName = "Jorge's Guide";

function buildMessage(text: string, actions?: ChatAction[]): Message {
  return {
    id: crypto.randomUUID(),
    text,
    actions,
  };
}

function getResponseForAction(actionId: ActionId): Message {
  if (actionId === "start") {
    return buildMessage(
      "Welcome. I can guide you through Jorge's portfolio. Choose a section below.",
      [
        { id: "about", label: "About Jorge" },
        { id: "projects", label: "View Projects" },
        { id: "tools", label: "Skills & Tools" },
        { id: "contact", label: "Contact" },
      ]
    );
  }

  if (actionId === "about") {
    return buildMessage(
      "The About page covers Jorge's background in IT and cybersecurity, his education, and hands-on experience with homelab, networking, virtualization, and security projects.",
      [
        { id: "tools", label: "Show Tools" },
        { id: "projects", label: "See Projects" },
        { id: "contact", label: "Get in Touch" },
      ]
    );
  }

  if (actionId === "projects") {
    return buildMessage(
      "The Projects page highlights Jorge's cybersecurity and lab work. You can jump straight to a featured project below.",
      [
        { id: "tpot", label: "T-Pot Honeypot" },
        { id: "gophish", label: "GoPhish Lab" },
        { id: "github", label: "GitHub Profile" },
      ]
    );
  }

  if (actionId === "tools") {
    return buildMessage(
      "Jorge works with tools including Wireshark, Kali, Ubuntu, Windows Server, Proxmox, Cisco, Splunk, Nmap, Burp Suite, and WireGuard. You can see them in the About section.",
      [
        { id: "about", label: "Open About" },
        { id: "projects", label: "Project Examples" },
      ]
    );
  }

  if (actionId === "contact") {
    return buildMessage(
      "You can reach Jorge from the Contact page or use one of these direct options.",
      [
        { id: "email", label: "Email Jorge" },
        { id: "linkedin", label: "LinkedIn" },
        { id: "github", label: "GitHub" },
      ]
    );
  }

  if (actionId === "tpot") {
    return buildMessage(
      "Opening the T-Pot honeypot project. This project focuses on deploying a honeypot stack on Ubuntu Server with ELK for threat visibility.",
      [
        { id: "gophish", label: "Next Project" },
        { id: "contact", label: "Contact Jorge" },
      ]
    );
  }

  if (actionId === "gophish") {
    return buildMessage(
      "Opening the GoPhish lab project. This walkthrough shows a local phishing testing setup using GoPhish and MailHog in a controlled Ubuntu VM environment.",
      [
        { id: "tpot", label: "Other Project" },
        { id: "contact", label: "Contact Jorge" },
      ]
    );
  }

  if (actionId === "github") {
    return buildMessage(
      "Opening Jorge's GitHub profile in a new tab.",
      [
        { id: "projects", label: "Back to Projects" },
        { id: "contact", label: "Contact Jorge" },
      ]
    );
  }

  if (actionId === "linkedin") {
    return buildMessage(
      "Opening Jorge's LinkedIn profile in a new tab.",
      [
        { id: "contact", label: "Contact Page" },
        { id: "about", label: "About Jorge" },
      ]
    );
  }

  return buildMessage(
    "Opening an email draft to Jorge.",
    [
      { id: "projects", label: "View Projects" },
      { id: "about", label: "About Jorge" },
    ]
  );
}

export default function Chatbot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([getResponseForAction("start")]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function openForAction(actionId: ActionId) {
    if (actionId === "about") {
      router.push("/about");
      return;
    }

    if (actionId === "projects") {
      router.push("/projects");
      return;
    }

    if (actionId === "contact") {
      router.push("/contact");
      return;
    }

    if (actionId === "tpot") {
      router.push("/projects#project-tpot");
      return;
    }

    if (actionId === "gophish") {
      router.push("/projects#project-gophish");
      return;
    }

    if (actionId === "github") {
      window.open("https://github.com/jorgeg365", "_blank", "noopener,noreferrer");
      return;
    }

    if (actionId === "linkedin") {
      window.open("https://www.linkedin.com/in/jorge-grullon-8673182b9/", "_blank", "noopener,noreferrer");
      return;
    }

    if (actionId === "email") {
      window.location.href = "mailto:jorgeagrullon@gmail.com?subject=Portfolio%20Inquiry";
    }
  }

  function handleAction(actionId: ActionId) {
    openForAction(actionId);
    const nextMessage = getResponseForAction(actionId);
    setMessages((prev) => [...prev, nextMessage]);
  }

  function resetGuide() {
    setMessages([getResponseForAction("start")]);
  }

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        aria-label={open ? "Close guide" : "Open guide"}
      >
        {open ? (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-xl font-semibold text-white">
            X
          </span>
        ) : (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="32" cy="32" r="32" fill="#0F1B58" />
            <path d="M18 51c2.6-8.9 11.1-13.4 14-13.4S43.4 42.1 46 51" fill="#F5F7FB" />
            <circle cx="32" cy="22" r="3.2" fill="#F5F7FB" />
            <path d="M32 24.8v6.2" stroke="#F5F7FB" strokeWidth="2.6" strokeLinecap="round" />
            <rect x="17.5" y="24" width="29" height="19" rx="9.5" fill="#F5F7FB" />
            <rect x="21.5" y="27.5" width="21" height="11" rx="5.5" fill="#14204F" />
            <circle cx="28" cy="33" r="2.3" fill="#48E7FF" />
            <circle cx="36" cy="33" r="2.3" fill="#48E7FF" />
            <rect x="13.5" y="29" width="5" height="9" rx="2.5" fill="#F5F7FB" />
            <rect x="45.5" y="29" width="5" height="9" rx="2.5" fill="#F5F7FB" />
            <path d="M40 9.5h11.5c2.5 0 4.5 2 4.5 4.5v5.5c0 2.5-2 4.5-4.5 4.5H45l-4 4v-4H40c-2.5 0-4.5-2-4.5-4.5V14c0-2.5 2-4.5 4.5-4.5Z" fill="#4FE7FF" />
            <path d="M43.3 16.8h2.5M47.3 16.8h2.5" stroke="#0F1B58" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[90vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/92 text-white shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <div className="text-sm font-semibold">{assistantName}</div>
              <div className="text-xs text-white/60">Portfolio navigation assistant</div>
            </div>
            <button
              className="text-sm text-white/70 transition-opacity hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <div className="max-h-[26rem] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-sm leading-6 text-white/90">{message.text}</p>
                {message.actions && message.actions.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action) => (
                      <button
                        key={`${message.id}-${action.id}`}
                        onClick={() => handleAction(action.id)}
                        className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-100 transition-colors hover:bg-blue-500/20"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
            <button
              onClick={resetGuide}
              className="text-xs font-semibold text-blue-200 transition-colors hover:text-white"
            >
              Restart guide
            </button>
            <button
              onClick={() => handleAction("contact")}
              className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Contact Jorge
            </button>
          </div>
        </div>
      )}
    </>
  );
}
