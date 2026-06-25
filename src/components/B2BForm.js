"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const B2BForm = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        businessType: '',
        state: '',
        message: '',
        agreeTerms: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const businessTypes = [
        'Salón de Belleza',
        'Tienda Retail',
        'Distribuidor Local',
        'Estética/Spa',
        'Otro',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Enviar a admin@suplych.com usando FormSubmit
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
                setFormData({
                    businessName: '',
                    ownerName: '',
                    email: '',
                    phone: '',
                    businessType: '',
                    state: '',
                    message: '',
                    agreeTerms: false,
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Únete a Nuestro <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Programa B2B</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Completa este formulario y nos pondremos en contacto en 24 horas
                    </p>
                </motion.div>

                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                    >
                        <CheckCircle className="h-6 w-6 text-green-400" />
                        <p className="text-green-400 font-semibold">¡Solicitud enviada! Revisaremos tu información pronto.</p>
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Nombre del Negocio *
                            </label>
                            <input
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Tu negocio"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Tu Nombre *
                            </label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Juan Pérez"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Teléfono *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Tipo de Negocio *
                            </label>
                            <select
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                            >
                                <option value="">Selecciona...</option>
                                {businessTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Estado *
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Florida"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">
                            Mensaje adicional
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                            placeholder="Cuéntanos sobre tu negocio y qué marcas te interesan..."
                        />
                    </div>

                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                            className="mt-1 w-4 h-4 accent-blue-600"
                        />
                        <label className="text-sm text-slate-400">
                            Acepto la política de privacidad y términos B2B de Suplych
                        </label>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-600/40 flex items-center justify-center gap-2"
                    >
                        <Send className="h-5 w-5" />
                        Solicitar Acceso B2B
                    </motion.button>
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                    {[
                        { icon: '⚡', title: 'Respuesta Rápida', desc: 'En 24 horas' },
                        { icon: '💎', title: 'Precios Mayoristas', desc: 'Competitivos' },
                        { icon: '📦', title: 'Envíos Rápidos', desc: 'Desde casos' },
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <h3 className="font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BForm;
