
import { useState, useEffect } from "react";

const StorySection = () => {
  const [count, setCount] = useState(0);
  const targetCount = 10;
  
  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, targetCount));
      }, 100); // Count up every 100ms for fast animation
      
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <section id="our-story" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010 by renowned makeup artist Emma Collins, GlamStudio was born from a passion 
              for helping people feel confident and beautiful. What started as a small studio with just 
              two makeup artists has grown into a team of talented professionals dedicated to bringing out 
              the best in every client.
            </p>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in the beauty industry, we've had the privilege of working 
              with thousands of clients for their special days, from brides on their wedding day to models 
              for high-fashion photoshoots, and everyday people looking to feel extraordinary.
            </p>
            <p className="text-gray-600">
              Our philosophy is simple: enhance, not mask. We believe in highlighting your natural beauty 
              and creating looks that make you feel like the best version of yourself.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Makeup artist at work" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg hidden md:block">
                <div className="flex items-end">
                  <span className="text-4xl font-bold transition-all duration-300">{count}</span>
                  <span className="text-4xl font-bold">+</span>
                </div>
                <p className="text-sm uppercase tracking-wider">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
