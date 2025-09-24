'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavigationMenu from './NavigationMenu'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Book Explorer</Link>
        </h1>
        <nav className="hidden md:flex gap-6 items-center">
          <NavigationMenu />
          <Link href="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow rounded p-4 space-y-2">
          <NavigationMenu />
          <Link href="/about" className="block hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
