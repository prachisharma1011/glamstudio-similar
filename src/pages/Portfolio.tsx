
import { useEffect } from "react";
import NavBar from "@/components/NavBar";

const Portfolio = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-24 pb-16 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <p className="text-center text-gray-600 mb-10">Coming soon - Check back for our latest makeup artistry work</p>
      </div>
    </div>
  );
};

export default Portfolio;
