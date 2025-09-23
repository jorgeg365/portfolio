import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 container mx-auto px-6 pt-32 lg:pt-40 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Jorge Grullon</h1>
            <p className="text-lg sm:text-xl max-w-2xl">Passionate developer building clean, performant web experiences. I enjoy full‑stack work with a focus on delightful UX and robust, scalable systems.</p>
            <div className="flex gap-6 mt-2">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">GitHub</a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>

          <div className="relative w-full flex lg:justify-end justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl">
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
        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="py-4 text-sm opacity-70 text-center">&copy; {new Date().getFullYear()} Jorge Grullon</footer>
    </div>
  );
}
