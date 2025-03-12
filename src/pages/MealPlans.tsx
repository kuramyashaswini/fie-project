// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Utensils, CookingPot, LeafyGreen } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const MealPlans = () => {
//   const plans = [
//     {
//       name: "Essential",
//       price: 49,
//       description: "Perfect for individuals or couples",
//       features: [
//         "3 meals per week",
//         "Chef-crafted recipes",
//         "Free delivery",
//         "Flexible schedule",
//       ],
//       icon: <Utensils className="h-6 w-6" />,
//     },
//     {
//       name: "Family",
//       price: 79,
//       description: "Ideal for families of 4",
//       features: [
//         "5 meals per week",
//         "Customizable menu",
//         "Priority delivery",
//         "Family portions",
//       ],
//       icon: <CookingPot className="h-6 w-6" />,
//     },
//     {
//       name: "Premium",
//       price: 109,
//       description: "For food enthusiasts",
//       features: [
//         "7 meals per week",
//         "Premium ingredients",
//         "Wine pairing options",
//         "24/7 chef support",
//       ],
//       icon: <LeafyGreen className="h-6 w-6" />,
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen pt-24 pb-16"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h1 className="text-4xl font-bold mb-6">Choose Your Perfect Plan</h1>
//           <p className="text-lg text-muted-foreground">
//             Select from our carefully crafted meal plans designed to fit your lifestyle and dietary preferences.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan) => (
//             <Card key={plan.name} className="relative overflow-hidden hover:shadow-lg transition-shadow">
//               <CardHeader className="text-center pb-4">
//                 <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
//                   {plan.icon}
//                 </div>
//                 <CardTitle className="text-2xl">{plan.name}</CardTitle>
//                 <p className="text-3xl font-bold mt-2">
//                   ${plan.price}
//                   <span className="text-lg text-muted-foreground font-normal">/week</span>
//                 </p>
//                 <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-center text-sm">
//                       <div className="mr-2 h-4 w-4 text-primary">•</div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to="/signup" className="block">
//                   <Button className="w-full">Get Started</Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default MealPlans;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MealPlans = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals or couples",
      features: [
        "Portion for 1 person",
        "Chef-crafted recipes",
        "Flexible delivery schedule",
        "Free delivery",
      ],
      priceMonthly: 10000,
      priceWeekly: 500,
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Family",
      description: "Ideal for families and small gatherings",
      features: [
        "Portion for 2 people",
        "Chef-crafted recipes",
        "Flexible delivery schedule",
        "Free delivery",
        "Customizable menu options",
        "Priority customer support",
      ],
      priceMonthly: 18000,
      priceWeekly: 800,
      cta: "Choose Family",
      popular: true,
    },
    {
      name: "Gourmet",
      description: "Premium selections for food enthusiasts",
      features: [
        "Portion for 4 people",
        "Premium chef-crafted recipes",
        "Flexible delivery schedule",
        "Free priority delivery",
        "Fully customizable menu",
        "24/7 concierge support",
        "Special occasion meals",
      ],
      priceMonthly: 25000,
      priceWeekly: 1200,
      cta: "Go Gourmet",
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-16 md:py-24 bg-muted/50">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 mt-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-primary">
            Subscription Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your Perfect Meal Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Select the plan that fits your lifestyle and preferences. All plans
            include chef-crafted meals delivered right to your door.
          </p>

          {/* Toggle switch */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span
              className={`text-sm font-medium ${
                !isMonthly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Weekly
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isMonthly ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isMonthly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isMonthly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
              <span className="ml-1 text-xs text-primary">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-background rounded-2xl p-8 shadow-lg border ${
                plan.popular ? "border-primary" : "border-border"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-5">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ₹ {isMonthly ? plan.priceMonthly : plan.priceWeekly}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    /{isMonthly ? "month" : "week"}
                  </span>
                </div>
                {isMonthly && (
                  <p className="text-sm text-accent-foreground mt-1">
                    Billed monthly
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/signup" className="block">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${
                    plan.popular
                      ? ""
                      : "hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MealPlans;
