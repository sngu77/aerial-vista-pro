
import { Camera, Video, Map, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {
  const serviceItems = [
    {
      icon: <Camera className="h-12 w-12 text-primary mb-4" />,
      title: "Aerial Photography",
      description: "High-resolution aerial photography for real estate, landscapes, events, and more. Capture stunning perspectives from above.",
    },
    {
      icon: <Video className="h-12 w-12 text-primary mb-4" />,
      title: "Drone Videography",
      description: "Dynamic drone videos with smooth cinematic movements. Perfect for films, commercials, and promotional content.",
    },
    {
      icon: <Map className="h-12 w-12 text-primary mb-4" />,
      title: "Mapping & Surveys",
      description: "Detailed aerial mapping and surveying for construction, agriculture, and land development projects.",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary mb-4" />,
      title: "360° Panoramas",
      description: "Immersive 360° aerial panoramas giving a complete view of properties and landscapes from unique perspectives.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional drone services tailored to your specific needs. We provide high-quality aerial
            content for various industries and applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
