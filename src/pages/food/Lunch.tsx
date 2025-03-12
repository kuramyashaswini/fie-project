
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LunchPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const lunchItems = [
    {
      id: 1,
      name: "Paneer Butter Masala Thali",
      description: "Rich paneer curry with butter naan, jeera rice, dal, and side salad",
      image: "https://images.unsplash.com/photo-1631452180539-96eca67d9e5c?w=500&auto=format&fit=crop&q=80",
      price: "$12.99"
    },
    {
      id: 2,
      name: "South Indian Meal",
      description: "Rice, sambar, rasam, vegetable curry, yogurt, and papadum",
      image: "https://images.unsplash.com/photo-1627662168223-7df99068099a?w=500&auto=format&fit=crop&q=80",
      price: "$11.99"
    },
    {
      id: 3,
      name: "Rajma Chawal Bowl",
      description: "Classic kidney bean curry served with steamed basmati rice",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?w=500&auto=format&fit=crop&q=80",
      price: "$9.99"
    },
    {
      id: 4,
      name: "Chole Bhature",
      description: "Spiced chickpea curry with fluffy fried bread and pickled onions",
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&auto=format&fit=crop&q=80",
      price: "$10.99"
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      description: "Fragrant rice cooked with vegetables, herbs, and special spices",
      image: "https://images.unsplash.com/photo-1577304897692-de4c28d6e877?w=500&auto=format&fit=crop&q=80",
      price: "$11.49"
    },
    {
      id: 6,
      name: "Dal Tadka Combo",
      description: "Yellow lentils tempered with spices, served with rice and roti",
      image: "https://images.unsplash.com/photo-1626132647523-66d3350a3f9c?w=500&auto=format&fit=crop&q=80",
      price: "$8.99"
    },
    {
      id: 7,
      name: "Pav Bhaji",
      description: "Spiced vegetable mash served with buttered rolls and onion garnish",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80",
      price: "$9.49"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lunch Menu</h1>
            <p className="text-lg text-muted-foreground">
              Fuel your afternoon with our hearty and satisfying lunch options, 
              perfect for a midday boost of energy and flavor.
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
              {lunchItems.map((item, index) => (
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

export default LunchPage;
