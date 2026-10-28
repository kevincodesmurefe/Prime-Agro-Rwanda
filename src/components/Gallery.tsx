
const photos = [
  {
    src: "/images/adult.jfif",
    alt: "Healthy adult pigs at the farm",
    title: "Our Pigs",
    category: "Healthy livestock",
    featured: true,
  },
  {
    src: "/images/2piglets.jfif",
    alt: "Young piglets together in a pen",
    title: "Young Piglets",
    category: "The next generation",
    featured: false,
  },
  {
    src: "/images/pig pipo.jfif",
    alt: "Farmer caring for pigs",
    title: "Farm Life",
    category: "Care and dedication",
    featured: false,
  },
  {
    src: "/images/pexels-david9122-31548249.jpg",
    alt: "Pig farm housing and facilities",
    title: "Our Farm",
    category: "Where we work",
    featured: false,
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-white px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-green-800">
              LIFE AT PRIME AGRO
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A closer look at our farm.
            </h2>

            <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
              From healthy pigs to the daily work behind our farm,
              take a look at life at Prime Agro Rwanda.
            </p>
          </div>

          <a
            href="#visit"
            className="inline-flex w-fit items-center gap-2 font-semibold text-green-800 transition-colors hover:text-green-600"
          >
            Visit our farm <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            
            <article
              key={photo.src}
              className={`group overflow-hidden rounded-2xl bg-green-50 ${
                photo.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden ${
                  photo.featured ? "h-64 sm:h-80" : "h-64"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  {photo.category}
                </p>

                <h3 className="text-lg font-bold text-gray-900">
                  {photo.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
