
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  // For scroll reveal animations
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.6 }}
        >
          <Plans />
        </motion.div>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enjoy Homemade Meals Without the Hassle?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Join thousands of happy families who have brought the joy of home cooking
                back to their tables with Tasty Trail.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started Today
                </a>
              </motion.div>
              <p className="mt-4 text-sm text-muted-foreground">
                No commitment required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
