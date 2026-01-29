"use client";
import React from 'react';
import { Send, Search, TrendingUp, ChevronRight } from 'lucide-react';

export default function ProcessSection() {
    return (
        <section className="section-container pt-8 bg-white relative">
            <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6 italic border-l-8 border-blue-900 pl-6 uppercase">
                    How onboarding works
                </h2>
                <p className="mt-4 text-xl text-slate-600 leading-relaxed font-light">
                    A simple, <span className="font-bold text-blue-900 underline decoration-blue-900/30">structured process</span> designed to move fast without compromising brand integrity.
                </p>
            </div>

            <div className="mt-12 grid gap-12 md:grid-cols-3 relative">
                {/* Connector Lines (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-0 transform -translate-y-1/2"></div>

                <div className="relative group z-10">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl group-hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-10 group-hover:bg-blue-900/5 transition-colors"></div>

                        <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 font-black text-xs shadow-lg shadow-blue-900/20">01</div>

                        <div className="mb-6">
                            <Send className="h-8 w-8 text-blue-900" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Request Onboarding</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            Share your basic company information so we can route your application to the right specialized team.
                        </p>
                    </div>
                </div>

                <div className="relative group z-10">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl group-hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-10 group-hover:bg-blue-900/5 transition-colors"></div>

                        <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 font-black text-xs shadow-lg shadow-blue-900/20">02</div>

                        <div className="mb-6">
                            <Search className="h-8 w-8 text-blue-900" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Review & Alignment</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            We align on operational requirements, MOQ policies, and MAP pricing to protect your brand value.
                        </p>
                    </div>
                </div>

                <div className="relative group z-10">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl group-hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-10 group-hover:bg-blue-900/5 transition-colors"></div>

                        <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center mb-6 font-black text-xs shadow-lg shadow-blue-900/20">03</div>

                        <div className="mb-6">
                            <TrendingUp className="h-8 w-8 text-blue-900" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Launch & Scale</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            First PO placement followed by a data-driven replenishment cadence to ensure constant availability.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 group text-blue-900 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                    Start the process <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
}
