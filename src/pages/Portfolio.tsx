
import { useEffect } from "react";
import { InstagramIcon } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Sample portfolio data - in a real app this would come from a database or API
const clientsData = [
  {
    id: 1,
    name: "Bridal Makeup",
    image: "/lovable-uploads/bb0006b2-016d-4244-8329-5d90627aea3a.png",
    description: "Specialized in traditional and contemporary Indian bridal makeup with meticulous attention to detail.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Wedding Services"
  },
  {
    id: 2,
    name: "Celebrity Makeup",
    image: "/lovable-uploads/cd62e089-15d0-4858-bb9c-87196a45a04e.png",
    description: "Trusted by Bollywood celebrities and influencers for red carpet events and photoshoots.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Entertainment Industry"
  },
  {
    id: 3,
    name: "Party Makeup",
    image: "/lovable-uploads/f74b5818-fe6c-408a-bbe2-90a8d0c9aecf.png",
    description: "Glamorous looks for all your special occasions, from cocktail parties to festival celebrations.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Special Events"
  },
  {
    id: 4,
    name: "Hair Styling",
    image: "/lovable-uploads/daca9489-543b-4828-8fa4-91707720b813.png",
    description: "Expert hair styling services from elegant updos to contemporary cuts and treatments.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Hair Services"
  },
  {
    id: 5,
    name: "Editorial Makeup",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=500",
    description: "Creative makeup artistry for fashion magazines, lookbooks, and commercial campaigns.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Fashion Industry"
  },
  {
    id: 6,
    name: "Wedding Packages",
    image: "https://images.unsplash.com/photo-1609241728358-e7ef22553f8d?q=80&w=500",
    description: "Comprehensive makeup and hair services for the bride and her wedding party.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Bridal Services"
  }
];

const Portfolio = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GlamStudio offers a wide range of professional makeup and hair styling services to bring out your natural beauty.
              Explore our portfolio to see examples of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsData.map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{client.name}</h3>
                      <p className="text-primary text-sm">{client.category}</p>
                    </div>
                    <a 
                      href={client.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors"
                      aria-label={`Visit our Instagram for ${client.name} examples`}
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-gray-600 mt-3">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Want to Book Our Services?</h2>
              <p className="text-gray-600 mb-6">
                Contact us to discuss your specific needs and how GlamStudio can help you look your best for your special occasion.
              </p>
              <a 
                href="/booking" 
                className="inline-block bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
