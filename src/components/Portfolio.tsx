
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Coastal Sunset",
      category: "photography",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      description: "Aerial photography of dramatic coastal sunset capturing the meeting of land and sea."
    },
    {
      id: 2,
      title: "Mountain Valley Exploration",
      category: "video",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
      description: "Drone footage following a winding river through a lush mountain valley at dawn."
    },
    {
      id: 3,
      title: "Urban Architecture",
      category: "photography",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "High-angle perspective of modern urban architecture highlighting geometric patterns."
    },
    {
      id: 4,
      title: "Real Estate Showcase",
      category: "video",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-over-buildings-in-a-city-at-night-4906-large.mp4",
      description: "Comprehensive aerial tour of luxury real estate property showcasing grounds and surroundings."
    },
    {
      id: 5,
      title: "Agricultural Patterns",
      category: "mapping",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Precision mapping of agricultural fields displaying different growth stages and patterns."
    },
    {
      id: 6,
      title: "Forest Canopy",
      category: "photography",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Overhead view of diverse forest canopy showcasing seasonal colors and textures."
    },
  ];

  const filteredItems = selectedTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedTab);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of aerial photography and videography projects. Discover the unique perspectives we can capture for you.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedTab}>
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="mapping">Mapping</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="photography" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mapping" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button size="lg">View More Projects</Button>
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden group cursor-pointer">
          <div className="relative h-60 overflow-hidden">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              {item.videoUrl ? (
                <div className="bg-primary/90 rounded-full p-3">
                  <Play className="h-8 w-8 text-white" />
                </div>
              ) : (
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Project
                </Button>
              )}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground capitalize mt-1">{item.category}</p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>
        {item.videoUrl ? (
          <video 
            controls 
            className="w-full rounded-lg"
            poster={item.imageUrl}
          >
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-auto rounded-lg" 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Portfolio;
