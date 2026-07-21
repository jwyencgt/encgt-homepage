'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold tracking-tight text-black">
            ENCGT
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <Link
            href="#products"
            className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="#technology"
            className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Technology
          </Link>
          <Link
            href="#applications"
            className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Applications
          </Link>
          <Link
            href="#about"
            className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
