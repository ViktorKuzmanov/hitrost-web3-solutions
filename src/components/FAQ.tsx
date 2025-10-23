import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with Hitrost?",
    answer:
      "Simply reach out via the contact form below. We'll discuss your needs and outline a plan that fits your timeline and budget. Getting started is as simple as sending a message.",
  },
  {
    question: "Fixed price or hourly?",
    answer:
      "Both are possible, depending on scope. After a brief assessment, you'll receive a clear proposal with scope and costs. We're flexible and work to find the best arrangement for your project.",
  },
  {
    question: "Can I book consulting only, without implementation?",
    answer:
      "Absolutely. Architecture, technology choices, review of existing code, or technical strategy are all available as standalone services. Not every engagement needs to include development work.",
  },
  {
    question: "How long does a typical smart contract audit take?",
    answer:
      "Depending on complexity, audits typically take one to three weeks. This includes comprehensive testing, vulnerability assessment, and detailed reporting with actionable recommendations.",
  },
  {
    question: "Can you help with existing smart contracts that need improvement?",
    answer:
      "Yes, I frequently optimize and secure existing contracts, implementing best practices and addressing potential vulnerabilities. Code review and enhancement is a core part of what we do.",
  },
  {
    question: "Do you work on projects beyond Ethereum?",
    answer:
      "While Ethereum is my primary expertise, I also work with other EVM-compatible chains and can adapt to your specific blockchain needs. This includes networks like Polygon, Arbitrum, Optimism, BSC, and more.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with Hitrost
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/30 hover:bg-card/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-xl bg-gradient-card border border-border/50">
            <p className="text-lg text-muted-foreground">
              Still have questions?{" "}
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-primary hover:underline font-semibold"
              >
                Get in touch
              </button>{" "}
              and we'll be happy to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
