
import { Sparkles } from "lucide-react";

const services = [
  {
    title: "Bridal Makeup",
    description: "Complete bridal packages including trials, wedding day makeup, and touch-ups throughout your special day.",
    icon: Sparkles
  },
  {
    title: "Special Events",
    description: "Glamorous makeup for proms, galas, parties, and any special occasion that calls for a stunning look.",
    icon: Sparkles
  },
  {
    title: "Professional Photoshoots",
    description: "Camera-ready makeup that enhances your features and ensures you look flawless in every shot.",
    icon: Sparkles
  },
  {
    title: "Makeup Lessons",
    description: "One-on-one sessions to teach you professional techniques and help you perfect your everyday makeup routine.",
    icon: Sparkles
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 parallax-bg parallax-medium">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 parallax-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Beauty <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your look with our professional makeup services. Whether it's your wedding day or a special event, we'll help you shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 parallax-fast">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 -z-10 bg-[#FFD6E7] rounded-3xl scale-[1.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
