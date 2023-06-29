import Hero from '../components/Hero';
import Resume from '../components/Resume';
import RoadmapCard from '../components/RoadmapCard';

export default function Page() {
  return (
    <div className="flex gap-14 flex-col items-start h-screen">
      <Hero />
      <Resume />
      <RoadmapCard />
    </div>
  );
}
