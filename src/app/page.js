import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../components/Navbar.css';
import '../components/Hero.css';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FAQ />
    </main>
  );
}
