import HeroSection from '@/components/HeroSection';
import LaptopGrid from '@/components/LaptopGrid';
import BenchmarkSection from '@/components/BenchmarkSection';
import ComparisonTable from '@/components/ComparisonTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LaptopGrid />
      <BenchmarkSection />
      <ComparisonTable />
    </div>
  );
};

export default Index;
