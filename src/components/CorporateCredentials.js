"use client";
import React from 'react';
import { Building2, FileCheck, Shield, MapPin, Award } from 'lucide-react';
import Image from 'next/image';

const CorporateCredentials = () => {
    return (
        <section id="about" className="bg-white border-y border-slate-100 italic">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Corporate Credentials</h2>
                        <p className="text-slate-600">Verification of our operational and legal readiness.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* D-U-N-S Badge */}
                        <a
                            href="https://www.dnb.com/business-directory/company-profiles.suplych_llc.97a558d09a534cb5428a224621a48629.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group lg:col-span-1"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-24 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                                    <Image
                                        src="/images/duns-seal.webp"
                                        alt="DUNS Seal"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-blue-900 font-black uppercase tracking-[0.1em] mb-1">D&B Verified</p>
                                    <p className="text-lg font-black text-slate-900">11-911-7820</p>
                                </div>
                            </div>
                        </a>

                        {/* Florida Badge */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center">
                            <MapPin className="h-8 w-8 text-blue-900 mb-3" />
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Operational address</p>
                            <p className="text-slate-900 font-bold">Miami & Fort Myers, FL</p>
                        </div>

                        {/* EIN/Tax Badge */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center">
                            <Shield className="h-8 w-8 text-blue-900 mb-3" />
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Tax Compliance</p>
                            <p className="text-slate-900 font-bold">EIN & Tax ID Active</p>
                        </div>

                        {/* Resale Badge */}
                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center gap-4 border-l-4 border-l-blue-900 lg:col-span-3">
                            <FileCheck className="h-8 w-8 text-blue-900" />
                            <div className="text-left">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Florida Annual Resale Certificate</p>
                                <p className="text-slate-900 font-bold">Active & Verified (Form DR-13)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateCredentials;
