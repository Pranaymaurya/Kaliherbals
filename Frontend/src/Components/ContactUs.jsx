import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users, Clock, MapPin, Phone, Mail, Award, Shield, Leaf } from 'lucide-react';

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const CompanyInfo = () => {
  return (
    <div id='contact'className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header Section */}
      <div className="p-6 md:p-8 lg:p-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 mb-4">
          About Our Company
        </h1>
        <p className="text-emerald-600 text-lg md:text-xl max-w-2xl mx-auto">
          Bringing ancient Ayurvedic wisdom to modern wellness 
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Company Overview */}
        <AnimatedSection>
          <div className="bg-emerald-800 p-8 rounded-lg shadow-lg text-white mb-8">
            <div className="flex items-center mb-6">
              <Building2 className="w-8 h-8 mr-3"/>
              <h2 className="text-2xl font-bold">Company Overview</h2>
            </div>
            <p className="text-lg leading-relaxed mb-6">
            Founded in 2024, Our company is led by a founder with over 20 years of expertise in Ayurvedic medicine. With a deep understanding of traditional healing practices, we combine this knowledge with modern research to create authentic products that promote overall well-being.
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6"/>
                <span>500+ Employees</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6"/>
                <span>25+ Countries</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6"/>
                <span>50+ Awards</span>
              </div>
            </div> */}
          </div>
        </AnimatedSection>

        {/* Company Values */}
        {/* <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-emerald-600 mb-4"/>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Quality Assurance</h3>
              <p className="text-emerald-600">
                Our products undergo rigorous testing and quality control measures to ensure the highest standards of purity and effectiveness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Leaf className="w-12 h-12 text-emerald-600 mb-4"/>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Sustainability</h3>
              <p className="text-emerald-600">
                We maintain sustainable sourcing practices and work directly with local farmers to preserve traditional cultivation methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-emerald-600 mb-4"/>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Community Focus</h3>
              <p className="text-emerald-600">
                Supporting local communities through fair trade practices and educational initiatives in Ayurvedic wellness.
              </p>
            </div>
          </div>
        </AnimatedSection> */}

        {/* Contact Information */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-6">Corporate Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-emerald-600"/>
                  <div>
                    <p className="text-emerald-800">Bhandup,Mumbai</p>
                    <p className="text-emerald-600">Rajaram Compound, Utkarsh Nagar, T.P Road Bhandup West, Mumbai-400078</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-emerald-600"/>
                  <div>
                    <p className="text-emerald-800">+91 892 863 5200</p>
                    
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-emerald-600"/>
                  <div>
                    <p className="text-emerald-800">kaliherbals07@gmail.com</p>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600"/>
                  <div>
                    <p className="text-emerald-800">Monday - Friday</p>
                    <p className="text-emerald-600">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-emerald-600"/>
                  <div>
                    <p className="text-emerald-800">Saturday</p>
                    <p className="text-emerald-600">9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="text-emerald-600 mt-4 p-4 bg-emerald-50 rounded-lg">
                  <p>* Closed on Sundays and Public Holidays</p>
                  <p>* Manufacturing facility tours available by appointment</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CompanyInfo;