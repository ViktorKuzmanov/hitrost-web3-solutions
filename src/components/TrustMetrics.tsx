import { useEffect, useState, useRef } from "react";
import { Users, Eye, Youtube, Award } from "lucide-react";

interface Metric {
  icon: typeof Users;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const metrics: Metric[] = [
  {
    icon: Eye,
    value: "130,000",
    label: "Lifetime YouTube Views",
    suffix: "+",
  },
  {
    icon: Youtube,
    value: "800,000",
    label: "Total Impressions",
    suffix: "+",
  },
  {
    icon: Users,
    value: "1,000",
    label: "Developers Helped",
    suffix: "+",
  },
  {
    icon: Award,
    value: "Years",
    label: "Blockchain Experience",
  },
];

const TrustMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trust & <span className="text-transparent bg-clip-text bg-gradient-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record in blockchain education and development
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-primary">
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With extensive experience in blockchain development, auditing, and education, we've helped countless 
            developers and businesses successfully navigate the Web3 ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
