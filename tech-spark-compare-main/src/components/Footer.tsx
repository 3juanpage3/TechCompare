import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-neon-red fill-neon-red" />
            <span>for laptop shoppers</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Prices and specs from</span>
            <a 
              href="https://www.evetech.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Evetech
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-xs">
            Prices in ZAR • Subject to change
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
