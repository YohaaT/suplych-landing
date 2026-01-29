"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/port.jpg"
                    alt="International Port Logistics"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
                            Certfied Wholesale Partner
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Suplych LLC: <span className="text-blue-400">Estrategia y Distribución</span> Confiable
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            Aliados estratégicos con base operativa en Florida, comprometidos con el crecimiento sostenible y la integridad de marca.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 text-center">
                                Solicitar Apertura de Cuenta
                            </a>
                            <a href="#compliance" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                                Ver Compliance de Marca
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
                    >
                        {[
                            { label: 'Operations', value: 'Florida, USA' },
                            { label: 'Legal Entity', value: 'Delaware' },
                            { label: 'Market', value: 'Wholesale' },
                            { label: 'Logistics', value: 'South FL' },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                                <p className="text-white font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
