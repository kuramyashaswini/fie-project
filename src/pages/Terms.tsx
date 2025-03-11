
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-3xl">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>By accessing our service, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily access the materials (information or software) on Tasty Trail's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Subscription Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions will automatically renew unless cancelled</li>
              <li>You can cancel your subscription at any time</li>
              <li>Refunds are subject to our Refund Policy</li>
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
