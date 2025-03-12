import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary"
          >
            <img
              src="../../Home img.png"
              alt="Logo"
              width="42px"
              height="42px"
            />
            <span className="hidden sm:inline-block">Tasty Trail</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/plans"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              Meal Plans
            </Link>
            <Link
              to="/about"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              How It Works
            </Link>
            <Link
              to="/blog"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              Contact
            </Link>
            <Link
              to="/FAQ"
              className="text-orange-500 hover:text-black hover:bg-orange-500 transition-colors px-2 py-1 rounded-md"
            >
              FAQ's
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-orange-500 hover:text-black transition-colors"
              >
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-lg bg-background/90 border-b border-border shadow-lg"
          >
            <div className="container mx-auto py-4 px-6 flex flex-col gap-4">
              <Link
                to="/"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/plans"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meal Plans
              </Link>
              <Link
                to="/about"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/blog"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
