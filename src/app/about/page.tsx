const tools = [
  {
    label: "Wireshark",
    icon: "https://cdn.simpleicons.org/wireshark",
  },
  {
    label: "Kali",
    icon: "https://cdn.simpleicons.org/kalilinux",
  },
  {
    label: "Ubuntu",
    icon: "https://cdn.simpleicons.org/ubuntu",
  },
  {
    label: "Windows Server",
    icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Windows%20Server%20logo.svg",
  },
  {
    label: "Proxmox",
    icon: "https://cdn.simpleicons.org/proxmox",
  },
  {
    label: "Cisco",
    icon: "https://cdn.simpleicons.org/cisco",
  },
  {
    label: "Splunk",
    icon: "https://cdn.simpleicons.org/splunk",
  },
  {
    label: "Nmap",
    icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_nmap.png",
  },
  {
    label: "Burp Suite",
    icon: "https://cdn.simpleicons.org/burpsuite",
  },
  {
    label: "WireGuard",
    icon: "https://cdn.simpleicons.org/wireguard",
  },
];

export default function About() {
  return (
    <div className="min-h-screen font-sans px-6 py-16 relative z-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 relative z-20 text-center">About Me</h1>

        <div className="max-w-3xl mx-auto text-lg leading-8 space-y-6 relative z-20 text-left">
          <p>
            Hi! I&apos;m Jorge Grullon, a New York native with a lifelong passion for computers and technology. From a young age, I&apos;ve been fascinated by how systems work, often building, breaking, and rebuilding computers to better understand them.
          </p>
          <p>
            After spending time in another industry, I made the decision to return to school to pursue a career in IT and cybersecurity. I earned my degree from Bronx Community College and am continuing my studies in Computer Information Systems at Lehman College, while also working toward industry certifications to strengthen my skills with modern tools and technologies.
          </p>
          <p>
            I have hands-on experience with homelab environments, networking, virtualization, and security-focused projects, including VPN setups, honeypots, and system monitoring. I enjoy working across both hardware and software, constantly learning, and building secure, efficient systems that solve real-world problems.
          </p>
        </div>

        <section className="mt-14 relative z-20">
          <h2 className="text-2xl font-bold text-center mb-6">Tools I Work With</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-transform duration-200 ease-out hover:scale-110"
              >
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                  <img
                    src={tool.icon}
                    alt={`${tool.label} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold leading-5">{tool.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
