import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import Roadmap from '../components/Roadmap';

export default function Page() {
  return (
    <div className="flex flex-col items-start h-screen">
      <Header />
      <Hero />
      <Resume />
      <Roadmap />
      <Footer />
    </div>
  );
}
