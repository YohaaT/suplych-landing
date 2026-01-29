"use client";
import React from 'react';
import { ShieldCheck, Truck, BarChart3, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const props = [
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Cumplimiento de MAP",
        desc: "Rigurosa protección del Minimum Advertised Price para mantener el valor de marca."
    },
    {
        icon: <Truck className="h-8 w-8" />,
        title: "Logística Eficiente",
        desc: "Cadena de suministro optimizada con tiempos de recepción y despacho mínimos."
    },
    {
        icon: <BarChart3 className="h-8 w-8" />,
        title: "Marketing Ético",
        desc: "Representación de marca profesional, evitando canales de venta no autorizados."
    },
    {
        icon: <Wallet className="h-8 w-8" />,
        title: "Pagos Puntuales",
        desc: "Solidez financiera garantizando el cumplimiento de términos de crédito y pagos."
    }
];

const ValueProposition = () => {
    return (
        <section id="value" className="bg-slate-50">
            <div className="section-container">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestra Propuesta de Valor</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        No solo distribuimos productos; protegemos y potenciamos su marca en el mercado estadounidense.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {props.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:shadow-blue-900/5 group"
                        >
                            <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                                {p.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
