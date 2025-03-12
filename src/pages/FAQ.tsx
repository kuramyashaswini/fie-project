import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How does meal delivery work?",
      answer:
        "We deliver fresh, pre-portioned ingredients directly to your door on your chosen delivery day. All meals come with easy-to-follow recipe cards and can be prepared in 30 minutes or less.",
    },
    {
      question: "How long do the meals stay fresh?",
      answer:
        "Our meals stay fresh for up to 5 days when stored properly in the refrigerator. We recommend consuming fish dishes within 2 days of delivery for the best quality.",
    },
    {
      question: "Can I skip a week or pause my subscription?",
      answer:
        "Yes! You can skip weeks or pause your subscription at any time. Just make sure to do so before the weekly cutoff time (Wednesday at 11:59 PM for the following week's delivery).",
    },
    {
      question: "Do you cater to dietary restrictions?",
      answer:
        "Yes, we offer various meal plans including vegetarian, vegan, gluten-free, and low-carb options. You can customize your preferences in your account settings.",
    },
    {
      question: "What if I'm not home during delivery?",
      answer:
        "Our boxes are packaged with insulated liners and ice packs to keep your food fresh for up to 12 hours after delivery. You don't need to be home to receive your delivery.",
    },
    {
      question: "How do I change my meal preferences?",
      answer:
        "You can update your meal preferences anytime by logging into your account and selecting 'Meal Preferences' under account settings.",
    },
    {
      question: "Do you offer family-size meal plans?",
      answer:
        "Yes, we offer both individual and family-size meal plans. You can choose the option that best suits your needs when signing up or in your account settings.",
    },
    {
      question: "Can I recycle the packaging?",
      answer:
        "Yes! Most of our packaging materials are recyclable. Check your local recycling guidelines for specifics on how to dispose of liners and ice packs.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time by visiting your account settings. Be sure to cancel before the weekly cutoff to avoid being charged for the next week's delivery.",
    },
    {
      question: "Will I get Money back if I cancel sunscription?",
      answer: "No, Money Will not be refunded in case cancelation.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-16"
    >
      <Navbar />
      <div className="container mx-auto px-4 mb-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default FAQ;
