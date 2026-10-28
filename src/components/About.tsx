
const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24 rounded-b-xl shadow-xl"
    >
      {/* Subtle decorative pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/download.jpg')] bg-cover bg-center opacity-[0.06] rounded-b-xl shadow"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Text content */}
        <div>
          <p className="mb-3 text-sm font-bold tracking-widest text-green-800">
            ABOUT PRIME AGRO
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Rooted in care.
            <span className="block text-green-800">
              Growing with purpose.
            </span>
          </h2>

          <p className="mb-4 leading-relaxed text-gray-600">
            Prime Agro Rwanda is a pig farm based in Kumuyumbu,
            Rwamagana District, dedicated to pig breeding, rearing,
            and supplying pigs and piglets.
          </p>

          <p className="mb-7 leading-relaxed text-gray-600">
            We believe responsible farming starts with proper care,
            healthy animals, and a commitment to the people and
            communities we serve.
          </p>

          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Visit our farm <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Farm image */}
        <div className="relative">

          <img
            src="/images/images.jfif"
            alt="Pigs being raised at Prime Agro Rwanda"
            className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-96"
          />
          <div className="absolute -top-4 -right-3 -z-10 h-24 w-24 rounded-2xl bg-green-900 sm:-right-5 shadow-xl" />
          <div className="absolute -bottom-4 -left-3 -z-10 h-24 w-24 rounded-2xl bg-green-900 sm:-left-5 shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
