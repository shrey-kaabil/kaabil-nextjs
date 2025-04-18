import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import '../components/Navbar/Navbar.css';
import '../components/Hero/Hero.css';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';
import Challenge from '@/components/Challenge/Challenge';
import DisconnectedEfforts from '@/components/DisconnectedEfforts/DisconnectedEfforts';
import Excel from '@/components/Excel/Excel';
import '../components/Challenge/Challenge.css';
import '../components/DisconnectedEfforts/DisconnectedEfforts.css';
import '../components/Excel/Excel.css';
import Solutions from '@/components/Solutions/Solutions';
import Join from '@/components/Join/Join';
import Stories from '@/components/Stories/Stories';
import Launching from '@/components/Launching/Launching';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Excel />
      <Solutions />
      <Join />
      <Stories />
      <Challenge />
      <Launching />
      <FAQ />
      <Footer/>
    </main>
  );
}
