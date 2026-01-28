import { Laptop, getTierColor, getTierLabel } from '@/data/laptops';
import { Cpu, HardDrive, Monitor, Gamepad2, MemoryStick } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LaptopCardProps {
  laptop: Laptop;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

const LaptopCard = ({ laptop, isSelected, onSelect, index }: LaptopCardProps) => {
  const tierColor = getTierColor(laptop.tier);
  const tierLabel = getTierLabel(laptop.tier);

  return (
    <div
      onClick={onSelect}
      className={cn(
        "stat-card cursor-pointer card-hover animate-fade-in group",
        isSelected && "ring-2 ring-primary glow-primary"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Tier badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
          `bg-${tierColor}/20 text-${tierColor}`
        )}
        style={{
          backgroundColor: `hsl(var(--${tierColor}) / 0.15)`,
          color: `hsl(var(--${tierColor}))`,
        }}
        >
          {tierLabel}
        </span>
        <div className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          isSelected ? "bg-primary scale-125" : "bg-muted-foreground/30"
        )} />
      </div>

      {/* Laptop name */}
      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
        {laptop.shortName}
      </h3>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-1">
        {laptop.name}
      </p>

      {/* Price */}
      <div className="text-2xl font-black text-gradient mb-6">
        {laptop.priceFormatted}
      </div>

      {/* Specs grid */}
      <div className="space-y-3">
        <SpecRow icon={Cpu} label="CPU" value={laptop.cpu} />
        <SpecRow icon={Monitor} label="GPU" value={laptop.graphics} />
        <SpecRow icon={MemoryStick} label="RAM" value={laptop.ram} />
        <SpecRow icon={HardDrive} label="Storage" value={laptop.storage} />
        <SpecRow icon={Gamepad2} label="Gaming" value={laptop.gamingCapability} />
      </div>

      {/* Best for */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-1">Best For</p>
        <p className="text-sm font-medium text-primary">{laptop.bestFor}</p>
      </div>
    </div>
  );
};

const SpecRow = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="p-1.5 rounded-md bg-secondary shrink-0">
      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-medium truncate">{value}</p>
    </div>
  </div>
);

export default LaptopCard;
