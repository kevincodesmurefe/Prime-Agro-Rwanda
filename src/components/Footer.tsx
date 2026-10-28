
const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-green-950 text-white">
      {/* Subtle imigongo pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/download.jpg')] bg-cover bg-center opacity-[0.08]"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3 md:py-16">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="inline-block text-2xl font-extrabold tracking-tight"
          >
            <img src="/images/prime-agro-logo.svg" alt="Prime Agro Rwanda" className="h-10" />
          </a>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-green-100/80">
            Rooted in Rwanda, dedicated to pig breeding, responsible
            rearing, and supplying pigs and piglets to farmers and buyers.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-green-400">
            Quick links
          </h2>

          <ul className="space-y-3 text-sm text-green-100/80">
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition-colors hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#visit" className="transition-colors hover:text-white">
                Book a farm visit
              </a>
            </li>
          </ul>
        </div>

        {/* Farm information */}
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-green-400">
            Visit our farm
          </h2>

          <ul className="space-y-3 text-sm leading-relaxed text-green-100/80">
            <li>
              <span className="font-semibold text-white">Location:</span>
              <br />
              Kumuyumbu, Rwamagana District, Rwanda
            </li>
            <li>
              <span className="font-semibold text-white">Visiting days:</span>
              <br />
              Wednesdays and Saturdays
            </li>
            <li>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 font-semibold text-green-400 transition-colors hover:text-white"
              >
                Request a visit <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-green-100/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Prime Agro Rwanda. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
