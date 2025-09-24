import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white">Book Explorer</h2>
            <p className="mt-2 text-sm text-gray-400">
              Discover, compare, and explore products in one place.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.88-2.36 8.27 8.27 0 01-2.67 1.02 4.15 4.15 0 00-7.14 3.79 11.78 11.78 0 01-8.55-4.34 4.15 4.15 0 001.28 5.55 4.1 4.1 0 01-1.88-.52v.05a4.15 4.15 0 003.32 4.07c-.46.13-.94.2-1.44.2-.35 0-.69-.03-1.02-.1a4.15 4.15 0 003.87 2.88A8.34 8.34 0 012 19.54a11.76 11.76 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.27 8.27 0 0022.46 6z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.58 8.06 8.2 8.85v-6.26H8.1V12h2.14V9.79c0-2.13 1.26-3.31 3.2-3.31.93 0 1.9.17 1.9.17v2.08h-1.07c-1.05 0-1.38.65-1.38 1.32V12h2.35l-.38 2.59h-1.97v6.26c4.62-.79 8.2-4.43 8.2-8.85 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 0H2.4A2.4 2.4 0 000 2.4v19.2A2.4 2.4 0 002.4 24h19.2a2.4 2.4 0 002.4-2.4V2.4A2.4 2.4 0 0021.6 0zM8.1 20.1H4.5V9h3.6v11.1zM6.3 7.5a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm14.1 12.6h-3.6v-5.7c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.19 1.48-2.19 3v5.82H9.3V9h3.45v1.52h.05c.48-.91 1.66-1.87 3.43-1.87 3.67 0 4.34 2.41 4.34 5.55v6.9z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Product Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
