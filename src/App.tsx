
function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold text-green-900">
          Prime Agro Rwanda
        </h1>

        <button className="rounded-lg bg-green-900 px-5 py-3 text-white hover:bg-green-800">
          Book a Visit
        </button>
      </nav>

      <section className="px-8 py-20">
        <p className="mb-4 font-semibold uppercase tracking-widest text-green-800">
          Quality Pig Breeding & Rearing
        </p>

        <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
          Raising Quality. Growing Agriculture.
        </h2>

        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Prime Agro Rwanda breeds, raises, and supplies pigs and piglets
          from Kumuyumbu, Rwamagana District.
        </p>

        <button className="mt-8 rounded-lg bg-green-900 px-6 py-3 font-semibold text-white hover:bg-green-800">
          Plan Your Visit
        </button>
      </section>
    </main>
  );
}

export default App;
