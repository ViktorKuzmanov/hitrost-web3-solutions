import { ArrowRight, Code2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Matrix Rain Effect Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="matrix-rain" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Ethereum & Web3
            </span>{" "}
            Innovation
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the power of blockchain with expert guidance. From smart contract development to comprehensive audits, 
            we help businesses navigate the decentralized world confidently.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <Code2 className="h-10 w-10 text-primary" />
              <h3 className="font-semibold">Bring Your Vision to Life</h3>
              <p className="text-sm text-muted-foreground">Expert smart contract development with blockchain technical excellence</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <Shield className="h-10 w-10 text-primary" />
              <h3 className="font-semibold">Secure Your Smart Contracts</h3>
              <p className="text-sm text-muted-foreground">Comprehensive auditing and code review for DeFi protocols</p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="font-semibold">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Consulting sessions for any blockchain-related questions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8 shadow-glow animate-glow-pulse">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            ✓ All EVM-compatible chains • ✓ Years of hands-on experience • ✓ Trusted by 1,000+ developers
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default Hero;
