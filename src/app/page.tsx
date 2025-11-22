import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HowWeHelp from '@/components/HowWeHelp';
import EnterpriseCredibility from '@/components/EnterpriseCredibility';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <HowWeHelp />
      <EnterpriseCredibility />
      <Contact />
    </div>
  );
}
