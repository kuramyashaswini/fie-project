
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Home-Cooked Meals in Today's Fast-Paced World",
      excerpt: "Discover why homemade food is making a comeback and how it positively impacts your health, family connections, and overall well-being.",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=80",
      date: "October 15, 2023",
      author: "Anita Sharma",
      category: "Health & Wellness",
      slug: "benefits-home-cooked-meals"
    },
    {
      id: 2,
      title: "10 Time-Saving Meal Prep Tips For Busy Professionals",
      excerpt: "Learn how to efficiently prepare your meals for the week while maintaining flavor and nutrition. Perfect for busy schedules!",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80",
      date: "September 28, 2023",
      author: "Raj Patel",
      category: "Meal Prep",
      slug: "time-saving-meal-prep-tips"
    },
    {
      id: 3,
      title: "Understanding Indian Spices: A Beginner's Guide",
      excerpt: "Demystifying the world of Indian spices and how to use them to enhance your cooking with authentic flavors.",
      image: "https://images.unsplash.com/photo-1532336414756-3c0b86cad71d?w=500&auto=format&fit=crop&q=80",
      date: "August 12, 2023",
      author: "Priya Desai",
      category: "Cooking Basics",
      slug: "understanding-indian-spices"
    },
    {
      id: 4,
      title: "The Art of Balancing Flavors in South Indian Cuisine",
      excerpt: "Explore the delicate balance of spicy, tangy, sweet, and savory elements that make South Indian food so distinctive.",
      image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&auto=format&fit=crop&q=80",
      date: "July 29, 2023",
      author: "Lakshmi Iyer",
      category: "Regional Cuisine",
      slug: "balancing-flavors-south-indian"
    },
    {
      id: 5,
      title: "Seasonal Eating: Why It Matters for Health and Environment",
      excerpt: "The benefits of eating according to seasons and how it can improve your health while supporting sustainable food systems.",
      image: "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?w=500&auto=format&fit=crop&q=80",
      date: "June 17, 2023",
      author: "Arjun Mehta",
      category: "Sustainability",
      slug: "seasonal-eating-benefits"
    },
    {
      id: 6,
      title: "How to Create Kid-Friendly Meals Without Sacrificing Nutrition",
      excerpt: "Strategies to make healthy food appealing to children while ensuring they get all the nutrients they need.",
      image: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=500&auto=format&fit=crop&q=80",
      date: "May 22, 2023",
      author: "Neha Joshi",
      category: "Family Nutrition",
      slug: "kid-friendly-nutritious-meals"
    },
    {
      id: 7,
      title: "The Rise of Plant-Based Indian Cooking",
      excerpt: "How traditional Indian cuisine naturally embraces plant-based eating and ways to incorporate more plants into your diet.",
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&auto=format&fit=crop&q=80",
      date: "April 15, 2023",
      author: "Vikram Singh",
      category: "Food Trends",
      slug: "plant-based-indian-cooking"
    },
    {
      id: 8,
      title: "Mastering the Perfect Biryani: Tips and Techniques",
      excerpt: "Unlock the secrets to cooking aromatic, flavorful biryani every time with these expert tips from professional chefs.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80",
      date: "March 30, 2023",
      author: "Kabir Khan",
      category: "Cooking Techniques",
      slug: "mastering-perfect-biryani"
    },
    {
      id: 9,
      title: "The Health Benefits of Traditional Indian Cooking Methods",
      excerpt: "Exploring how time-tested cooking methods like slow cooking and tempering enhance both flavor and nutritional value.",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=80",
      date: "February 19, 2023",
      author: "Dr. Sunita Rao",
      category: "Nutrition",
      slug: "traditional-cooking-methods-benefits"
    },
    {
      id: 10,
      title: "Mindful Eating: How to Build a Healthier Relationship with Food",
      excerpt: "Practical approaches to eating mindfully and savoring each meal for better digestion and greater satisfaction.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=80",
      date: "January 12, 2023",
      author: "Maya Reddy",
      category: "Mindfulness",
      slug: "mindful-eating-practices"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tasty Trail Blog</h1>
            <p className="text-lg text-muted-foreground">
              Explore recipes, cooking tips, nutrition advice, and food stories from our culinary experts
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden h-[440px] bg-muted/50 animate-pulse">
                  <div className="h-56 bg-muted"></div>
                  <CardHeader>
                    <div className="h-6 w-2/3 bg-muted rounded"></div>
                    <div className="h-4 w-full bg-muted rounded mt-2"></div>
                    <div className="h-4 w-full bg-muted rounded mt-2"></div>
                  </CardHeader>
                  <CardFooter>
                    <div className="h-10 w-full bg-muted rounded"></div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3 mt-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Link to={`/blog/${post.slug}`} className="w-full">
                        <Button variant="outline" className="w-full group">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
