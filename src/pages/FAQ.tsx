
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does meal delivery work?",
      answer: "We deliver fresh, pre-portioned ingredients directly to your door on your chosen delivery day. All meals come with easy-to-follow recipe cards and can be prepared in 30 minutes or less."
    },
    {
      question: "How long do the meals stay fresh?",
      answer: "Our meals stay fresh for up to 5 days when stored properly in the refrigerator. We recommend consuming fish dishes within 2 days of delivery for the best quality."
    },
    {
      question: "Can I skip a week or pause my subscription?",
      answer: "Yes! You can skip weeks or pause your subscription at any time. Just make sure to do so before the weekly cutoff time (Wednesday at 11:59 PM for the following week's delivery)."
    },
    {
      question: "Do you cater to dietary restrictions?",
      answer: "Yes, we offer various meal plans including vegetarian, vegan, gluten-free, and low-carb options. You can customize your preferences in your account settings."
    },
    {
      question: "What if I'm not home during delivery?",
      answer: "Our boxes are packaged with insulated liners and ice packs to keep your food fresh for up to 12 hours after delivery. You don't need to be home to receive your delivery."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
