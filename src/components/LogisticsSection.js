"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Globe2, TrendingUp, Cpu, Truck } from 'lucide-react';

const LogisticsSection = () => {
    return (
        <section className="bg-white overflow-hidden">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 italic border-l-4 border-blue-900 pl-4">Excelencia Operativa</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Optimizamos la gestión de almacenes mediante sistemas de control de inventario avanzados y protocolos de recepción rigurosos. Nuestra capacidad de absorción logística permite escalar volúmenes de compra sin comprometer los tiempos de procesamiento y despacho.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: 'Indice de Precisión en Inventario (Inventory Accuracy Index)', value: 99.8, color: 'bg-blue-600' },
                                { label: 'Forecast Accuracy (Proyectado)', value: 94.5, color: 'bg-blue-400' },
                                { label: 'Cumplimiento de Lead Time (On-Time In-Full)', value: 99.2, color: 'bg-slate-800' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{stat.label}</span>
                                        <span className="text-sm font-black text-blue-900">{stat.value}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className={`h-full ${stat.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                                <Globe2 className="h-10 w-10 mb-6 text-blue-400" />
                                <h4 className="text-xl font-bold mb-2">Omnicanalidad Controlada</h4>
                                <p className="text-slate-400 text-sm italic">Gestión de stock centralizada para prevenir sobreventas y rupturas de inventario.</p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col justify-center">
                                <TrendingUp className="h-10 w-10 mb-6 text-blue-900" />
                                <p className="text-4xl font-black text-blue-900">YOY</p>
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">Growth: +68.5%</p>
                                <p className="text-[10px] text-blue-400 font-bold mt-2">Organic Distribution</p>
                            </div>
                            <div className="col-span-2 bg-slate-50 p-8 rounded-3xl border border-slate-200 flex items-center gap-6">
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                    <Truck className="h-8 w-8 text-blue-900" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Manejo de Carga Especializada</h4>
                                    <p className="text-slate-500 text-sm italic">Experiencia en manejo de productos electrónicos y bienes de consumo de alta rotación.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogisticsSection;
