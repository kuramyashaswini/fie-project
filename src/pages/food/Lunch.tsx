import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LunchPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const lunchItems = [
    {
      id: 1,
      name: "Classic Andhra Thali",
      description:
        "A wholesome meal with tomato pappu, gutti vankaya kura, avakaya, curd rice, and pappadam for a traditional start.",
      image: "../../public/food/thalli.jpeg",
    },
    {
      id: 2,
      name: "Spicy and Tangy Feast",
      description:
        "Enjoy tamarind rice, buttermilk curry, crispy okra fry, and gongura pachadi, balancing spice and tanginess.",
      image: "../../public/food/spicy-feast.jpeg",
    },
    {
      id: 3,
      name: "Nellore Special",
      description:
        "Relish the famous Nellore chepala pulusu with beans fry, pachi pulusu, and comforting mudda pappu.",
      image: "../../public/food/nellore-special.jpg",
    },
    {
      id: 4,
      name: "Rayalaseema Delights",
      description:
        "A rustic spread of jonna roti, ulavacharu, spicy natu kodi pulusu, kanda vepudu, and gongura pachadi.",
      image: "../../public/food/rayala.jpg",
    },
    {
      id: 5,
      name: "Vegetable Biryani",
      description:
        "Fragrant rice cooked with vegetables, herbs, and special spices",
      image: "../../public/food/veg-briyani.avif",
    },
    {
      id: 6,
      name: "Coastal Andhra Flavors",
      description:
        "Savor coastal delicacies like royyala iguru, brinjal chutney, dosakaya pappu, and pappadam with ghee.",
      image: "../../public/food/vankaya.jpeg",
    },
    {
      id: 7,
      name: "Chicken Biryani",
      description:
        "Chicken Biryani is a flavorful and aromatic rice dish made with marinated chicken, fragrant basmati rice, and a blend of spices, cooked to perfection. This classic dish is known for its rich taste, layered textures, and enticing aroma.",
      image: "../../public/food/Chicken-Biryani.webp",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lunch Menu</h1>
            <p className="text-lg text-muted-foreground">
              Fuel your afternoon with our hearty and satisfying lunch options,
              perfect for a midday boost of energy and flavor.
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
