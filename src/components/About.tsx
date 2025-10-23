import { Target, Eye, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mission */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed pl-16">
              <p>
                At Hitrost, our mission is to help teams move from concept to mainnet{" "}
                <span className="text-foreground font-semibold">fast and safely</span>. We combine hands-on Solidity 
                engineering with disciplined review and education so founders and enterprises can ship products that are 
                not only quick to market but also resilient, comprehensible, and worthy of user trust.
              </p>
              <p>
                We bridge the critical gap between the theoretical power of decentralized systems and their practical, 
                secure, and effective real-world implementation.
              </p>
              <p>
                The blockchain landscape is vast and rapidly evolving, often perceived as complex and inaccessible. 
                We cut through this complexity. We are the trusted technical partner our clients need to navigate 
                this new blockchain frontier with confidence.
              </p>
              <div className="pt-4 pl-6 border-l-4 border-primary">
                <p className="text-xl font-medium text-foreground italic">
                  Clear understanding accelerates teams. We translate complex blockchain topics into decisions you can act on.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Vision</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed pl-16">
              <p>
                We envision a Web3 ecosystem where trust comes from{" "}
                <span className="text-foreground font-semibold">engineering, not marketing</span>; where protocols are 
                simple to reason about, safe to use, and honestly decentralized.
              </p>
              <p>
                In that future, teams ship at high speed without gambling on security, and users interact with on-chain 
                systems that behave exactly as promised.
              </p>
              <p>
                Hitrost aims to help make that future normal. Our long-term vision is to be the boutique consultancy 
                relentlessly focused on delivering{" "}
                <span className="text-primary font-semibold">correct, comprehensible, and sustainable</span> blockchain software.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="flex items-center space-x-3 mb-3">
                <Lightbulb className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Clarity First</h3>
              </div>
              <p className="text-muted-foreground">
                We believe in making the complex simple. Clear communication and documentation accelerate development and reduce risk.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 border border-border/50">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Speed with Safety</h3>
              </div>
              <p className="text-muted-foreground">
                Move fast without breaking things. Our rigorous approach lets you iterate quickly while maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
