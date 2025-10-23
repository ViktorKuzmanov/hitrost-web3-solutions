import { Code, Shield, MessageSquare, FileSearch, TestTube, Wrench } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Blockchain Consulting",
    description: "Expert guidance for any blockchain-related questions. Get help with architecture, technology choices, and strategic planning.",
  },
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Build secure, efficient smart contracts from scratch. We bring your vision to life with blockchain technical excellence.",
  },
  {
    icon: Shield,
    title: "Smart Contract Auditing",
    description: "Comprehensive security assessments and vulnerability detection. Protect your DeFi protocols with thorough audits.",
  },
  {
    icon: FileSearch,
    title: "Code Review",
    description: "Detailed analysis of existing smart contracts. Identify issues, optimize performance, and implement best practices.",
  },
  {
    icon: TestTube,
    title: "Comprehensive Testing",
    description: "Unit tests, integration tests, and invariant testing. Ensure your contracts behave exactly as intended.",
  },
  {
    icon: Wrench,
    title: "Technical Analysis",
    description: "In-depth technical assessments and feasibility studies. Make informed decisions about your blockchain projects.",
  },
];

const Services = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive blockchain solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Working with <span className="text-primary font-semibold">all EVM-compatible chains</span> and adapting to your specific blockchain needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
