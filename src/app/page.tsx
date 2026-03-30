// removed unused Link import
import Image from "next/image";
import ContactForm from "../components/ContactForm";

// OS Icons Component
function OSIcons() {
  return (
    <div className="flex justify-center items-center gap-12 mt-8 mb-8">
      {/* Windows Icon */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 bg-blue-500 rounded-xl flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
          </svg>
        </div>
        <span className="text-lg font-semibold">Windows</span>
      </div>

      {/* Mac Icon */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.96-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.03-3.11z" />
          </svg>
        </div>
        <span className="text-lg font-semibold">macOS</span>
      </div>

      {/* Linux Icon */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110">
          <Image
            src="/linux.png"
            alt="Linux Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <span className="text-lg font-semibold">Linux</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative z-20">
      <main className="flex-1 container mx-auto px-6 pt-32 lg:pt-40 pb-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-20">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Jorge Grullon</h1>
            <p className="text-lg sm:text-xl max-w-2xl">
              IT and cybersecurity specialist with a passion for building secure,
              reliable systems. I enjoy working with both hardware and software,
              continuously learning new technologies, and developing solutions
              that are efficient, scalable, and secure.
            </p>
          </div>

          <div className="relative w-full flex lg:justify-end justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl relative z-40 transition-transform duration-200 ease-out hover:scale-105">
              <Image
                src="/cropped.jpg"
                alt="Profile picture of Jorge Grullon"
                width={448}
                height={448}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* OS Icons Section */}
        <div className="text-center relative z-20">
          <h3 className="text-3xl font-bold mb-6">Proficient in</h3>
          <OSIcons />
        </div>

        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
