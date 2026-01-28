import { laptops } from '@/data/laptops';
import { Check, X, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const specs = [
  { key: 'cpu', label: 'Processor' },
  { key: 'graphics', label: 'Graphics Card' },
  { key: 'ram', label: 'RAM' },
  { key: 'storage', label: 'Storage' },
  { key: 'display', label: 'Display' },
  { key: 'gamingCapability', label: 'Gaming Capability' },
  { key: 'bestFor', label: 'Best For' },
  { key: 'priceFormatted', label: 'Price' },
] as const;

const ComparisonTable = () => {
  const getValueStyle = (key: string, value: string) => {
    if (key === 'graphics') {
      if (value.includes('RTX 3050')) return 'text-neon-cyan font-semibold';
      if (value.includes('RTX 2050')) return 'text-neon-purple font-semibold';
      if (value.includes('Integrated')) return 'text-muted-foreground';
    }
    if (key === 'gamingCapability') {
      if (value.includes('Very good')) return 'text-neon-cyan';
      if (value.includes('Good')) return 'text-neon-purple';
      if (value.includes('Low') || value.includes('low')) return 'text-neon-orange';
    }
    if (key === 'priceFormatted') return 'text-gradient font-bold text-lg';
    return '';
  };

  return (
    <section className="py-16 px-4 overflow-x-auto">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Full Specification Comparison</h2>
          <p className="text-muted-foreground">Side-by-side specs breakdown</p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-secondary/50 rounded-tl-lg font-semibold text-muted-foreground">
                  Feature
                </th>
                {laptops.map((laptop, index) => (
                  <th 
                    key={laptop.id} 
                    className={cn(
                      "p-4 bg-secondary/50 font-semibold text-center",
                      index === laptops.length - 1 && "rounded-tr-lg"
                    )}
                  >
                    <div className="text-sm md:text-base">{laptop.shortName}</div>
                    <div className="text-xs text-muted-foreground font-normal mt-1">
                      {laptop.tier === 'premium' && '⭐ Best Value'}
                      {laptop.tier === 'gaming' && '🎮 Gaming'}
                      {laptop.tier === 'budget' && '💼 Everyday'}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, rowIndex) => (
                <tr 
                  key={spec.key}
                  className={cn(
                    "border-t border-border transition-colors hover:bg-secondary/30",
                    rowIndex % 2 === 0 && "bg-secondary/10"
                  )}
                >
                  <td className="p-4 font-medium text-muted-foreground">
                    {spec.label}
                  </td>
                  {laptops.map((laptop) => {
                    const value = laptop[spec.key as keyof typeof laptop] as string;
                    return (
                      <td 
                        key={laptop.id} 
                        className={cn(
                          "p-4 text-center text-sm",
                          getValueStyle(spec.key, value)
                        )}
                      >
                        {value || <Minus className="w-4 h-4 mx-auto text-muted-foreground/50" />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature icons legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-neon-cyan" />
            <span className="text-muted-foreground">Best Performance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-neon-purple" />
            <span className="text-muted-foreground">Good Performance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-neon-orange" />
            <span className="text-muted-foreground">Basic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
