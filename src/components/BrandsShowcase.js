"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const BrandsShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'Todas' },
        { id: 'nail', label: 'Nail Care' },
        { id: 'hair', label: 'Hair Care' },
        { id: 'skincare', label: 'Skincare' },
        { id: 'makeup', label: 'Makeup' },
    ];

    // Marcas reales de tus compras (de Kehe, Pride Products, N&W)
    const brands = [
        { id: 1, name: 'ACURE', category: 'skincare', description: 'Oil facial & skincare' },
        { id: 2, name: 'DUKE CANNON', category: 'skincare', description: 'Premium beard & grooming' },
        { id: 3, name: 'HERITAGE', category: 'hair', description: 'Castor oil & hair care' },
        { id: 4, name: 'BETTER LIFE', category: 'skincare', description: 'Natural cleaners' },
        { id: 5, name: 'CHARLIES SOAP', category: 'skincare', description: 'Eco-friendly products' },
        { id: 6, name: 'ALVERA', category: 'skincare', description: 'Aloe vera line' },
        { id: 7, name: 'KING RESEARCH', category: 'nail', description: 'Barbicide & nail care' },
        { id: 8, name: 'TURBO POWER', category: 'hair', description: 'Professional dryers' },
        { id: 9, name: 'MANIC PANIC', category: 'hair', description: 'Hair color profesional' },
        { id: 10, name: 'WAHL', category: 'hair', description: 'Clippers profesionales' },
        { id: 11, name: 'AMPRO', category: 'hair', description: 'Hair styling & gel' },
        { id: 12, name: 'KRYOLAN', category: 'makeup', description: 'Professional makeup' },
        { id: 13, name: 'LAYRITE', category: 'hair', description: 'Premium styling products' },
        { id: 14, name: 'LUSALETA', category: 'hair', description: 'Hair care profesional' },
        { id: 15, name: 'MALIBU C', category: 'hair', description: 'Hair treatment' },
        { id: 16, name: 'INGLOT USA', category: 'makeup', description: 'Professional cosmetics' },
        { id: 17, name: 'KREASSIVE', category: 'makeup', description: 'Beauty products' },
        { id: 18, name: 'QUALITY 1ST', category: 'skincare', description: 'Korean beauty' },
        { id: 19, name: 'DORAL', category: 'skincare', description: 'Personal care' },
        { id: 20, name: 'KEHE DISTRIBUTOR', category: 'all', description: '100+ marcas mayoristas' },
    ];

    const filteredBrands = selectedCategory === 'all'
        ? brands
        : brands.filter(b => b.category === selectedCategory);

    return (
        <section id="brands" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Nuestras <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Marcas Premium</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Acceso a 100+ marcas de belleza, cuidado personal y profesional
                    </p>
                </motion.div>

                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                selectedCategory === cat.id
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/40'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredBrands.map((brand, idx) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
                        >
                            <div className="h-16 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                    {brand.name.charAt(0)}
                                </span>
                            </div>
                            <h3 className="font-bold text-white mb-2">{brand.name}</h3>
                            <p className="text-sm text-slate-400 mb-4">{brand.description}</p>
                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                {categories.find(c => c.id === brand.category)?.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-400 mb-6">¿Buscas más marcas? Contáctanos para ver nuestro catálogo completo</p>
                    <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-600/40">
                        Ver Catálogo Completo
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandsShowcase;
