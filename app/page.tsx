import { Hero } from "@/components/home/hero";
import { QuickFilters } from "@/components/home/quick-filters";
import { FeaturedJets } from "@/components/home/featured-jets";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickFilters />
      <FeaturedJets />
    </div>
  );
}

