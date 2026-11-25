export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <nav className="flex items-center justify-between px-6 h-16 border-b border-zinc-200 dark:border-zinc-800">
        <span className="font-semibold">Nexus AI</span>
        <div className="flex gap-3">
          <a href="/architecture" className="text-sm">Architecture</a>
          <a href="/login" className="text-sm px-3 py-1.5 rounded bg-indigo-600 text-white">Try the demo</a>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AI answers from your company's own documents, with citations.</h1>
        <p className="mt-4 text-zinc-500">Enterprise support copilot for TechMart and beyond.</p>
      </section>
    </div>
  );
}
