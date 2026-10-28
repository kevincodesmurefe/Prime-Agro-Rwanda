
const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[400px] items-center overflow-hidden rounded-xl bg-[url('/images/hero.jfif')] bg-cover bg-center md:min-h-[500px] shadow-xl"
    >
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 md:px-10 md:py-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-green-300 sm:text-sm">
            ROOTED IN RWANDA 🇷🇼
          </p>

          <h1 className="mb-4 bg-[image:linear-gradient(rgba(255,255,255,0.88),rgba(255,255,255,0.88)),url('/images/download.jpg')] bg-cover bg-center bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Growing a better future, one generation at a time.
          </h1>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-100 sm:text-base md:text-lg">
            Prime Agro Rwanda is a pig farm in Rwamagana, dedicated to
            breeding and raising healthy pigs and supplying quality pigs
            and piglets to farmers and buyers.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#visit"
              className="group relative isolate overflow-hidden rounded-xl border-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-green-900 sm:px-6 sm:py-3 sm:text-base"
            >
              <span
                className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/download.jpg')] bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                aria-hidden="true"
              />
              Request Visit
            </a>

            <a
              href="#contact"
              className="group relative isolate overflow-hidden rounded-xl border-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-green-900 sm:px-6 sm:py-3 sm:text-base"
            >
              <span
                className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/download.jpg')] bg-bottom-right opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                aria-hidden="true"
              />
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
