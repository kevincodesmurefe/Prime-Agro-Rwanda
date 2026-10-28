import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = "relative font-semibold hover:text-green-800 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-800 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="sticky top-1 z-50 mb-2 flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-xl md:px-7 relative">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl bg-[url('/images/download.jpg')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />

      <a href="#home" onClick={() => setMenuOpen(false)}>
  <img src="/images/prime-agro-logo.svg" alt="Prime Agro Rwanda" className="h-12" />
</a>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <a href="#home" className={linkClasses}>Home</a>
        <a href="#about" className={linkClasses}>About</a>
        <a href="#gallery" className={linkClasses}>Gallery</a>

      </div>

      <div className="flex items-center gap-3">
        <a
          href="#visit"
          className="hidden rounded-full bg-green-800 px-5 py-2 font-semibold text-white hover:bg-green-700 md:flex"
        >
          Visit →
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 font-bold hover:bg-gray-200 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-20 flex w-full flex-col gap-4 rounded-xl bg-white p-5 text-center shadow-md md:hidden">
          <a href="#home" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#gallery" className={linkClasses} onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#about" className={linkClasses} onClick={() => setMenuOpen(false)}>About</a>
          <a
            href="#visit"
            className="rounded-full bg-green-800 px-5 py-2 text-center font-semibold text-white hover:bg-green-700"
          >
            Visit →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;