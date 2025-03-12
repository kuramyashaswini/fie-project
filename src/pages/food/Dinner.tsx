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

const DinnerPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dinnerItems = [
    {
      id: 1,
      name: "Butter Chicken with Naan",
      description:
        "Tender chicken in a rich tomato and butter sauce with fresh baked naan",
      image: "../../public/food/dinner-1.jpeg",
      price: "$14.99",
    },
    {
      id: 2,
      name: "Palak Paneer Dinner",
      description:
        "Creamy spinach curry with soft paneer cheese, served with rice and roti",
      image: "../../public/food/dinner-2.jpeg",
      price: "$12.99",
    },
    {
      id: 3,
      name: "Vegetable Kofta Curry",
      description:
        "Mixed vegetable dumplings in a spiced gravy with pulao rice",
      image: "../../public/food/dinner-3.jpeg",
      price: "$11.99",
    },
    {
      id: 4,
      name: "Dal Makhani with Jeera Rice",
      description:
        "Slow-cooked black lentils in a creamy tomato sauce with cumin-infused rice",
      image: "../../public/food/dinner-4.jpeg",
      price: "$10.99",
    },
    {
      id: 5,
      name: "Dindigul Biryani",
      description:
        "Dindigul Biryani is a flavorful South Indian biryani made with seeraga samba rice, tangy curd-based marinated meat, and aromatic spices, giving it a unique taste.",
      image: "../../public/food/dinner-5.jpeg",
      price: "$13.49",
    },
    {
      id: 6,
      name: "Tandoori Platter",
      description:
        "Assortment of tandoor-grilled vegetables and paneer with mint chutney",
      image: "../../public/food/dinner-6.webp",
      price: "$15.99",
    },
    {
      id: 7,
      name: "Kadai Paneer Meal",
      description: "Bell pepper and paneer curry with a side of naan and raita",
      image: "../../public/food/dinner-7.jpeg",
      price: "$12.49",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dinner Menu</h1>
            <p className="text-lg text-muted-foreground">
              End your day with our comforting dinner selections, prepared with
              care to give you a delicious homemade dinner experience.
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
              {dinnerItems.map((item, index) => (
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

export default DinnerPage;
