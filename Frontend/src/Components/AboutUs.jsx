import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Leaf, Users, Heart, Stars, Shield } from 'lucide-react';

const AboutUs = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id='more' className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`px-4 py-16 md:py-24 text-center transition-opacity duration-1000 ${
          heroInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
          Rooted in Tradition, Powered by Nature
        </h1>
        <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto">
          Discover the ancient wisdom of Ayurveda through our carefully crafted natural remedies
        </p>
      </div>

      {/* Mission Section */}
      <div
        ref={missionRef}
        className={`px-4 py-16 bg-green-100/50 transition-opacity duration-1000 ${
          missionInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-800">Sustainable Sourcing</h3>
              </div>
              <p className="text-green-700">Working directly with local farmers to sustainably harvest our herbs and ingredients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-800">Quality Assurance</h3>
              </div>
              <p className="text-green-700">Rigorous testing and traditional preparation methods ensure the highest quality products.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-800">Holistic Wellness</h3>
              </div>
              <p className="text-green-700">Promoting complete mind-body harmony through ancient Ayurvedic principles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        ref={productsRef}
        className={`px-4 py-16 transition-opacity duration-1000 ${
          productsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-800">Ancient Wisdom, Modern Science</h3>
              <p className="text-green-700 leading-relaxed">
                We have been crafting authentic Ayurvedic formulations 
                using time-tested recipes and modern scientific methods. Our commitment to quality 
                begins with selecting the finest herbs from the foothills of the Himalayas and 
                extends to our state-of-the-art manufacturing facility.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="w-6 h-6 text-green-600" />
                <span className="text-green-700">Farmers Support</span>
              </div>
              <div className="flex items-center space-x-4">
                <Stars className="w-6 h-6 text-green-600" />
                <span className="text-green-700">Years of Excellence</span>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                  <p className="text-green-700">Sustainable harvesting of herbs by local farmers using traditional methods</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                  <p className="text-green-700">Careful processing and authentication by Ayurvedic experts</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                  <p className="text-green-700">Modern scientific testing and quality assurance</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
                  <p className="text-green-700">Traditional preparation following ancient texts</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;