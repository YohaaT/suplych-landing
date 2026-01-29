"use client";
import React from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-blue-900" />
            <span className="text-2xl font-bold text-blue-900 tracking-tight">SUPLYCH</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-slate-600 hover:text-blue-900 transition-colors">About Us</Link>
            <Link href="#value" className="text-slate-600 hover:text-blue-900 transition-colors">Our Value</Link>
            <Link href="#compliance" className="text-slate-600 hover:text-blue-900 transition-colors">Compliance</Link>
            <Link href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
              Be a Partner
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4">
          <Link href="#about" className="block text-slate-600 py-2">About Us</Link>
          <Link href="#value" className="block text-slate-600 py-2">Our Value</Link>
          <Link href="#compliance" className="block text-slate-600 py-2">Compliance</Link>
          <Link href="#contact" className="block bg-blue-900 text-white text-center px-6 py-3 rounded-lg">
            Be a Partner
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
