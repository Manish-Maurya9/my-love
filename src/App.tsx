import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Camera, Music } from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Placeholder images from Pexels - replace with actual photos
  const galleryImages = [
    '/WhatsApp Image 2025-07-05 at 20.03.29_555c79f1.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.30_4b4ad991.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.34_a493267c.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.31_9830ab39.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.31_c40d01d0.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.31_da245895.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.32_9a2b2507.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.32_9987f915.jpg',
    '/WhatsApp Image 2025-07-05 at 20.03.33_8e9c2c5c.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.32_db2858a7.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.33_8e9c2c5c.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.33_d1f31e12.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.33_d7612646.jpg',
     '/WhatsApp Image 2025-07-05 at 20.03.30_91bbbf6f.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.34_1c2306f5.jpg',
  
   '/WhatsApp Image 2025-07-05 at 20.03.34_d1a698d9.jpg',
   '/WhatsApp Image 2025-07-05 at 20.03.35_f2304956.jpg'

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Handle the play/pause action
 
    return () => clearInterval(interval);
  }, [galleryImages.length]);

   useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);


  const FloatingPetals = () => {
    const petals = Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-float opacity-40"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${8 + Math.random() * 4}s`,
        }}
      >
        <div className="w-3 h-3 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-sm"></div>
      </div>
    ));
    return <div className="fixed inset-0 pointer-events-none overflow-hidden">{petals}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      <FloatingPetals />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <Heart className="w-20 h-20 mx-auto text-rose-400 mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-6 font-serif">
            My Darling
          </h1>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
              Even though we're miles apart, you're always in my thoughts and forever in my heart. 
              Each day without you feels like an eternity, but knowing that we share the same sky 
              and the same stars brings me comfort. This little space is dedicated to you, 
              my love, my light, my everything.
            </p>
            
            <div className="flex justify-center space-x-4 text-rose-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <Heart className="w-6 h-6 animate-bounce" />
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 mx-auto text-rose-400 mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              Memories of You
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Every photo tells a story, every smile lights up my world
            </p>
          </div>

          {/* Main Portrait Slideshow */}
          <div className="relative mb-12">
            <div className="aspect-[9/16] max-w-sm mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Beautiful moment ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">
                  {currentImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Portrait Thumbnail Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-[9/16] relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === currentImageIndex ? 'ring-3 ring-rose-400 shadow-lg' : 'hover:shadow-xl'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                {index === currentImageIndex && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Heart-shaped photo collage for desktop */}
          <div className="hidden lg:block mt-20">
            <div className="relative max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 font-serif mb-2">
                  My Heart is Full of You
                </h3>
                <p className="text-gray-600 font-light">A collection of beautiful moments</p>
              </div>
              
              {/* Heart-shaped grid */}
              <div className="relative h-96 mx-auto" style={{ width: '400px' }}>
                {galleryImages.slice(0, 6).map((image, index) => {
                  const positions = [
                    { top: '10%', left: '35%', transform: 'rotate(-15deg)' },
                    { top: '10%', right: '35%', transform: 'rotate(15deg)' },
                    { top: '35%', left: '20%', transform: 'rotate(-8deg)' },
                    { top: '35%', right: '20%', transform: 'rotate(8deg)' },
                    { top: '60%', left: '30%', transform: 'rotate(-5deg)' },
                    { bottom: '10%', left: '50%', transform: 'translateX(-50%) rotate(0deg)' },
                  ];
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-20 h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={positions[index]}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Heart collage ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-400/20 to-transparent"></div>
                    </div>
                  );
                })}
                
                {/* Decorative hearts */}
                <Heart className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 text-rose-300" />
                <Heart className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-6 h-6 text-pink-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Player */}
      <div className="fixed bottom-6 right-6 z-10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <Music className={`w-6 h-6 text-rose-400 ${isPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>

      {/* Add Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Closing Message */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto text-rose-400 mb-4 animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif">
              Until We Meet Again...
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-light">
              Distance means nothing when someone means everything. Every sunset here is a 
              sunrise where you are, and every night I fall asleep thinking of you. 
              Soon, we'll be together again, and until then, know that you are loved 
              beyond measure.
            </p>
            
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              I love you 💖
            </div>
            
            <div className="mt-8 flex justify-center space-x-6 text-rose-400">
              <Heart className="w-8 h-8 animate-pulse" />
              <Sparkles className="w-8 h-8 animate-bounce" />
              <Heart className="w-8 h-8 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <p className="font-light">Made with endless love 💕</p>
      </footer>
    </div>
  );
}

export default App;