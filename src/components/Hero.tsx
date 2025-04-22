
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-drone-dark/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Capture Your World <br className="hidden md:block" />
          <span className="text-accent">From Above</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Professional drone photography and videography services for breathtaking aerial perspectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-md">
            View Portfolio
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-md">
            Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
