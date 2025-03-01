
import { ArrowRight, Users, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const targetCount = 10;
  
  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, targetCount));
      }, 300); // Count up every 300ms
      
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <>
      <NavBar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">About GlamStudio</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Professional makeup artistry dedicated to enhancing your natural beauty
              for all special occasions since 2010.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-gray-50 py-16 md:py-24">
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

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-gray-600">
                Our team of professional makeup artists is passionate about beauty and dedicated to providing 
                the highest quality service to each and every client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-10px]">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Emma Collins" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Emma Collins</h3>
                  <p className="text-gray-500 mb-3">Founder & Lead Artist</p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in the industry, Emma has worked with celebrities and brides alike.
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-10px]">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Sophia Martinez" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sophia Martinez</h3>
                  <p className="text-gray-500 mb-3">Senior Makeup Artist</p>
                  <p className="text-gray-600 mb-4">
                    Sophia specializes in bridal makeup and is known for her ability to create flawless, long-lasting looks.
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-10px]">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Daniel Kim" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Daniel Kim</h3>
                  <p className="text-gray-500 mb-3">Makeup Artist & Stylist</p>
                  <p className="text-gray-600 mb-4">
                    Daniel brings a creative edge to the team with his background in fashion and editorial makeup.
                  </p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                    <Star className="text-yellow-400 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/booking" 
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Book With Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-gray-600">
                These core principles guide everything we do at GlamStudio, from how we treat our clients to the products we choose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Client-Focused</h3>
                <p className="text-gray-600">
                  We listen carefully to your needs and preferences, ensuring that your vision comes to life.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Star className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality First</h3>
                <p className="text-gray-600">
                  We use only premium, high-quality products that are kind to your skin and deliver stunning results.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  Our artists regularly train in the latest techniques and trends to bring you the best service possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
