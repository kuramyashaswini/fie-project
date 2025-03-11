
import { motion } from "framer-motion";

const Refund = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-3xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Satisfaction Guarantee</h2>
            <p className="mb-4">If you're not 100% satisfied with your meals, we'll make it right:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Full refund if you're not satisfied with the quality</li>
              <li>Credit for missing or damaged items</li>
              <li>Replacement meals for any quality issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact customer service within 24 hours of delivery</li>
              <li>Provide order number and reason for refund</li>
              <li>Include photos if applicable</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <p>Refunds are typically processed within 3-5 business days of approval.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Refund;
