import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a174e] text-white font-sans">
      <nav className="w-full flex justify-center gap-8 py-6 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main className="flex flex-col items-center gap-6 flex-1 justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Jorge Grullon</h1>
        <p className="text-xl sm:text-2xl max-w-xl text-center">Welcome to my portfolio! I am a passionate developer eager to showcase my work and connect with you.</p>
        <div className="flex gap-6 mt-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a>
        </div>
      </main>
      <footer className="py-4 text-sm opacity-70">&copy; {new Date().getFullYear()} Jorge Grullon</footer>
    </div>
  );
}
