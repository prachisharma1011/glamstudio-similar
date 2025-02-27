
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="hero-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`space-y-6 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Enhance Your <br />
              Natural <br />
              <span className="text-primary">Beauty</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md">
              Professional makeup artistry for weddings, special events, and photoshoots. Let us bring out your inner glow.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => navigate('/booking')}
                variant="primary"
              >
                Book Now
              </Button>
              
              <Button 
                onClick={() => navigate('/portfolio')}
                variant="secondary"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 -z-10 bg-pink-light rounded-2xl -rotate-2 scale-105 transform-gpu"></div>
            <div className="relative rounded-2xl overflow-hidden bg-[#e5d0ff] aspect-[9/11]">
              <img
                src="/lovable-uploads/74512d79-40f0-45b7-8cec-8dbcc5cf5b2d.png"
                alt="Portrait of a woman with beautiful makeup"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
