"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/suplych-logo.svg"
                                alt="Suplych"
                                width={40}
                                height={40}
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">SUPLYCH</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Distribución mayorista de marcas premium de belleza y cuidado personal.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li><a href="#brands" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Catálogo de Marcas</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Solicitar Acceso B2B</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Precios Mayoristas</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Soporte</a></li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Sobre Nosotros</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Política de Privacidad</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Términos y Condiciones</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <div className="space-y-3">
                            <a href="mailto:info@suplych.com" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm">
                                <Mail className="h-4 w-4" />
                                info@suplych.com
                            </a>
                            <a href="tel:+1" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm">
                                <Phone className="h-4 w-4" />
                                +1 (555) 123-4567
                            </a>
                            <div className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                <span>Florida, USA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8">
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 border border-blue-500/20 rounded-lg p-8 inline-block">
                            <h4 className="font-bold text-white mb-2 text-lg">¿Listo para Distribuir?</h4>
                            <p className="text-slate-400 text-sm mb-6 max-w-md">
                                Únete a nuestro programa B2B. Acceso a precios mayoristas, MOQ bajos y soporte directo.
                            </p>
                            <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-blue-600/40">
                                Solicitar Acceso B2B
                            </a>
                        </div>
                    </div>

                    <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
                        <p>© {currentYear} Suplych LLC. Todos los derechos reservados. | Distribución de Belleza Premium</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
