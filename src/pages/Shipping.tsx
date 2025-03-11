
import { motion } from "framer-motion";

const Shipping = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
        <div className="prose prose-lg max-w-3xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Areas</h2>
            <p className="mb-4">We currently deliver to the following areas:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Major metropolitan areas</li>
              <li>Surrounding suburbs within 50 miles</li>
              <li>Select rural areas (check availability by zip code)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Times</h2>
            <p className="mb-4">We deliver:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Monday through Friday</li>
              <li>Between 8 AM and 8 PM local time</li>
              <li>You can select your preferred delivery window</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Food Safety</h2>
            <p>All deliveries are made in temperature-controlled boxes that keep your food fresh for up to 12 hours after delivery.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Shipping;
