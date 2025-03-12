import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav from "@/components/nav";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TiffinsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const tiffinItems = [
    {
      id: 1,
      name: "Dosa",
      description:
        "Dosa, Sambar, and Coconut Chutney with a side of fresh fruits",
      image:
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&auto=format&fit=crop&q=80",
      price: "$8.99",
    },
    {
      id: 2,
      name: "Idly & Vada Combo",
      description:
        "Soft Idly with crispy medu vada, served with tomato chutney",
      image: "../../public/food/idly-vada.jpeg",
      price: "$7.99",
    },
    {
      id: 3,
      name: "Poha Breakfast",
      description:
        "Flattened rice with peanuts, herbs and spices, topped with sev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZH7y2fkrQ21Y393aZzIQGQYqE6IDZ5JNYw&s",
      price: "$6.99",
    },
    {
      id: 4,
      name: "Puri Bhaji",
      description: "Fluffy puris with spiced potato curry and pickle",
      image:
        "data:image/jpeg;base64,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",
      price: "$8.49",
    },
    {
      id: 5,
      name: "Aloo Paratha Tiffin",
      description:
        "Whole wheat flatbread stuffed with spiced potatoes, served with yogurt",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80",
      price: "$7.49",
    },
    {
      id: 6,
      name: "Sprouts & Fruit Bowl",
      description: "Mixed sprouts with seasonal fruits, nuts and honey drizzle",
      image:
        "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=500&auto=format&fit=crop&q=80",
      price: "$6.99",
    },
    {
      id: 7,
      name: "Vermicelli Upma Box",
      description:
        "Light and flavorful vermicelli upma with vegetables and cashews",
      image: "../../public/food/upma.jpeg",
      price: "$6.49",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tiffins Menu
            </h1>
            <p className="text-lg text-muted-foreground">
              Start your day right with our nutritious and delicious breakfast
              options, prepared fresh each morning with quality ingredients.
            </p>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(7)].map((_, i) => (
                <Card
                  key={i}
                  className="overflow-hidden h-[380px] bg-muted/50 animate-pulse"
                >
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
