"use client";
import React from 'react';
import { ShieldCheck, Truck, BarChart3, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const props = [
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "MAP Compliance",
        desc: "Rigorous protection of Minimum Advertised Price to preserve brand value."
    },
    {
        icon: <Truck className="h-8 w-8" />,
        title: "Efficient Logistics",
        desc: "Optimized supply chain with minimal receiving and dispatch lead times."
    },
    {
        icon: <BarChart3 className="h-8 w-8" />,
        title: "Ethical Marketing",
        desc: "Professional brand representation, avoiding unauthorized sales channels."
    },
    {
        icon: <Wallet className="h-8 w-8" />,
        title: "On-Time Payments",
        desc: "Financial strength ensuring compliance with credit and payment terms."
    }
];

const ValueProposition = () => {
    return (
        <section id="value" className="bg-slate-50">
            <div className="section-container">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Value Proposition</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We don't just distribute products; we protect and scale your brand in the U.S. market.
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
