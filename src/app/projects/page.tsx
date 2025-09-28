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
            <div className="relative" style={{ height: 224, width: 224 }}>
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
            <div className="relative" style={{ height: 224, width: 224 }}>
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
            <div className="relative" style={{ height: 224, width: 224 }}>
              <Image src="/filezilla.png" alt="FileZilla Logo" fill sizes="(max-width: 640px) 200px, 224px" className="object-contain" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Streamlining IoT File Transfers: Setting Up an FTP Server for WyzeCam v2 and ESP32</h2>
          <p className="mb-2">A step-by-step guide to setting up an FTP server for seamless file transfers between WyzeCam v2, ESP32, and your computer. Includes configuration for both Windows and IoT devices, with practical code examples and security tips.</p>
          <a href="https://github.com/jorgeg365/Streamlining-IoT-File-Transfers-Setting-Up-an-FTP-Server-for-WyzeCam-v2-and-ESP32" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">View on GitHub</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}
