import React, { useState, useEffect } from 'react';
import { Leaf, Flower2 } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';

const Cover = () => {
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCoverVisible(false);
      navigate('/home');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleBeginJourney = () => {
    setIsCoverVisible(false);
    navigate('/home');
  };

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 z-50 transition-transform duration-1000 ${
          isCoverVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-screen w-full bg-gradient-to-br from-emerald-800 via-emerald-600 to-green-400 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            {/* Decorative background pattern */}
            <div className="absolute top-10 left-10 text-white transform rotate-45">
              <Leaf size={40} />
            </div>
            <div className="absolute top-20 right-20 text-white transform -rotate-45">
              <Leaf size={40} />
            </div>
            <div className="absolute bottom-10 left-20 text-white transform rotate-90">
              <Flower2 size={40} />
            </div>
            <div className="absolute bottom-20 right-10 text-white transform -rotate-90">
              <Flower2 size={40} />
            </div>
          </div>

          <div className="text-center z-10 space-y-8 transform transition-all duration-1000">
            <div className="space-y-4">
              <h1 className="text-6xl font-serif text-white mb-4 transform transition-all duration-1000 hover:scale-105">
                Kali Herbals
              </h1>
              {/* <p className="text-2xl text-green-100 font-light max-w-2xl mx-auto">
                Ancient Wisdom for Modern Healing
              </p> */}
              <div className="w-24 h-1 bg-green-200 mx-auto my-6" />
              <p className="text-lg text-green-100 max-w-xl mx-auto">
                Discover the power of natural healing through traditional Ayurvedic remedies
              </p>
            </div>
            <button
              onClick={handleBeginJourney}
              className="px-8 py-3 bg-white text-emerald-800 rounded-full text-lg font-medium 
                         transition-all duration-300 hover:bg-green-100 hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2"
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Cover;