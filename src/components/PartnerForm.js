"use client";
import React, { useEffect, useState } from 'react';
import { Send, CheckCircle2, FileText, UserPlus } from 'lucide-react';

const PartnerForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formType, setFormType] = useState('wholesale'); // 'wholesale' or 'compliance'

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#request-access') {
                setFormType('compliance');
            } else if (hash === '#contact') {
                setFormType('wholesale');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const isWholesale = formType === 'wholesale';

    return (
        <section id="contact" className="bg-slate-900 py-24 relative overflow-hidden">
            <div id="request-access" className="absolute -top-24" /> {/* Hidden anchor for compliance access */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/2" />

            <div className="section-container relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 bg-blue-900 p-12 text-white flex flex-col justify-between transition-colors duration-500">
                        <div>
                            <div className="mb-6 bg-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                {isWholesale ? <UserPlus className="h-6 w-6 text-blue-400" /> : <FileText className="h-6 w-6 text-blue-400" />}
                            </div>
                            <h2 className="text-4xl font-black mb-6 italic leading-tight">
                                {isWholesale ? 'Apply for Wholesale Account' : 'Request Compliance Access'}
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                {isWholesale
                                    ? 'Start a solid business relationship. Our procurement team will review your profile in less than 48 hours.'
                                    : 'Request access to our tax records and resale certificates for audit and compliance purposes.'}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-blue-400 h-6 w-6" />
                                <span className="text-slate-100 font-medium">Verify Resale Certificate</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-blue-400 h-6 w-6" />
                                <span className="text-slate-100 font-medium">Brand Policy Alignment</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="text-blue-400 h-6 w-6" />
                                <span className="text-slate-100 font-medium">Logistic Capability Review</span>
                            </div>
                        </div>

                        {!isWholesale && (
                            <button
                                onClick={() => setFormType('wholesale')}
                                className="mt-8 text-sm text-blue-300 hover:text-white underline text-left"
                            >
                                Switch to Wholesale Application
                            </button>
                        )}
                    </div>

                    <div className="md:w-3/5 p-12">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received</h3>
                                <p className="text-slate-600">Our team will be in touch shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-blue-900 font-bold hover:underline"
                                >
                                    Send another application
                                </button>
                            </div>
                        ) : (
                            <form action="https://formspree.io/f/xojwwade" method="POST" className="space-y-6">
                                <input type="hidden" name="_subject" value={`${isWholesale ? 'NEW WHOLESALE APPLICATION' : 'TAX ACCESS REQUEST'} - Suplych LLC`} />
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 font-sans uppercase tracking-wider text-blue-900">Company Name *</label>
                                        <input name="company_name" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="Legal Entity Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 font-sans uppercase tracking-wider text-blue-900">Website / LinkedIn *</label>
                                        <input name="website" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="https://..." />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 font-sans uppercase tracking-wider text-blue-900">Contact Name *</label>
                                        <input name="contact_name" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2 font-sans uppercase tracking-wider text-blue-900">Business Email *</label>
                                        <input name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder="sales@company.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 font-sans uppercase tracking-wider text-blue-900">Message (Optional)</label>
                                    <textarea name="message" rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all text-slate-900 placeholder:text-slate-400" placeholder={isWholesale ? "Tell us about your brand or products..." : "Please specify the reason for your request..."}></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-blue-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20">
                                    {isWholesale ? 'Request Onboarding' : 'Request Record Access'} <Send className="h-5 w-5" />
                                </button>

                                <p className="text-center text-xs text-slate-500 mt-4 italic">
                                    Thanks — we’ll reply within 1–2 business days with next steps.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerForm;
