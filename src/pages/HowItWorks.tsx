import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { List, Compass, Workflow, Puzzle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Your Plan",
      description:
        "Select a meal plan that fits your lifestyle and preferences.",
      icon: <List className="h-8 w-8" />,
    },
    {
      title: "Customize Your Menu",
      description: "Pick your favorite meals from our weekly rotating menu.",
      icon: <Compass className="h-8 w-8" />,
    },
    {
      title: "We Prepare & Deliver",
      description:
        "Our chefs prepare your meals with fresh ingredients and deliver them to your door.",
      icon: <Workflow className="h-8 w-8" />,
    },
    {
      title: "Heat & Eat",
      description:
        "Simply heat your meals following our instructions and enjoy restaurant-quality food at home.",
      icon: <Puzzle className="h-8 w-8" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">How Tasty Trail Works</h1>
          <p className="text-lg text-muted-foreground">
            Get delicious, chef-prepared meals delivered to your door in four
            simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 rounded-full bg-primary text-primary-foreground">
                  {step.icon}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img
            src="../../public/img.jpg"
            alt="Meal preparation"
            className="rounded-lg max-w-4xl mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our chefs use only the freshest ingredients to prepare your meals,
            ensuring you get restaurant-quality dining experience in the comfort
            of your home.
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default HowItWorks;
