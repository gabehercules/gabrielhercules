import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import RoadmapCard from '../components/RoadmapCard';

export default function Page() {
  return (
    <div className="flex gap-14 flex-col items-start h-screen">
      <Header />
      <Hero />
      <Resume />
      <RoadmapCard />
      <Footer />
    </div>
  );
}
