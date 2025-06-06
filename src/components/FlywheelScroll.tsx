import React, { useEffect, useRef, useState } from 'react';
import { Database, Brain, Lightbulb, TrendingUp, RotateCw } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    title: 'Your Data',
    description: 'Stripe, QuickBooks, Shopify, Bank feeds flow in.',
    icon: Database,
  },
  {
    title: 'Deep Ocean AI',
    description: 'We process 1,000+ signals to spot risk and opportunity.',
    icon: Brain,
  },
  {
    title: 'Insights & Credit',
    description: 'Instant credit limit, rate, term, and KPI dashboard.',
    icon: Lightbulb,
  },
  {
    title: 'Growth',
    description: 'You scale faster, send back more data—and the cycle repeats.',
    icon: TrendingUp,
  },
];

const FlywheelScroll: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Attach observer to each step block
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
            if (idx === steps.length - 1) setFinished(true);
          }
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Compute rotation based on activeIndex
  const rotation = -90 * activeIndex;

  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 py-32">
        {/* Wheel container */}
        <div className="relative h-[60vh] flex items-center justify-center">
          {/* clip half */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden"
            style={{ width: '55%', height: '100%' }}
          >
            <div
              ref={wheelRef}
              className={`relative aspect-square transition-transform duration-700 ease-out`}
              style={{
                width: '120vmin',
                transform: `translateX(-20%) rotate(${rotation}deg)` +
                  (finished ? ' translateX(20%) scale(0.7)' : ''),
              }}
            >
              {/* ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#2C7EF4]/40"></div>
              {/* segments */}
              {steps.map((s, i) => {
                const segRot = i * 90;
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-start justify-center"
                    style={{ transform: `rotate(${segRot}deg)` }}
                  >
                    <div
                      className={`w-24 h-24 flex items-center justify-center transition-all duration-500 ${
                        activeIndex === i ? 'bg-[#2C7EF4]' : 'bg-[#2C7EF4]/50'
                      }`}
                      style={{ borderRadius: 0, transform: `translateY(-40%) rotate(${-segRot}deg)` }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                );
              })}
              {/* hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2C7EF4] to-[#052C60] flex items-center justify-center" style={{ borderRadius: 0 }}>
                  <RotateCw className={`w-10 h-10 text-white ${finished ? 'animate-spin' : ''}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side narrative */}
        <div className="flex flex-col gap-48">
          {steps.map((s, idx) => (
            <div
              key={idx}
              ref={(el) => (stepRefs.current[idx] = el)}
              className="min-h-[80vh] flex items-center"
            >
              <div className="space-y-6 pr-8">
                <h3 className="text-4xl font-medium" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  {s.title}
                </h3>
                <p className="text-xl text-blue-200 max-w-lg" style={{ fontFamily: 'Source Sans Pro, Helvetica Neue, Arial, sans-serif' }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
          {/* final center message */}
          <div className="min-h-[70vh] flex items-center justify-center" ref={(el) => (stepRefs.current[4] = el)}>
            {finished && (
              <div className="text-center space-y-2">
                <p className="text-3xl font-medium text-[#2C7EF4]" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                  Continuous Value Creation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlywheelScroll; 