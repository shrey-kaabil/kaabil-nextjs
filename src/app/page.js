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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Excel />
      <Challenge />
      {/* <DisconnectedEfforts /> */}

      <FAQ />
      <Footer/>
    </main>
  );
}
