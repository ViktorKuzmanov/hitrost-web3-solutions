const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Hitrost. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Expert Blockchain Consulting • Smart Contract Development • Security Audits
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
