export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Example project card */}
        <div className="rounded-lg p-6 shadow-md" style={{ background: "rgba(17,35,90,0.7)" }}>
          <h2 className="text-xl font-semibold mb-2">Project Title</h2>
          <p className="mb-2">Short project description goes here.</p>
          <a href="#" className="text-blue-300 hover:underline">View Project</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}
