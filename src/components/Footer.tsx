
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-semibold tracking-tight inline-block mb-4">
              <span className="text-primary">Glam</span>Studio
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs">
              Professional makeup artistry for all your special occasions. Enhancing your natural beauty since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Bridal Makeup</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Special Events</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Photoshoots</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Makeup Lessons</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-3">
              <p>123 Beauty Lane</p>
              <p>New York, NY 10001</p>
              <p className="pt-2"><a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></p>
              <p><a href="mailto:hello@glamstudio.com" className="hover:text-primary transition-colors">hello@glamstudio.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-center text-sm">
            © {currentYear} GlamStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
