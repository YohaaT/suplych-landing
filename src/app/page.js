import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandsShowcase from '@/components/BrandsShowcase';
import B2BForm from '@/components/B2BForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Suplych | Distribución Mayorista Beauty & Personal Care Premium',
  description: 'Acceso a 100+ marcas premium de belleza, cuidado personal y hair care. Precios mayoristas competitivos para retailers y salones.',
  keywords: 'Suplych, Mayorista beauty, Beauty wholesale, Personal care, Hair care, Distribuidora belleza',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <BrandsShowcase />
      <B2BForm />
      <Footer />
    </main>
  );
}
