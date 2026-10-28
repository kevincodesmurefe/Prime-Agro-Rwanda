
const services = [
  {
    number: "01",
    title: "Pig Breeding",
    description:
      "Breeding pigs with attention to health, quality, and responsible farm practices.",
  },
  {
    number: "02",
    title: "Pig Rearing",
    description:
      "Raising pigs with proper care and management throughout their growth.",
  },
  {
    number: "03",
    title: "Pigs & Piglets Supply",
    description:
      "Supplying pigs and piglets to farmers and buyers looking for quality livestock.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-green-50/60 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold tracking-widest text-green-800">
            WHAT WE DO
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Farming with purpose.
            <span className="block text-green-800">
              Quality from the ground up.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-800 transition-colors group-hover:bg-green-800 group-hover:text-white">
                {service.number}
              </span>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full border-[10px] border-green-800/5 transition-transform duration-300 group-hover:scale-125"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
