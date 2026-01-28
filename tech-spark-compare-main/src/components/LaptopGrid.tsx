import { useState } from 'react';
import { laptops } from '@/data/laptops';
import LaptopCard from './LaptopCard';
import { Laptop } from 'lucide-react';

const LaptopGrid = () => {
  const [selectedId, setSelectedId] = useState<string | null>(laptops[1].id); // Default to RTX 3050

  return (
    <section className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10">
            <Laptop className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Laptops Compared</h2>
            <p className="text-muted-foreground text-sm">Click to select and compare specs</p>
          </div>
        </div>

        {/* Laptop cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {laptops.map((laptop, index) => (
            <LaptopCard
              key={laptop.id}
              laptop={laptop}
              isSelected={selectedId === laptop.id}
              onSelect={() => setSelectedId(laptop.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaptopGrid;
