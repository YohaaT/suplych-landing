import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import WhySuplych from '@/components/WhySuplych';
import ProcessSection from '@/components/ProcessSection';
import CorporateCredentials from '@/components/CorporateCredentials';
import ComplianceSection from '@/components/ComplianceSection';
import LogisticsSection from '@/components/LogisticsSection';
import PartnerForm from '@/components/PartnerForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Suplych LLC | Structured Wholesale Distribution for U.S. Market Expansion',
  description: 'Selective wholesale partnerships focused on volume, continuity, and structured execution for brands expanding in the U.S. market.',
  keywords: 'Suplych LLC, Wholesale, Florida Logistics, Delaware LLC, DUNS 119117820, Brand Protection, MAP Compliance, Market Expansion',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <ValueProposition />
      <WhySuplych />
      <ProcessSection />
      <CorporateCredentials />
      <ComplianceSection />
      <LogisticsSection />
      <PartnerForm />
      <Footer />
    </main>
  );
}
