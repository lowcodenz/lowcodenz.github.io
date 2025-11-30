import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LogoBanner from '@/components/LogoBanner';
import HowWeHelp from '@/components/HowWeHelp';
import CaseStudy from '@/components/CaseStudy';
import EnterpriseCredibility from '@/components/EnterpriseCredibility';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LogoBanner />
      <HowWeHelp />
      <CaseStudy />
      <EnterpriseCredibility />
      <Contact />
    </div>
  );
}
