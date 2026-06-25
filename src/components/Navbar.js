"use client";
import React from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-amber-400 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-slate-950 font-bold" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent tracking-tight">SUPLYCH</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#brands" className="text-slate-300 hover:text-amber-400 transition-colors">Marcas</Link>
            <Link href="#categories" className="text-slate-300 hover:text-amber-400 transition-colors">Categorías</Link>
            <Link href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">Nosotros</Link>
            <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-500/30">
              Solicitar Acceso
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-amber-500/20 py-4 px-4 space-y-4">
          <Link href="#brands" className="block text-slate-300 py-2 hover:text-amber-400">Marcas</Link>
          <Link href="#categories" className="block text-slate-300 py-2 hover:text-amber-400">Categorías</Link>
          <Link href="#about" className="block text-slate-300 py-2 hover:text-amber-400">Nosotros</Link>
          <Link href="#contact" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-600">
            Solicitar Acceso
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
