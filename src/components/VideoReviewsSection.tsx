
import { useState } from "react";
import { Play, Pause } from "lucide-react";

// Mock data for video reviews
const videoReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    videoSrc: "https://www.example.com/review1.mp4", // Replace with actual video URLs
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "My makeup lasted all day through tears, hugs, and dancing!"
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "Corporate Event",
    videoSrc: "https://www.example.com/review2.mp4",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    quote: "Everyone was asking who did my makeup. Highly recommend!"
  },
  {
    id: 3,
    name: "Jennifer Smith",
    role: "Photoshoot Client",
    videoSrc: "https://www.example.com/review3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
    quote: "The photos turned out amazing! Worth every penny."
  }
];

const VideoReviewsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = (id: number) => {
    if (activeVideo === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveVideo(id);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-primary">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from our clients about their experiences and transformations with our makeup services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoReviews.map((review) => (
            <div 
              key={review.id} 
              className="rounded-3xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {/* This would be a real video in production */}
                <img 
                  src={review.thumbnail} 
                  alt={review.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <button 
                    onClick={() => handleVideoPlay(review.id)}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                    aria-label={isPlaying && activeVideo === review.id ? "Pause video" : "Play video"}
                  >
                    {isPlaying && activeVideo === review.id ? (
                      <Pause className="w-6 h-6 text-primary" />
                    ) : (
                      <Play className="w-6 h-6 text-primary ml-1" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                <p className="text-primary text-sm mb-3">{review.role}</p>
                <p className="text-gray-600 italic">"{review.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviewsSection;
