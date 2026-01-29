"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Lock, BarChart } from 'lucide-react';

const ComplianceSection = () => {
    return (
        <section id="compliance" className="bg-slate-900 py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4 block">Orderly Execution</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">Commitment to <span className="text-blue-400">Brand Integrity</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            We implement rigorous compliance protocols to safeguard the sales ecosystem and ensure orderly growth.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            icon: <Lock className="h-6 w-6 text-blue-400" />,
                            title: "Pricing Integrity",
                            desc: "Proactive MAP monitoring to prevent brand value erosion."
                        },
                        {
                            icon: <ShieldAlert className="h-6 w-6 text-blue-400" />,
                            title: "Channel Order",
                            desc: "Channel surveillance to ensure controlled and authorized distribution."
                        },
                        {
                            icon: <BarChart className="h-6 w-6 text-blue-400" />,
                            title: "Data Stability",
                            desc: "Turnover reports to optimize production and demand cycles."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-slate-800/50 border border-slate-700 rounded-3xl backdrop-blur-sm">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl text-center">
                    <p className="text-slate-400 mb-6 italic leading-relaxed">
                        "What do we require? Adherence to your policies, authorized channels, and full onboarding compliance."
                    </p>
                    <a href="#request-access" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-500 transition-all text-sm uppercase tracking-wider shadow-lg shadow-blue-600/20">
                        Request Tax Records (Form DR-13)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
