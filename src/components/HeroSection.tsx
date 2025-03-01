import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
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
            <div className="absolute inset-0 -z-10 bg-[#FFD6E7] rounded-3xl scale-105 transform-gpu"></div>
            <div className="image-container relative rounded-3xl overflow-hidden bg-[#b8b5e9] aspect-[4/5] transition-all duration-500 hover:shadow-xl">
              <img
                src="/lovable-uploads/3c1df1a9-49e8-4423-8240-c3f7bcc48097.png"
                alt="Portrait of a woman with beautiful makeup"
                className="h-full w-full object-cover object-center image-hover-zoom"
                loading="eager" 
                fetchPriority="high"
              />
              <div className="image-overlay absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
