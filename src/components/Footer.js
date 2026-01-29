"use client";
import React from 'react';
import { ShieldCheck, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="section-container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <ShieldCheck className="h-8 w-8 text-blue-900" />
                            <span className="text-2xl font-bold text-blue-900 tracking-tight italic">SUPLYCH LLC</span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-8 italic">
                            "Building trust through brand integrity and operational excellence in the US wholesale market."
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-900 hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-900 hover:text-white transition-all">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-blue-900 font-black uppercase text-xs tracking-widest mb-6 font-sans">Corporate</h4>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li><a href="#" className="hover:text-blue-900 transition-colors italic">Privacy Policy</a></li>
                            <li><a href="https://www.dnb.com/business-directory/company-profiles.suplych_llc.97a558d09a534cb5428a224621a48629.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors italic">D&B Profile</a></li>
                            <li><a href="#compliance" className="hover:text-blue-900 transition-colors italic">Brand Compliance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-blue-900 font-black uppercase text-xs tracking-widest mb-6 font-sans">Contact</h4>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-900 mt-0.5 shrink-0" />
                                <span className="text-sm">Miami & Fort Myers, Florida<br /><span className="text-xs text-slate-400 font-normal">Logistic & Operational Hub</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-900" />
                                <span className="text-sm">office@suplych.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100/50 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} Suplych LLC. Registered in Delaware | Operations in Florida, USA | D-U-N-S: 11-911-7820
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
