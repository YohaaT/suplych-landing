"use client";
import React from 'react';
import { Building2, FileCheck, Shield, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

const CorporateCredentials = () => {
    return (
        <section id="about" className="bg-white border-y border-slate-100">
            <div className="section-container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 italic tracking-tight border-l-4 border-blue-900 pl-4">
                            Estructura Corporativa
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Suplych LLC combina la solidez legal de una entidad registrada en <strong>Delaware</strong> con la agilidad operativa de nuestras oficinas y centros logísticos en <strong>Florida</strong>. Esta estructura garantiza una gestión administrativa eficiente y una distribución rápida desde los principales puertos del sur de EE.UU.
                        </p>

                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4 border border-slate-200">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <MapPin className="text-blue-900 h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">Operaciones y Logística</p>
                                    <p className="text-slate-800 font-bold">Miami & Fort Myers</p>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4 border border-slate-200">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Shield className="text-blue-900 h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">Florida Annual Resale Certificate</p>
                                    <p className="text-slate-800 font-bold tracking-tight">Active & Verified (Form DR-13)</p>
                                </div>
                            </div>

                            <a
                                href="https://www.dnb.com/business-directory/company-profiles.suplych_llc.97a558d09a534cb5428a224621a48629.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 bg-slate-50 text-slate-900 rounded-xl flex flex-col sm:flex-row items-center gap-6 border border-slate-200 shadow-lg hover:bg-white transition-all cursor-pointer group"
                            >
                                <div className="bg-blue-900 p-3 rounded-2xl relative overflow-hidden shrink-0">
                                    <Award className="text-white h-8 w-8 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-[10px] text-blue-900 font-black uppercase tracking-[0.2em] mb-1">Dun & Bradstreet Verified</p>
                                    <p className="text-xl font-black tracking-widest text-slate-900 mb-4 sm:mb-0">D-U-N-S: 11-911-7820</p>
                                </div>
                                <div className="w-32 h-20 relative shrink-0">
                                    <Image
                                        src="/images/duns-seal.webp"
                                        alt="DUNS Seal"
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-8 bg-blue-900 text-white rounded-2xl flex flex-col items-center text-center justify-center border border-blue-800 shadow-lg">
                            <Building2 className="h-10 w-10 mb-4 opacity-80" />
                            <p className="text-2xl font-black mb-1 text-white">Florida</p>
                            <p className="text-xs uppercase tracking-wider opacity-70 italic font-bold">Commercial Address</p>
                        </div>
                        <div className="p-8 bg-slate-100 rounded-2xl flex flex-col items-center text-center justify-center border border-slate-200">
                            <FileCheck className="h-10 w-10 mb-4 text-blue-900" />
                            <p className="text-2xl font-black text-slate-900 mb-1">State Tax ID</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">FL Validated</p>
                        </div>
                        <div className="col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-600 italic">"Nuestra transparencia financiera y operativa, respaldada por validaciones de terceros como Dun & Bradstreet, asegura relaciones comerciales libres de fricción."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateCredentials;
