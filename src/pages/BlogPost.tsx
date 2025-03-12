
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  // Sample blog posts data - in a real app this would come from an API
  const blogPosts = {
    "benefits-home-cooked-meals": {
      title: "The Benefits of Home-Cooked Meals in Today's Fast-Paced World",
      date: "October 15, 2023",
      author: "Anita Sharma",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=900&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">In our fast-paced world dominated by convenience foods and delivery apps, the simple act of cooking at home has become somewhat revolutionary. Yet, there's a growing movement back to the kitchen, as more people recognize the multifaceted benefits of home-cooked meals.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Health Benefits: You Control What Goes In</h2>
        <p class="mb-4">Perhaps the most obvious advantage of cooking at home is the control it gives you over ingredients. Restaurant meals often contain excessive amounts of salt, sugar, and fat to enhance flavor. When you cook at home, you decide exactly what goes into your food.</p>
        <p class="mb-4">Studies have consistently shown that people who cook most of their meals at home consume fewer calories, fewer carbohydrates, less sugar, and less fat than those who cook less or not at all—even if they're not trying to lose weight.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Financial Savings: Eating Well for Less</h2>
        <p class="mb-4">The math is simple: eating out costs more than cooking at home. Restaurant prices need to cover not just food costs but also labor, rent, and profit margins. By planning meals, shopping smartly, and cooking at home, a family of four can save thousands of dollars annually.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Stronger Family Bonds: The Table as a Gathering Place</h2>
        <p class="mb-4">Home cooking brings families together. The dinner table becomes more than just a place to eat—it transforms into a space for sharing, connecting, and communicating. Research shows that families who eat together regularly experience better communication and relationships.</p>
        <p class="mb-4">Children who participate in regular family meals are more likely to have higher academic performance, higher self-esteem, and lower rates of depression and substance abuse.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Life Skills Development: Cooking as Education</h2>
        <p class="mb-4">Cooking teaches valuable life skills that extend beyond the kitchen. Following recipes improves reading comprehension and execution of instructions. Measuring ingredients builds math skills. Experimenting with flavors encourages creativity and curiosity.</p>
        <p class="mb-4">For children, helping in the kitchen provides practical education and a sense of accomplishment when they contribute to family meals.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Environmental Impact: Reducing Your Footprint</h2>
        <p class="mb-4">Home cooking generally results in less food packaging waste compared to takeout containers and delivery packaging. By planning meals and using leftovers wisely, you can also reduce food waste.</p>
        <p class="mb-4">Additionally, home cooking allows you to make more environmentally conscious food choices, such as incorporating more plant-based meals or choosing locally sourced ingredients.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Cultural Connection: Preserving Traditions</h2>
        <p class="mb-4">Cooking traditional recipes is a way to preserve cultural heritage and pass down family traditions. Each dish carries stories and history, connecting generations through shared tastes and techniques.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Mental Health Benefits: Cooking as Self-Care</h2>
        <p class="mb-4">The act of cooking can be therapeutic. The focused attention required to follow a recipe can serve as a form of mindfulness, helping to reduce stress and anxiety. Creating something with your hands provides a sense of accomplishment and pride.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started: Overcoming Barriers</h2>
        <p class="mb-4">Despite these benefits, many people find cooking at home challenging due to time constraints, lack of confidence in cooking skills, or uncertainty about what to make.</p>
        <p class="mb-4">Start small—perhaps with just one or two home-cooked meals per week. Build a collection of simple, go-to recipes that can be prepared quickly. Invest in time-saving tools like slow cookers or pressure cookers. And consider meal planning and batch cooking to maximize efficiency.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Return to the Kitchen</h2>
        <p class="mb-4">In a world that often prioritizes speed and convenience over quality and connection, cooking at home represents a meaningful counter-movement. It's not just about the food—it's about health, economics, relationships, skills, environment, culture, and well-being.</p>
        <p class="mb-4">By reclaiming our kitchens, we reclaim something fundamental about how we nourish ourselves and our relationships. And that's a benefit worth cooking for.</p>
      `
    },
    // Additional blog posts would be defined here
  };

  useEffect(() => {
    // Simulate fetching blog post data
    const timer = setTimeout(() => {
      setPost(blogPosts[slug] || {
        title: "Sample Blog Post",
        date: "January 1, 2023",
        author: "John Doe",
        category: "Food",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
        content: `
          <p class="mb-4">This is a placeholder blog post content. In a production environment, this would be real content fetched from a database or CMS.</p>
          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Section Heading</h2>
          <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `
      });
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-muted rounded mb-4"></div>
            <div className="h-4 w-48 bg-muted rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <article className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/blog">
                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all duration-300">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Button>
              </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{post.category}</span>
                </div>
              </div>
              
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
