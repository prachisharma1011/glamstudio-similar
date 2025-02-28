
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceType: "bridal",
  date: "",
  message: ""
};

const Booking = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Booking Request Received",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      // Reset form (not needed since we're showing a success message)
      // setFormData(initialFormState);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to request an appointment with GlamStudio. We'll contact you shortly to confirm your booking.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="bridal">Bridal Makeup</option>
                      <option value="celebrity">Celebrity Makeup</option>
                      <option value="party">Party Makeup</option>
                      <option value="hair">Hair Styling</option>
                      <option value="editorial">Editorial Makeup</option>
                      <option value="wedding">Wedding Package</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-white font-medium py-3 px-4 rounded-full transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Book Appointment"}
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center max-w-2xl mx-auto py-16">
              <div className="bg-green-50 rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-green-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Booking Request!</h2>
                <p className="text-gray-600 mb-6">
                  We have received your request and will contact you shortly to confirm your appointment.
                  Our team is excited to help you look your best for your special occasion!
                </p>
                <div className="mt-8 space-y-4">
                  <p className="font-medium">Booking Details:</p>
                  <div className="text-left max-w-sm mx-auto bg-white p-4 rounded-lg">
                    <p><span className="font-medium">Name:</span> {formData.name}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p>
                      <span className="font-medium">Service:</span> {
                        {
                          'bridal': 'Bridal Makeup',
                          'celebrity': 'Celebrity Makeup',
                          'party': 'Party Makeup',
                          'hair': 'Hair Styling',
                          'editorial': 'Editorial Makeup',
                          'wedding': 'Wedding Package',
                          'other': 'Other Services'
                        }[formData.serviceType]
                      }
                    </p>
                    <p><span className="font-medium">Preferred Date:</span> {new Date(formData.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-gray-500 mt-8">
                  Have questions? <a href="/contact" className="text-primary font-medium">Contact us</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
