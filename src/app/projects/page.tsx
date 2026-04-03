import Image from "next/image";
export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans p-8 relative z-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 relative z-20">Projects</h1>
      <a
        href="https://github.com/jorgeg365"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 text-blue-400 hover:underline text-lg relative z-20"
      >
        View more on my GitHub
      </a>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative z-20">
        {/* T-Pot Honeypot Installation Guide Project Card */}
        <div id="project-tpot" className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out hover:scale-105" style={{ height: 224, width: 224 }}>
              <Image src="/tpotlogo-1.png" alt="T-Pot Logo" fill sizes="(max-width: 640px) 200px, 224px" className="object-contain" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">T-Pot Honeypot Installation Guide (Ubuntu Server 24.04 LTS)</h2>
          <p className="mb-2">A comprehensive guide to installing and configuring the T-Pot honeypot platform on Ubuntu Server 24.04 LTS, integrating multiple honeypot tools with the ELK Stack for powerful threat analysis and visualization.</p>
          <a href="https://github.com/jorgeg365/T-Pot-Honeypot-Installation-Guide-Ubuntu-Server-24.04-LTS-" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* GoPhish Phishing Campaign Project Card */}
        <div id="project-gophish" className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out hover:scale-105" style={{ height: 224, width: 224 }}>
              <Image src="/gophishpic.png" alt="GoPhish Logo" fill sizes="(max-width: 640px) 200px, 224px" className="object-contain" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">GoPhish Phishing Campaign with Mailhog Local Testing on Ubuntu VM</h2>
          <p className="mb-2">A step-by-step project for setting up a local phishing lab using GoPhish and MailHog on an Ubuntu VM. This guide covers installation, configuration, and running realistic phishing campaigns in a safe environment.</p>
          <a href="https://github.com/jorgeg365/jorgeg365-GoPhish-phishing-Campaign-with-Mailhog-local-testing-on-Ubuntu-VM" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* Streamlining IoT File Transfers Project Card */}
        <div className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out hover:scale-105" style={{ height: 224, width: 224 }}>
              <Image src="/filezilla.png" alt="FileZilla Logo" fill sizes="(max-width: 640px) 200px, 224px" className="object-contain" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Streamlining IoT File Transfers: Setting Up an FTP Server for WyzeCam v2 and ESP32</h2>
          <p className="mb-2">A step-by-step guide to setting up an FTP server for seamless file transfers between WyzeCam v2, ESP32, and your computer. Includes configuration for both Windows and IoT devices, with practical code examples and security tips.</p>
          <a href="https://github.com/jorgeg365/Streamlining-IoT-File-Transfers-Setting-Up-an-FTP-Server-for-WyzeCam-v2-and-ESP32" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* Create Your Own Fighting Game Course Project Card */}
        <div className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out hover:scale-105" style={{ height: 224, width: 224 }}>
              <Image
                src="/fighting-game-course-logo.svg"
                alt="Create Your Own Fighting Game Course logo"
                fill
                sizes="(max-width: 640px) 200px, 224px"
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Create Your Own Fighting Game Course</h2>
          <p className="mb-2">A game development project focused on building a fighting game from the ground up, covering core gameplay systems like combat flow, character behavior, and overall game structure.</p>
          <a href="https://github.com/jorgeg365/Create-your-own-fighting-game-course" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* Plex Media Automation Homelab Project Card */}
        <div className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl transition-transform duration-200 ease-out hover:scale-105" style={{ height: 224, width: 224 }}>
              <Image
                src="/plex-homelab-logo.svg"
                alt="Plex Media Automation Homelab logo"
                fill
                sizes="(max-width: 640px) 200px, 224px"
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Plex Media Automation Homelab</h2>
          <p className="mb-2">A self-hosted media automation stack built around Docker, VPN networking, Jellyseerr, and the Arr suite to manage, request, and organize media services in a homelab environment.</p>
          <a href="https://github.com/jorgeg365/Plex-Media-Automation-Homelab-Docker-VPN-Jellyseerr-Arr-stack-" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* Hero Heroine Generator Project Card */}
        <div className="rounded-lg p-6 shadow-md relative z-20" style={{ background: "rgba(17,35,90,0.7)" }}>
          <div className="w-full mb-6 flex justify-center">
            <div
              className="flex items-center justify-center overflow-hidden rounded-3xl bg-white/5 transition-transform duration-200 ease-out hover:scale-105"
              style={{ height: 224, width: 224 }}
            >
              <Image
                src="/hero-heroine-generator-logo.svg"
                alt="Hero Heroine Generator artwork"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Hero Heroine Generator</h2>
          <p className="mb-2">A character generation project for creating hero and heroine concepts, designed to explore randomized traits, creative worldbuilding, and reusable generation logic.</p>
          <a href="https://github.com/jorgeg365/Hero_Heroine-Generator" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}
