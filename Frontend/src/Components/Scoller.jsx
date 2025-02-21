import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import imae from "../assets/pilaram.jpeg"
import kali from "../assets/Kalitone.jpeg"
import free from "../assets/Freejod.jpeg"

// Multiple Leaf SVG variants
const LeafVariants = {
  Leaf1: () => (
    <path d="M12 2C7.03 2 3 6.03 3 11c0 3.5 2.03 6.52 5 7.98V21h2v-3.02c0.64.23 1.31.37 2 .42V21h2v-2.6c0.69-.05 1.36-.19 2-.42V21h2v-2.02c2.97-1.46 5-4.48 5-7.98 0-4.97-4.03-9-9-9z" fill="currentColor"/>
  ),
  Leaf2: () => (
    <path d="M17 8C8 10 5 16 5 22h2c0-5 2-10 10-12V4L21 8l-4 4V8z" fill="currentColor"/>
  ),
  Leaf3: () => (
    <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zm2.44-2.44c.71-1.9 2.22-3.42 4.12-4.12-1.9.71-3.42 2.22-4.12 4.12zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z" fill="currentColor"/>
  )
};

// Animated Leaf Component with variants
const Leaf = ({ className, variant = "Leaf1", animationDelay = 0 }) => {
  const animations = {
    floating: {
      y: [0, -15, 0],
      x: [0, 8, 0],
      rotate: [0, 15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
      }
    },
    swaying: {
      rotate: [-5, 5, -5],
      x: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay,
      }
    },
    falling: {
      y: [-20, 20],
      x: [-10, 10],
      rotate: [0, 180],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        delay: animationDelay,
      }
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      variants={animations}
      animate={["floating", "swaying"]}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-emerald-200 opacity-40"
      >
        {LeafVariants[variant]()}
      </svg>
    </motion.div>
  );
};

// Background Leaves Component
const BackgroundLeaves = () => (
  <>
    {/* Top section leaves */}
    <Leaf className="top-10 left-10" variant="Leaf1" animationDelay={0} />
    <Leaf className="top-20 left-1/4" variant="Leaf2" animationDelay={0.5} />
    <Leaf className="top-10 right-1/3" variant="Leaf3" animationDelay={1} />
    <Leaf className="top-32 right-10" variant="Leaf1" animationDelay={1.5} />
    
    {/* Middle section leaves */}
    <Leaf className="top-1/3 left-20" variant="Leaf2" animationDelay={0.2} />
    <Leaf className="top-1/2 left-10" variant="Leaf3" animationDelay={0.7} />
    <Leaf className="top-1/2 right-20" variant="Leaf1" animationDelay={1.2} />
    <Leaf className="top-2/3 right-1/4" variant="Leaf2" animationDelay={1.7} />
    
    {/* Bottom section leaves */}
    <Leaf className="bottom-20 left-1/3" variant="Leaf3" animationDelay={0.3} />
    <Leaf className="bottom-10 left-10" variant="Leaf1" animationDelay={0.8} />
    <Leaf className="bottom-32 right-1/4" variant="Leaf2" animationDelay={1.3} />
    <Leaf className="bottom-16 right-10" variant="Leaf3" animationDelay={1.8} />
  </>
);

const ScrollSection = ({ children, isFixed }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
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
      className={`min-h-screen flex items-center justify-center ${
        isFixed ? "lg:sticky lg:top-0" : ""
      }`}
    >
      {children}
    </motion.div>
  );
};

const ProductCard = ({ title, uses, ingredients, image, reverse, bgColor }) => (
  <div className={`p-4 md:p-8 lg:p-12 md:rounded-lg shadow-lg ${bgColor} min-h-screen w-full flex items-center justify-center relative overflow-hidden`}>
    <BackgroundLeaves />
    
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center w-full h-full gap-8 relative z-10`}>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <motion.img
          src={image}
          alt={title}
          className="w-48 md:w-64 rounded-lg shadow-lg object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-white px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
            <Typewriter
              options={{
                strings: [title],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h1>
        </motion.div>
        <div className="space-y-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-emerald-200">Uses</h2>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed text-center lg:text-left">
              {uses}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-emerald-200">Key Ingredients</h2>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed text-center lg:text-left">
              {ingredients}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

const Scroller = () => {
  const products = [
    {
      title: "KALITONE",
      uses: "Useful In Urinary Problem, Helps To Detox Kidney ,Provides Natural Way to Remove Kidney-Stone",

      ingredients: "Varun (Crateva religiosa), Gokhru (Tribulus terrestris), Punernava (Boerhavia diffusa), Sehdevi (Sida Hombifoliaj).",
      image: kali,
      bgColor: "bg-emerald-800"
    },
    {
      title: "PILEARAM",
      uses: "Useful in Prevents Reccurence of Piles, External & Internal Hemmorrhoids, Relives Pain, Arrests Bledding.",
      ingredients: "Sanay Patti (Cassia angustifolia),Nagkesar (Messua Ferrea) Amaltas (Cassis Fistula) ,Bael (Embilica officinalis)",
      image: imae,
      bgColor: "bg-emerald-700"
    },
    {
      title: "FREEJOD",
      uses: "Useful In NeckPain ,Muscular Pain, Knee Joint pain, Lower Back Pain",
      ingredients: "Nirgundi (Vites Negundo),Ashwagandha (Winthania Somnifera), Shallaki (Boswellia Serrata) ,Suranjan Moringa(Officinale)",
      image: free,
      bgColor: "bg-emerald-600"
    }
  ];

  return (
    <div id="products" className="w-full">
      <div className="p-6 md:p-8 lg:p-12 shadow-lg text-center bg-emerald-50 w-full flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 italic">Our Natural Solutions</h1>
      </div>

      {products.map((product, index) => (
        <ScrollSection key={index} isFixed>
          <ProductCard
            title={product.title}
            uses={product.uses}
            ingredients={product.ingredients}
            image={product.image}
            reverse={index % 2 !== 0}
            bgColor={product.bgColor}
          />
        </ScrollSection>
      ))}

      <div className="p-6 md:p-8 lg:p-12 shadow-lg text-center bg-emerald-700 w-full flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white italic">Discover Nature's Wisdom</h1>
      </div>
    </div>
  );
};

export default Scroller;