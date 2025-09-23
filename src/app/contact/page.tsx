export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a174e] text-white font-sans p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
      <p className="mb-4 text-lg">Feel free to reach out to me via the following platforms:</p>
      <div className="flex gap-6">
        <a href="mailto:your.email@example.com" className="hover:text-blue-300">Email</a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">GitHub</a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a>
      </div>
    </div>
  );
}
