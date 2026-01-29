import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CorporateCredentials from '@/components/CorporateCredentials';
import ValueProposition from '@/components/ValueProposition';
import ComplianceSection from '@/components/ComplianceSection';
import LogisticsSection from '@/components/LogisticsSection';
import PartnerForm from '@/components/PartnerForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Suplych LLC | Wholesale Strategic Partner | D-U-N-S Verified',
  description: 'Certified US Wholesale Partner based in Florida with Delaware legal foundation. DUNS: 11-911-7820. Specializing in brand protection and scalable logistics.',
  keywords: 'Suplych LLC, Wholesale, Florida Logistics, Delaware LLC, DUNS 119117820, Brand Protection, MAP Compliance',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <CorporateCredentials />
      <ValueProposition />
      <ComplianceSection />
      <LogisticsSection />
      <PartnerForm />
      <Footer />
    </main>
  );
}
