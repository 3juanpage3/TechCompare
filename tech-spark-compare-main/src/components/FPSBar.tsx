import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FPSBarProps {
  laptopId: string;
  laptopName: string;
  fps: string;
  min: number;
  max: number;
  maxFPS?: number;
  color: string;
  isVisible: boolean;
  delay?: number;
}

const FPSBar = ({ 
  laptopName, 
  fps, 
  min, 
  max, 
  maxFPS = 220, 
  color, 
  isVisible,
  delay = 0 
}: FPSBarProps) => {
  const [animated, setAnimated] = useState(false);
  const percentage = (max / maxFPS) * 100;
  const minPercentage = (min / maxFPS) * 100;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimated(true), delay);
      return () => clearTimeout(timer);
    } else {
      setAnimated(false);
    }
  }, [isVisible, delay]);

  const getPerformanceLevel = () => {
    if (max >= 120) return { label: 'Excellent', textColor: 'text-neon-cyan' };
    if (max >= 60) return { label: 'Playable', textColor: 'text-neon-green' };
    if (max >= 30) return { label: 'Low', textColor: 'text-neon-orange' };
    return { label: 'Unplayable', textColor: 'text-neon-red' };
  };

  const perf = getPerformanceLevel();

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium truncate max-w-[120px]">{laptopName}</span>
        <div className="flex items-center gap-2">
          <span className={cn("text-xs font-medium", perf.textColor)}>{perf.label}</span>
          <span className="text-sm font-mono font-bold text-foreground">{fps}</span>
        </div>
      </div>
      
      <div className="fps-bar h-3 relative">
        {/* Min-max range indicator */}
        <div 
          className="absolute h-full transition-all duration-700 ease-out rounded-full opacity-30"
          style={{ 
            left: `${animated ? minPercentage : 0}%`,
            width: `${animated ? percentage - minPercentage : 0}%`,
            backgroundColor: color,
            transitionDelay: `${delay}ms`,
          }}
        />
        
        {/* Main bar (max value) */}
        <div 
          className="fps-bar-fill relative"
          style={{ 
            width: `${animated ? percentage : 0}%`,
            backgroundColor: color,
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* FPS markers */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
          <div className="absolute left-[27.3%] h-full w-px bg-muted-foreground/20" title="60 FPS" />
          <div className="absolute left-[54.5%] h-full w-px bg-muted-foreground/20" title="120 FPS" />
        </div>
      </div>
    </div>
  );
};

export default FPSBar;
