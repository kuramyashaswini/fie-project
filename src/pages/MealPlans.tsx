
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, CookingPot, LeafyGreen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MealPlans = () => {
  const plans = [
    {
      name: "Essential",
      price: 49,
      description: "Perfect for individuals or couples",
      features: [
        "3 meals per week",
        "Chef-crafted recipes",
        "Free delivery",
        "Flexible schedule",
      ],
      icon: <Utensils className="h-6 w-6" />,
    },
    {
      name: "Family",
      price: 79,
      description: "Ideal for families of 4",
      features: [
        "5 meals per week",
        "Customizable menu",
        "Priority delivery",
        "Family portions",
      ],
      icon: <CookingPot className="h-6 w-6" />,
    },
    {
      name: "Premium",
      price: 109,
      description: "For food enthusiasts",
      features: [
        "7 meals per week",
        "Premium ingredients",
        "Wine pairing options",
        "24/7 chef support",
      ],
      icon: <LeafyGreen className="h-6 w-6" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Choose Your Perfect Plan</h1>
          <p className="text-lg text-muted-foreground">
            Select from our carefully crafted meal plans designed to fit your lifestyle and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-3xl font-bold mt-2">
                  ${plan.price}
                  <span className="text-lg text-muted-foreground font-normal">/week</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="mr-2 h-4 w-4 text-primary">•</div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="block">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MealPlans;
