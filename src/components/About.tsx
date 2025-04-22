
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-drone-DEFAULT/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6">About AerialVista</h2>
            <p className="text-lg text-foreground/80 mb-6">
              AerialVista is a professional drone photography and videography company specializing in capturing breathtaking aerial perspectives. Founded in 2019, we've been helping businesses and individuals see their world from above.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Our team of FAA-certified drone pilots combines technical expertise with creative vision to deliver stunning aerial content. We use state-of-the-art equipment to ensure the highest quality results for every project.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">200+</h4>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">50+</h4>
                <p className="text-foreground/70">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">5+</h4>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">100%</h4>
                <p className="text-foreground/70">Client Satisfaction</p>
              </div>
            </div>
            
            <Button size="lg">Learn More</Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc" 
                alt="Drone in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Aerial landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
