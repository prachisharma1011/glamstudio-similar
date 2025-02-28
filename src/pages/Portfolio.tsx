
import { useEffect } from "react";
import { InstagramIcon } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Sample portfolio data - in a real app this would come from a database or API
const clientsData = [
  {
    id: 1,
    name: "Vogue Magazine",
    image: "https://images.unsplash.com/photo-1604842585295-79c632eca0e7?q=80&w=500",
    description: "Collaborated on multiple high-fashion photoshoots featuring traditional Indian bridal makeup.",
    instagramUrl: "https://instagram.com/voguemagazine",
    category: "Fashion Magazine"
  },
  {
    id: 2,
    name: "Celebrity Weddings",
    image: "https://images.unsplash.com/photo-1610782466215-ebda61a7546e?q=80&w=500",
    description: "Provided makeup services for several A-list Indian celebrity weddings in the last year.",
    instagramUrl: "https://instagram.com/glamstudio",
    category: "Celebrity Events"
  },
  {
    id: 3,
    name: "Fashion Week",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=500",
    description: "Official makeup partner for the Spring/Summer Indian bridal runway shows at Fashion Week.",
    instagramUrl: "https://instagram.com/fashionweek",
    category: "Runway Events"
  },
  {
    id: 4,
    name: "Luxury Hotels",
    image: "https://images.unsplash.com/photo-1628921919890-8d0839d99582?q=80&w=500",
    description: "Exclusive bridal makeup services for destination Indian weddings at premier luxury hotels.",
    instagramUrl: "https://instagram.com/luxuryhotels",
    category: "Hospitality"
  },
  {
    id: 5,
    name: "Red Carpet Events",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=500",
    description: "Trusted by Bollywood celebrities for major award shows and film premieres.",
    instagramUrl: "https://instagram.com/redcarpetevents",
    category: "Entertainment Industry"
  },
  {
    id: 6,
    name: "Bridal Magazines",
    image: "https://images.unsplash.com/photo-1609241728358-e7ef22553f8d?q=80&w=500",
    description: "Featured in leading bridal publications for innovative Indian wedding makeup artistry.",
    instagramUrl: "https://instagram.com/bridalmagazine",
    category: "Bridal Publications"
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GlamStudio has had the privilege of working with some of the most prestigious brands and clients in the industry. 
              Below are some of our most notable collaborations featuring Indian bridal makeup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsData.map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                      aria-label={`Visit ${client.name}'s Instagram`}
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
              <h2 className="text-2xl font-semibold mb-4">Want to Work With Us?</h2>
              <p className="text-gray-600 mb-6">
                We're always looking to collaborate with new brands and clients. 
                Contact us to discuss how GlamStudio can elevate your next project.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary text-white rounded-full px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
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
