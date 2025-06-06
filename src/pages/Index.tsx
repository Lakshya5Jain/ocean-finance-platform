import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Enhanced Flywheel Animation
const FlywheelAnimation = () => {
  const sectionRef = useRef(null);
  const wheelRef = useRef(null);

  // Smooth scroll progress with spring
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamically measure wheel diameter
  const [wheelPx, setWheelPx] = useState(512);
  const [viewportW, setViewportW] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  
  useEffect(() => {
    const updateDimensions = () => {
      setWheelPx(wheelRef.current?.offsetWidth || 512);
      setViewportW(window.innerWidth);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Enhanced motion calculations - simpler and more responsive
  const startX = -wheelPx * 0.5; // Show half the wheel initially
  const centerX = viewportW / 2 - wheelPx / 2;

  // Smoother motion transforms with better easing
  const x = useTransform(smoothProgress, [0, 0.64, 0.8, 1], [startX, startX, startX, centerX]);
  
  const rotate = useTransform(smoothProgress, [0, 0.8], [0, 360]); // One full rotation through first 4 steps
  
  const scale = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0.75]); // Scale down 25% on final step
  
  const wheelGlow = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.6]);
  const taglineOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  // Enhanced copy steps with your content
  const steps = [
    {
      h: "Data Collection",
      p: "Borrowers securely share access to their key financial and operational data through API integrations or file uploads—compatible with platforms like Stripe, Shopify, QuickBooks, major banks, and more. Prequalification takes just 48 hours, making the process fast and effortless.",
      color: "#2C7EF4"
    },
    {
      h: "Deep Ocean Analysis",
      p: "Our team leverages your data with advanced analytics, automation, and AI models to uncover actionable insights and assess both risk and opportunity. Within weeks, you gain a comprehensive view of your business and our credit decision—plus access to insights you can use right away.",
      color: "#052C60"
    },
    {
      h: "Insights & Credit Delivered",
      p: "You receive both tailored credit solutions and data-driven insights, empowering you to implement improvements immediately.",
      color: "#2C7EF4"
    },
    {
      h: "Exponential Growth",
      p: "With ongoing support from Deep Ocean Partners and continued data sharing, your business grows faster and more efficiently.",
      color: "#052C60"
    },
    {
      h: "Sustained Success",
      p: "We partner with you for the long term, fueling ongoing growth and innovation.",
      color: "#052C60"
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [previousIdx, setPreviousIdx] = useState(0);

  // Step index and idle spin logic for 5 steps
  const [idleSpin, setIdleSpin] = useState(false);
  useMotionValueEvent(smoothProgress, "change", (v) => {
    // Steps 1-4 at v*5 < 4, 5th step at v*5 >= 4 (v>=0.8)
    const newIdx = Math.min(4, Math.floor(v * 5));
    if (newIdx !== currentIdx) {
      setPreviousIdx(currentIdx);
      setCurrentIdx(newIdx);
    }
    // Idle spin starts on 5th step threshold
    setIdleSpin(v >= 0.9);
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[800vh] bg-gradient-to-b from-[#052C60] via-[#0A1B3A] to-[#000C1C]"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2C7EF4] blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3EF5C7] blur-[128px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#2C7EF4]/40 blur-[96px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full relative flex items-center justify-center overflow-hidden">
        
        {/* ENHANCED WHEEL */}
        <motion.div
          ref={wheelRef}
          style={{ translateX: x, scale }}
          className="absolute left-0 top-[35%] -translate-y-[35%] w-[56rem] aspect-square flex items-center justify-center relative rounded-full shadow-2xl bg-transparent"
        >
          {/* Ship's steering wheel */}
          <motion.svg
            viewBox="0 0 900 900"
            className="w-full h-full"
            animate={idleSpin ? { rotate: [0, 360] } : { rotate: currentIdx * 90 }}
            transition={idleSpin
              ? { rotate: { repeat: Infinity, ease: "linear", duration: 20 } }
              : { duration: 0.8, ease: "easeOut" }
            }
          >
            {/* Outer and inner rims */}
            <circle cx="450" cy="450" r="360" fill="none" stroke="#2C7EF4" strokeWidth="16"/>
            <circle cx="450" cy="450" r="306" fill="none" stroke="#2C7EF4" strokeWidth="16"/>

            {/* Spokes */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x1 = 450 + Math.cos(angle) * 90;
              const y1 = 450 + Math.sin(angle) * 90;
              const x2 = 450 + Math.cos(angle) * 420;
              const y2 = 450 + Math.sin(angle) * 420;

              const isActiveSpoke = currentIdx < 4 
                ? Math.floor(i / 2) === currentIdx
                : true;

              return (
                <g key={i}>
                  <line
                    x1={x1} y1={y1}
                    x2={x2} y2={y2}
                    stroke="#2C7EF4"
                    strokeWidth="24"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={x2} cy={y2}
                    r="20"
                    fill="#2C7EF4"
                  />
                </g>
              );
            })}

            {/* Central hub */}
            <circle cx="450" cy="450" r="90" fill="#2C7EF4" stroke="#052C60" strokeWidth="4"/>
            <circle cx="450" cy="450" r="54" fill="#052C60"/>
            <circle cx="450" cy="450" r="27" fill="#2C7EF4"/>

            {/* Decorative bolts */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 22.5) * (Math.PI / 180);
              const xb = 450 + Math.cos(angle) * 333;
              const yb = 450 + Math.sin(angle) * 333;

              return (
                <circle
                  key={`bolt-${i}`}
                  cx={xb} cy={yb}
                  r="6"
                  fill="#052C60"
                />
              );
            })}
          </motion.svg>
        </motion.div>

        {/* ENHANCED RIGHT-SIDE COPY */}
        <div className="ml-auto mr-8 md:mr-16 w-[45%] max-w-xl select-none pointer-events-none">
          <motion.div
            key={`content-${currentIdx}`}
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-8"
            style={{ 
              borderRadius: '0px',
              boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #030303'
            }}
          >
            <motion.div
              className="inline-block px-4 py-2 text-sm font-medium mb-4"
              style={{ 
                color: '#2C7EF4',
                borderRadius: '0px',
                border: '1px solid #030303',
                backgroundColor: '#FFFFFF',
                fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif'
              }}
            >
              Step {currentIdx + 1} of 5
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'Lora, Georgia, serif' }}>
              {steps[currentIdx].h}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif' }}>
              {steps[currentIdx].p}
            </p>
          </motion.div>
        </div>
        {/* Progress indicator */}
        <div className="absolute bottom-8 left-8 z-50">
          <div className="flex space-x-2">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-8 border border-white/30"
                animate={{
                  backgroundColor: i === currentIdx ? '#2C7EF4' : 'transparent',
                  borderColor: i === currentIdx ? '#2C7EF4' : 'rgba(255,255,255,0.3)'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <Hero />
      <About />
      <FlywheelAnimation />
      <Solutions />
      <ComparisonTable />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
