"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, Lock, BarChart } from 'lucide-react';

const ComplianceSection = () => {
    return (
        <section id="compliance" className="bg-slate-900 py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4 block">Brand Protection Program</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Compromiso con la <span className="italic text-blue-400">Integridad de Marca</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            En Suplych LLC, entendemos que el valor de un fabricante reside en su posicionamiento de mercado. Implementamos protocolos de cumplimiento rigurosos para salvaguardar su ecosistema de ventas.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: <Lock className="h-6 w-6 text-blue-400" />,
                            title: "Monitoreo Proactivo de MAP",
                            desc: "Vigilancia constante de precios en todos los canales para prevenir la erosión del valor de marca y asegurar la equidad competitiva."
                        },
                        {
                            icon: <ShieldAlert className="h-6 w-6 text-blue-400" />,
                            title: "Detección de Canales Grises",
                            desc: "Protocolos avanzados para identificar e informar sobre vendedores no autorizados que comprometan la cadena de suministro oficial."
                        },
                        {
                            icon: <BarChart className="h-6 w-6 text-blue-400" />,
                            title: "Análisis de Sell-Through",
                            desc: "Reportes detallados de rotación de inventario que permiten a las marcas predecir la demanda y optimizar sus ciclos de producción."
                        },
                        {
                            icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
                            title: "Resale Certificate Management",
                            desc: "Trazabilidad completa de certificados de reventa de Florida y cumplimiento fiscal para auditorías gubernamentales y corporativas."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 bg-slate-800/50 border border-slate-700 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/20">
                            <ShieldAlert className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Solicitud de Credenciales Certificadas</h4>
                            <p className="text-slate-400 text-sm italic">Acceso exclusivo para auditores y directores de ventas de marcas autorizadas.</p>
                        </div>
                    </div>
                    <a href="#request-access" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-black hover:bg-slate-100 transition-all text-sm uppercase tracking-wider">
                        Solicitar Acceso (Resale Cert / Tax ID)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
