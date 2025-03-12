
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TiffinsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const tiffinItems = [
    {
      id: 1,
      name: "South Indian Breakfast Box",
      description: "Idli, Dosa, Sambar, and Coconut Chutney with a side of fresh fruits",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&auto=format&fit=crop&q=80",
      price: "$8.99"
    },
    {
      id: 2,
      name: "Upma & Vada Combo",
      description: "Soft semolina upma with crispy medu vada, served with tomato chutney",
      image: "https://images.unsplash.com/photo-1689066192755-8ded6b2f80cd?w=500&auto=format&fit=crop&q=80",
      price: "$7.99"
    },
    {
      id: 3,
      name: "Poha Breakfast",
      description: "Flattened rice with peanuts, herbs and spices, topped with sev",
      image: "https://images.unsplash.com/photo-1628682241746-88eb3ac74386?w=500&auto=format&fit=crop&q=80",
      price: "$6.99"
    },
    {
      id: 4,
      name: "Puri Bhaji",
      description: "Fluffy puris with spiced potato curry and pickle",
      image: "https://images.unsplash.com/photo-1616970603042-0fd99c035644?w=500&auto=format&fit=crop&q=80",
      price: "$8.49"
    },
    {
      id: 5,
      name: "Aloo Paratha Tiffin",
      description: "Whole wheat flatbread stuffed with spiced potatoes, served with yogurt",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80",
      price: "$7.49"
    },
    {
      id: 6,
      name: "Sprouts & Fruit Bowl",
      description: "Mixed sprouts with seasonal fruits, nuts and honey drizzle",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=500&auto=format&fit=crop&q=80",
      price: "$6.99"
    },
    {
      id: 7,
      name: "Vermicelli Upma Box",
      description: "Light and flavorful vermicelli upma with vegetables and cashews",
      image: "https://images.unsplash.com/photo-1626080308314-d19fab3c3d7b?w=500&auto=format&fit=crop&q=80",
      price: "$6.49"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tiffins Menu</h1>
            <p className="text-lg text-muted-foreground">
              Start your day right with our nutritious and delicious breakfast options, 
              prepared fresh each morning with quality ingredients.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(7)].map((_, i) => (
                <Card key={i} className="overflow-hidden h-[380px] bg-muted/50 animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <CardHeader>
                    <div className="h-6 w-2/3 bg-muted rounded"></div>
                    <div className="h-4 w-full bg-muted rounded mt-2"></div>
                  </CardHeader>
                  <CardFooter>
                    <div className="h-10 w-full bg-muted rounded"></div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tiffinItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <p className="font-semibold text-primary">{item.price}</p>
                      <Button variant="outline">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TiffinsPage;
