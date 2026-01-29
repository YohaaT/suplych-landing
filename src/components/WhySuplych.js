"use client";
import React from 'react';
import { Users, Rocket, ShieldCheck } from 'lucide-react';

export default function WhySuplych() {
    return (
        <section className="section-container bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6 italic border-l-8 border-blue-900 pl-6">
                        Why Suplych
                    </h2>
                    <p className="mt-4 text-xl text-slate-600 leading-relaxed font-light">
                        We operate as a <span className="font-bold text-blue-900">selective wholesale partner</span> focused on long-term value, stability, and disciplined execution for premium brands.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                            <Users className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Selective Partnerships</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            We prioritize stable, multi-year supplier relationships over transactional one-off orders to ensure mutual growth.
                        </p>
                    </div>

                    <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                            <Rocket className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Structured Execution</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Clear onboarding, responsive daily communication, and data-driven replenishment cadences.
                        </p>
                    </div>

                    <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                            <ShieldCheck className="h-7 w-7 text-blue-900 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Operational Readiness</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                            Full compliance ready: EIN, State Tax ID, D-U-N-S 11-911-7820, and Florida physical presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
