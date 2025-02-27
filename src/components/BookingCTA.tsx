
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BookingCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-pink-100/50 parallax-bg parallax-medium">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto parallax-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your <span className="text-primary">Natural Beauty</span>?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Book a session with our professional makeup artists and look your best for your next special occasion.
          </p>
          <Button 
            onClick={() => navigate('/booking')}
            variant="primary"
            size="lg"
            className="shadow-lg shadow-primary/20 animate-pulse-soft"
          >
            Book a Session Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
