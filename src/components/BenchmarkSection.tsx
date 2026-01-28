import { useState, useEffect, useRef } from 'react';
import { gameBenchmarks, laptops } from '@/data/laptops';
import FPSBar from './FPSBar';
import { Gamepad2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const laptopColors: Record<string, string> = {
  'loq-rtx2050': 'hsl(280, 100%, 65%)', // purple
  'loq-rtx3050': 'hsl(174, 100%, 50%)', // cyan
  'ideapad-1': 'hsl(142, 76%, 50%)', // green
  'ideapad-slim3': 'hsl(25, 95%, 53%)', // orange
};

const BenchmarkSection = () => {
  const [selectedGame, setSelectedGame] = useState(gameBenchmarks[0].game);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleBenchmarks, setVisibleBenchmarks] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentBenchmark = gameBenchmarks.find(b => b.game === selectedGame);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const game = entry.target.getAttribute('data-game');
          if (game) {
            if (entry.isIntersecting) {
              setVisibleBenchmarks(prev => new Set(prev).add(game));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-game]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10">
            <Gamepad2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Gaming Benchmarks</h2>
            <p className="text-muted-foreground text-sm">FPS comparison across popular titles</p>
          </div>
        </div>

        {/* Game selector dropdown */}
        <div className="relative mb-8">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full md:w-80 px-4 py-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
          >
            <span className="font-medium">{selectedGame}</span>
            <ChevronDown className={cn(
              "w-5 h-5 text-muted-foreground transition-transform",
              isDropdownOpen && "rotate-180"
            )} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full md:w-80 rounded-lg bg-card border border-border shadow-xl z-20 overflow-hidden animate-scale-in">
              {gameBenchmarks.map((benchmark) => (
                <button
                  key={benchmark.game}
                  onClick={() => {
                    setSelectedGame(benchmark.game);
                    setIsDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-secondary transition-colors",
                    selectedGame === benchmark.game && "bg-primary/10 text-primary"
                  )}
                >
                  {benchmark.game}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Current game benchmark */}
        {currentBenchmark && (
          <div 
            data-game={currentBenchmark.game}
            className="stat-card p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">{currentBenchmark.game}</h3>
            
            <div className="space-y-5">
              {laptops.map((laptop, index) => {
                const benchmarkData = currentBenchmark.laptops[laptop.id];
                if (!benchmarkData) return null;

                return (
                  <FPSBar
                    key={laptop.id}
                    laptopId={laptop.id}
                    laptopName={laptop.shortName}
                    fps={benchmarkData.fps}
                    min={benchmarkData.min}
                    max={benchmarkData.max}
                    color={laptopColors[laptop.id]}
                    isVisible={visibleBenchmarks.has(currentBenchmark.game)}
                    delay={index * 100}
                  />
                );
              })}
            </div>

            {/* FPS legend */}
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-px bg-muted-foreground/40" />
                <span>60 FPS (Smooth)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-px bg-muted-foreground/40" />
                <span>120 FPS (Competitive)</span>
              </div>
            </div>
          </div>
        )}

        {/* All games overview */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gameBenchmarks.filter(b => b.game !== selectedGame).map((benchmark) => (
            <button
              key={benchmark.game}
              onClick={() => setSelectedGame(benchmark.game)}
              className="stat-card p-4 text-left hover:border-primary/50 transition-all group"
            >
              <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                {benchmark.game}
              </h4>
              <div className="space-y-2">
                {laptops.slice(0, 2).map((laptop) => {
                  const data = benchmark.laptops[laptop.id];
                  if (!data) return null;
                  return (
                    <div key={laptop.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{laptop.shortName}</span>
                      <span className="font-mono">{data.fps}</span>
                    </div>
                  );
                })}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenchmarkSection;
