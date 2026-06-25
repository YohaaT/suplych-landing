"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-amber-500/20 text-amber-300 text-sm font-bold border border-amber-500/30 backdrop-blur-sm">
                                ✨ Distribución Mayorista Premium
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Marcas <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Beauty Premium</span> al Por Mayor
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Acceso a 100+ marcas de belleza, cuidado personal y hair care. Precios mayoristas competitivos, MOQ bajos y envíos rápidos para retailers y salones.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-600/40 text-center">
                                Solicitar Acceso B2B
                            </a>
                            <a href="#brands" className="px-8 py-4 bg-white/10 text-white border border-amber-500/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                                Ver Marcas
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-slate-700 pt-8">
                            {[
                                { icon: ShoppingBag, label: '100+ Marcas', value: 'Premium Selection' },
                                { icon: TrendingUp, label: 'MOQ Bajos', value: 'Desde casos' },
                                { icon: Sparkles, label: 'Envíos Rápidos', value: 'Directo a ti' },
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex gap-3">
                                        <Icon className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-amber-400 font-bold text-sm">{item.label}</p>
                                            <p className="text-slate-400 text-sm">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
