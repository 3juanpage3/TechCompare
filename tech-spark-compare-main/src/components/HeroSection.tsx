import { Laptop, Monitor, Cpu, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[Laptop, Monitor, Cpu, Zap].map((Icon, index) => (
              <div 
                key={index}
                className="p-3 rounded-xl bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-primary" />
              </div>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="text-foreground">Laptop </span>
            <span className="text-gradient glow-text">Showdown</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Compare specs, gaming performance, and find the perfect laptop for your needs. 
            Interactive benchmarks and detailed specifications at a glance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-medium">4 Laptops Compared</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-sm font-medium">6 Game Benchmarks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-sm font-medium">Real-time Stats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
