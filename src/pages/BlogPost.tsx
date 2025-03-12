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
      image:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=900&auto=format&fit=crop&q=80",
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
      `,
    },
    "time-saving-meal-prep-tips": {
      title: "10 Time-Saving Meal Prep Tips for Busy Professionals",
      date: "March 12, 2025",
      author: "Anita Sharma",
      category: "Productivity & Wellness",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80",
      content: `
      <p class="mb-4">For busy professionals, juggling work, family, and personal life often leaves little time for cooking. Meal prepping can be a game-changer, ensuring you eat nutritious meals while saving both time and money. Here are ten practical meal prep tips to streamline your routine.</p> <h2 class="text-2xl font-bold mt-8 mb-4">1. Plan Your Meals in Advance</h2> <p class="mb-4">Start by creating a meal plan for the week. Choose simple, balanced recipes and make a grocery list accordingly. Planning ahead reduces last-minute stress and prevents unhealthy food choices.</p> <h2 class="text-2xl font-bold mt-8 mb-4">2. Batch Cook and Store</h2> <p class="mb-4">Prepare large portions of staple ingredients like rice, quinoa, roasted vegetables, or grilled chicken. Store them in airtight containers for quick meal assembly throughout the week.</p> <h2 class="text-2xl font-bold mt-8 mb-4">3. Use Time-Saving Kitchen Gadgets</h2> <p class="mb-4">Invest in tools like an Instant Pot, slow cooker, or air fryer to cut down cooking time. These appliances allow you to multitask while your meals cook effortlessly.</p> <h2 class="text-2xl font-bold mt-8 mb-4">4. Pre-Chop and Portion Ingredients</h2> <p class="mb-4">Wash, chop, and portion vegetables, fruits, and proteins in advance. Store them in separate containers so you can quickly assemble meals without the hassle of daily prep.</p> <h2 class="text-2xl font-bold mt-8 mb-4">5. Opt for One-Pan and One-Pot Meals</h2> <p class="mb-4">Simplify cooking with meals that require minimal cleanup, such as sheet pan dinners, stir-fries, or hearty soups. These save time without compromising flavor.</p> <h2 class="text-2xl font-bold mt-8 mb-4">6. Label and Organize Your Storage</h2> <p class="mb-4">Label your meal containers with dates to ensure freshness. Store prepped ingredients in clear containers for easy identification and access.</p> <h2 class="text-2xl font-bold mt-8 mb-4">7. Cook Once, Eat Twice</h2> <p class="mb-4">Make double batches of meals so you can enjoy leftovers for lunch or dinner the next day. This reduces the time spent cooking daily.</p> <h2 class="text-2xl font-bold mt-8 mb-4">8. Freeze for Future Convenience</h2> <p class="mb-4">Prepare and freeze meals in individual portions. When short on time, simply thaw and reheat for a home-cooked meal in minutes.</p> <h2 class="text-2xl font-bold mt-8 mb-4">9. Keep a List of Go-To Recipes</h2> <p class="mb-4">Having a set of easy, tried-and-tested recipes makes meal prep more efficient. Stick to meals that require minimal effort but deliver maximum taste.</p> <h2 class="text-2xl font-bold mt-8 mb-4">10. Make Meal Prep a Routine</h2> <p class="mb-4">Set aside a specific time each week for meal prepping, such as Sunday afternoons. Making it a habit will streamline your workflow and make healthy eating a breeze.</p> <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Work Smarter, Eat Better</h2> <p class="mb-4">Meal prepping is not just about saving time—it’s about making smarter choices that support your health and productivity. With a little planning and organization, you can enjoy homemade meals without the daily hassle.</p>`,
    },
    "mindful-eating-practices": {
      title:
        "The Power of Mindful Eating: Transform Your Relationship with Food",
      date: "March 15, 2025",
      author: "Rahul Verma",
      category: "Health & Wellness",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=80",
      content: `
      <p class="mb-4">In today’s fast-paced world, we often eat in a rush—while working, scrolling on our phones, or watching TV. But what if we slowed down and truly paid attention to what we eat? This is the essence of mindful eating, a practice that can transform your health and relationship with food.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">What is Mindful Eating?</h2>
      <p class="mb-4">Mindful eating involves being fully present while eating—savoring every bite, paying attention to hunger cues, and appreciating the textures and flavors of food. This practice originates from mindfulness meditation and is proven to improve digestion, reduce overeating, and enhance overall well-being.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Benefits of Mindful Eating</h2>
      <p class="mb-4">Practicing mindful eating can lead to:</p>
      <ul class="mb-4 list-disc list-inside">
        <li>Better digestion by chewing food thoroughly.</li>
        <li>Reduced binge eating and emotional eating.</li>
        <li>Greater appreciation for flavors and food quality.</li>
        <li>Improved mental well-being and lower stress.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Simple Tips to Get Started</h2>
      <p class="mb-4">Start by eating without distractions, chewing slowly, and recognizing when you’re full. Try putting down your fork between bites and appreciating the aroma and texture of your food.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Healthier Relationship with Food</h2>
      <p class="mb-4">By practicing mindful eating, you can enjoy food more deeply, improve your health, and develop a better connection with your body. Give it a try—your body and mind will thank you.</p>
      `,
    },
    "understanding-indian-spices": {
      title: "Understanding Indian Spices: A Beginner's Guide",
      date: "March 20, 2025",
      author: "Neha Bansal",
      category: "Food & Cooking",
      image:
        "https://someindiangirl.com/wp-content/uploads/2022/03/masala-dabba-2-1-of-1-scaled.jpg",
      content: `
      <p class="mb-4">Indian cuisine is renowned for its rich flavors, vibrant colors, and aromatic spices. Spices are the heart of Indian cooking, transforming simple ingredients into flavorful dishes. If you’re new to Indian spices, this guide will help you understand their unique qualities and how to use them.</p>
    
      <h2 class="text-2xl font-bold mt-8 mb-4">Essential Indian Spices and Their Uses</h2>
      <p class="mb-4">Here are some of the most commonly used spices in Indian cooking:</p>
      
      <ul class="mb-4 list-disc list-inside">
        <li><strong>Turmeric (Haldi):</strong> Known for its bright yellow color and earthy flavor, turmeric has anti-inflammatory properties and is used in curries, dals, and rice dishes.</li>
        <li><strong>Cumin (Jeera):</strong> Cumin seeds add a warm, nutty flavor to dishes. They are often dry-roasted or tempered in oil to enhance their aroma.</li>
        <li><strong>Coriander (Dhania):</strong> Coriander seeds and powder provide a mild, citrusy flavor. They are widely used in spice blends like garam masala.</li>
        <li><strong>Cardamom (Elaichi):</strong> This fragrant spice is used in both sweet and savory dishes, from biryanis to desserts like kheer.</li>
        <li><strong>Mustard Seeds (Rai):</strong> These small seeds add a pungent, slightly bitter taste to pickles, curries, and tempering (tadka).</li>
        <li><strong>Fenugreek (Methi):</strong> The seeds have a slightly bitter taste and are commonly used in spice mixes and dals.</li>
        <li><strong>Red Chili Powder (Lal Mirch):</strong> This spice adds heat to Indian dishes, with different varieties offering varying levels of spiciness.</li>
        <li><strong>Garam Masala:</strong> A blend of spices like cardamom, cinnamon, cloves, and cumin, used to enhance flavor in curries and gravies.</li>
      </ul>
    
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Use Indian Spices in Cooking</h2>
      <p class="mb-4">Using spices correctly is key to mastering Indian cooking. Here are some tips:</p>
      
      <ul class="mb-4 list-disc list-inside">
        <li><strong>Tempering (Tadka):</strong> Heat whole spices in oil or ghee to release their flavors before adding other ingredients.</li>
        <li><strong>Roasting:</strong> Dry-roasting spices before grinding intensifies their aroma and depth.</li>
        <li><strong>Balancing Flavors:</strong> Indian cooking is all about balance—mixing spicy, sweet, sour, and bitter flavors.</li>
        <li><strong>Fresh vs. Ground Spices:</strong> Whole spices stay fresh longer, while ground spices should be stored in airtight containers.</li>
      </ul>
    
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Embracing Indian Spices</h2>
      <p class="mb-4">Once you understand the basics, experimenting with Indian spices becomes an exciting journey. Start with a few key spices and gradually build your collection. Whether you’re making a simple dal or a rich curry, the right blend of spices will elevate your dish to the next level.</p>
      `,
    },
    "balancing-flavors-south-indian": {
      title: "Balancing Flavors in South Indian Cuisine",
      date: "March 20, 2025",
      author: "Neha Bansal",
      category: "Food & Cooking",
      image:
        "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&auto=format&fit=crop&q=80",
      content: `
      <p class="mb-4">South Indian cuisine is known for its vibrant flavors, aromatic spices, and a perfect balance of taste elements—spicy, sour, sweet, bitter, and salty. Unlike other Indian regional cuisines, South Indian food incorporates fermented dishes, coconut-based gravies, and tangy ingredients that create a distinct flavor profile.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Five Essential Tastes in South Indian Cooking</h2>

      <ul class="mb-4 list-disc list-inside">
        <li><strong>Spicy (Karam):</strong> Red chilies, black pepper, and green chilies are used in different forms to add heat to dishes like sambar, rasam, and chutneys.</li>
        <li><strong>Sour (Pulippu):</strong> Tamarind, lemon, curd, and raw mango add a tangy taste to balance the richness of spices, as seen in dishes like puliyodarai (tamarind rice) and rasam.</li>
        <li><strong>Sweet (Inippu):</strong> Jaggery, coconut, and ripe fruits provide natural sweetness, which is often used to mellow out spicy or sour flavors in curries and payasams (desserts).</li>
        <li><strong>Bitter (Kasappu):</strong> Fenugreek seeds, curry leaves, and bitter gourd (pavakkai) introduce subtle bitterness, enhancing the complexity of the dish.</li>
        <li><strong>Salty (Uppu):</strong> Salt is not just a seasoning but a crucial taste element that enhances and balances all other flavors.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Key Ingredients That Define Balance</h2>

      <p class="mb-4">Achieving the perfect balance in South Indian cooking relies on the following ingredients:</p>

      <ul class="mb-4 list-disc list-inside">
        <li><strong>Tamarind:</strong> Used in rasam, sambar, and curries to provide a sour depth.</li>
        <li><strong>Coconut:</strong> Found in chutneys, curries, and desserts, coconut adds a natural sweetness and richness.</li>
        <li><strong>Curry Leaves:</strong> A staple tempering ingredient, curry leaves enhance aroma and taste.</li>
        <li><strong>Mustard Seeds:</strong> Used for tempering (tadka), mustard seeds add a slight bitterness and crunch.</li>
        <li><strong>Asafoetida (Hing):</strong> Enhances umami flavors in lentil-based dishes and aids digestion.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Balancing Flavors in Popular South Indian Dishes</h2>

      <ul class="mb-4 list-disc list-inside">
        <li><strong>Sambar:</strong> Tamarind for sourness, red chilies for spice, jaggery for sweetness, and mustard seeds for bitterness.</li>
        <li><strong>Rasam:</strong> Pepper and chilies for heat, tamarind for tang, and a pinch of jaggery to round out the flavors.</li>
        <li><strong>Curd Rice:</strong> Yogurt provides creaminess and tanginess, while mustard seeds and green chilies add spice and texture.</li>
        <li><strong>Puliyodarai (Tamarind Rice):</strong> Tamarind gives a rich sourness, while jaggery balances it with sweetness.</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: The Art of South Indian Flavor Harmony</h2>

      <p class="mb-4">South Indian cuisine is a masterclass in balancing multiple flavors to create a satisfying and wholesome meal. By understanding the role of each taste element, you can enhance your cooking and bring authentic South Indian flavors to your kitchen.</p>
      `,
    },
    "seasonal-eating-benefits": {
      title: "Seasonal Eating: Why It Matters for Health and Environment",
      date: "March 22, 2025",
      author: "Rohan Mehta",
      category: "Sustainable Living",
      image:
        "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?w=500&auto=format&fit=crop&q=80",
      content: `
     <p class="mb-4">In an era where supermarkets offer all types of produce year-round, the concept of seasonal eating is often overlooked. However, consuming foods that are naturally in season can benefit both our health and the environment. Let’s explore why seasonal eating matters and how it can enhance your well-being while reducing your ecological footprint.</p>

     <h2 class="text-2xl font-bold mt-8 mb-4">What Is Seasonal Eating?</h2>
     <p class="mb-4">Seasonal eating means consuming fruits, vegetables, and other food items that are naturally harvested during specific times of the year in a given region. For example, mangoes in summer, pumpkins in autumn, and leafy greens in winter. This practice aligns our diets with nature’s cycles, offering fresher, more nutrient-dense food.</p>

     <h2 class="text-2xl font-bold mt-8 mb-4">Health Benefits of Eating Seasonally</h2>

     <ul class="mb-4 list-disc list-inside">
       <li><strong>Higher Nutritional Value:</strong> Seasonal produce is harvested at peak ripeness, preserving essential vitamins and minerals.</li>
       <li><strong>Better Taste:</strong> Locally grown, in-season foods tend to be fresher and more flavorful compared to off-season produce that’s artificially ripened or transported long distances.</li>
       <li><strong>Supports Body’s Needs:</strong> Nature provides what we need in each season—cooling foods like watermelon in summer and immunity-boosting citrus fruits in winter.</li>
       <li><strong>Reduces Exposure to Chemicals:</strong> Out-of-season produce is often grown using pesticides, preservatives, or artificial ripening agents to extend its shelf life.</li>
     </ul>

     <h2 class="text-2xl font-bold mt-8 mb-4">Environmental Benefits of Seasonal Eating</h2>

     <ul class="mb-4 list-disc list-inside">
       <li><strong>Lower Carbon Footprint:</strong> Eating locally grown, seasonal foods reduces the need for long-distance transportation, cutting down on carbon emissions.</li>
       <li><strong>Supports Sustainable Farming:</strong> Buying seasonally supports local farmers who use eco-friendly, traditional farming methods.</li>
       <li><strong>Less Energy Consumption:</strong> Greenhouses and refrigeration units used to store off-season produce consume significant energy, whereas seasonal foods grow naturally in their ideal climate.</li>
       <li><strong>Preserves Biodiversity:</strong> Encouraging diverse crops throughout the year supports soil health and prevents over-reliance on monoculture farming.</li>
     </ul>

     <h2 class="text-2xl font-bold mt-8 mb-4">How to Start Eating Seasonally</h2>

     <p class="mb-4">If you’re new to seasonal eating, here are some practical steps to get started:</p>

     <ul class="mb-4 list-disc list-inside">
       <li><strong>Shop at Local Farmer’s Markets:</strong> These markets offer fresh, locally grown produce that reflects the current season.</li>
       <li><strong>Learn What’s in Season:</strong> Research seasonal food charts for your region to understand what’s naturally available each month.</li>
       <li><strong>Grow Your Own Food:</strong> Even a small kitchen garden with seasonal herbs and vegetables can encourage mindful eating.</li>
       <li><strong>Preserve Seasonal Produce:</strong> Freezing, pickling, or drying seasonal foods ensures you enjoy their benefits throughout the year.</li>
     </ul>

     <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Return to Nature’s Rhythm</h2>

     <p class="mb-4">Seasonal eating is more than just a trend—it’s a sustainable lifestyle choice that enhances health, supports local economies, and protects the environment. By aligning our diet with nature’s cycles, we nourish ourselves and contribute to a healthier planet.</p>
     `,
    },
    "kid-friendly-nutritious-meals": {
      title: "How to Create Kid-Friendly Meals Without Sacrificing Nutrition",
      date: "March 22, 2025",
      author: "Anita Sharma",
      category: "Healthy Eating",
      image:
        "https://images.unsplash.com/photo-1505576633757-0ac1084af824?w=500&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Getting kids to eat healthy can be a challenge, especially when they prefer sugary cereals, fries, and processed snacks. However, with a little creativity, you can prepare meals that are both nutritious and appealing to children. Here’s how to make kid-friendly meals without sacrificing nutrition.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">1. Make Healthy Foods Fun</h2>
        <p class="mb-4">Presentation matters! Try shaping fruits and vegetables into fun designs using cookie cutters or arranging meals into smiley faces. Making food visually appealing can encourage kids to try new things.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">2. Sneak in the Nutrients</h2>
        <p class="mb-4">If your child refuses vegetables, incorporate them into their favorite dishes. Blend spinach into smoothies, add grated carrots into pasta sauces, or mix mashed cauliflower into mac and cheese.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">3. Choose Whole Grains</h2>
        <p class="mb-4">Instead of white bread, pasta, or rice, opt for whole-grain alternatives. Whole grains provide more fiber, keeping kids fuller for longer and stabilizing their energy levels.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">4. Opt for Healthier Snacks</h2>
        <p class="mb-4">Replace chips and candy with healthier alternatives like homemade granola bars, yogurt with fruit, or air-popped popcorn. Nut butter with sliced apples is another tasty and nutritious snack.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">5. Include Protein in Every Meal</h2>
        <p class="mb-4">Protein is essential for growth and development. Ensure every meal includes a good source of protein, such as eggs, beans, yogurt, chicken, or tofu.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">6. Swap Sugary Drinks for Healthy Beverages</h2>
        <p class="mb-4">Instead of soda and packaged juices, encourage kids to drink water, homemade smoothies, or flavored water infused with fresh fruits and herbs.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">7. Let Kids Get Involved</h2>
        <p class="mb-4">Kids are more likely to eat what they help prepare. Involve them in the kitchen by letting them mix ingredients, assemble meals, or choose a vegetable to cook.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">8. Balance Treats with Healthy Choices</h2>
        <p class="mb-4">It’s okay to allow occasional treats, but balance them with nutritious meals. Teach kids about moderation rather than restriction.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">9. Experiment with Healthy Versions of Favorite Foods</h2>
        <p class="mb-4">Make healthier versions of popular foods—bake instead of fry, use natural sweeteners, or incorporate more vegetables into dishes like pizza or burgers.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">10. Be Patient and Keep Trying</h2>
        <p class="mb-4">Kids may not love new foods immediately, but repeated exposure helps. Keep offering nutritious foods in different ways until they develop a taste for them.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Small Changes, Big Impact</h2>
        <p class="mb-4">Creating nutritious, kid-friendly meals doesn’t have to be complicated. Small changes, like using whole grains, adding protein, and making food fun, can make a big difference in your child’s diet and overall health.</p>
        `,
    },
    "plant-based-indian-cooking": {
      title: "The Rise of Plant-Based Indian Cooking",
      date: "March 22, 2025",
      author: "Anita Sharma",
      category: "Food & Sustainability",
      image:
        "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Indian cuisine has long been known for its rich flavors, aromatic spices, and diverse vegetarian dishes. With the growing global movement toward plant-based eating, Indian cooking is experiencing a resurgence—not just for its health benefits but also for its sustainability and ethical appeal.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">A Natural Fit for Plant-Based Diets</h2>
        <p class="mb-4">Unlike many other world cuisines, traditional Indian food already has a strong foundation in plant-based eating. Lentils, beans, vegetables, and dairy alternatives have always been staples in many Indian households, making the transition to a fully plant-based diet easier.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Health Benefits of Plant-Based Indian Cooking</h2>
        <p class="mb-4">A plant-based diet is associated with numerous health benefits, including improved heart health, better digestion, and reduced risk of chronic diseases. Indian cooking, rich in fiber, protein, and antioxidants, offers a well-balanced diet through dishes like dal, sabzi, and fermented foods.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Plant-Based Protein Sources in Indian Cuisine</h2>
        <p class="mb-4">One of the biggest concerns for those shifting to a plant-based diet is protein intake. Fortunately, Indian cuisine offers plenty of protein-rich options:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">**Lentils & Legumes** – Dal (lentil soups), rajma (kidney beans), chana (chickpeas), and black-eyed peas are excellent protein sources.</li>
          <li class="mb-2">**Soy-Based Foods** – Tofu and soy chunks (soya nuggets) are great substitutes for paneer.</li>
          <li class="mb-2">**Nuts & Seeds** – Almonds, cashews, flaxseeds, and sesame seeds add both protein and healthy fats.</li>
          <li class="mb-2">**Millets & Whole Grains** – Quinoa, bajra (pearl millet), and ragi (finger millet) are nutrient-dense grains that complement plant-based meals.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Dairy Alternatives in Indian Cooking</h2>
        <p class="mb-4">Many classic Indian dishes use dairy, but there are plant-based substitutes for everything from ghee to paneer:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Coconut milk or cashew cream instead of heavy cream in curries.</li>
          <li class="mb-2">Almond or soy milk in chai and desserts.</li>
          <li class="mb-2">Homemade nut-based curd as a substitute for yogurt.</li>
          <li class="mb-2">Nutritional yeast for a cheesy flavor in dishes that traditionally use paneer.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Sustainability and Ethical Eating</h2>
        <p class="mb-4">Beyond health benefits, plant-based Indian cooking aligns with sustainability. By reducing reliance on animal products, we decrease greenhouse gas emissions, save water, and support ethical farming practices. Traditional Indian cooking methods like using seasonal produce and minimizing food waste further contribute to a sustainable lifestyle.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Popular Plant-Based Indian Dishes</h2>
        <p class="mb-4">If you’re looking to incorporate more plant-based meals into your diet, try these classic Indian dishes:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Chana Masala (spiced chickpea curry)</li>
          <li class="mb-2">Baingan Bharta (smoky mashed eggplant)</li>
          <li class="mb-2">Aloo Gobi (potato and cauliflower curry)</li>
          <li class="mb-2">Sambar (lentil-based vegetable stew)</li>
          <li class="mb-2">Tadka Dal (tempered lentils with spices)</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Embracing the Future of Indian Cuisine</h2>
        <p class="mb-4">The rise of plant-based Indian cooking reflects a shift toward healthier, more sustainable eating habits. With its natural emphasis on plant-based ingredients, Indian cuisine offers a flavorful and nourishing way to embrace this growing movement.</p>
        <p class="mb-4">Whether you’re fully vegan or just looking to add more plant-based meals to your diet, Indian food provides endless delicious possibilities.</p>
        `,
    },
    "mastering-perfect-biryani": {
      title: "Mastering the Perfect Biryani: Tips and Techniques",
      date: "March 22, 2025",
      author: "Anita Sharma",
      category: "Food & Cooking",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">Biryani, the crown jewel of Indian cuisine, is a dish that combines fragrant rice, tender meat or vegetables, and aromatic spices into a single, flavorful meal. While making biryani might seem complex, mastering a few key techniques can help you create a restaurant-quality biryani at home.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">1. Choosing the Right Rice</h2>
        <p class="mb-4">The foundation of a great biryani is high-quality **Basmati rice**. Look for long-grain rice labeled as "extra-long" or "aged," as they absorb flavors better and stay separate when cooked.</p>
        <p class="mb-4">**Pro Tip:** Rinse the rice 2-3 times to remove excess starch, then soak it for at least 30 minutes to ensure even cooking.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">2. Selecting the Perfect Protein</h2>
        <p class="mb-4">Whether you prefer chicken, mutton, fish, or paneer, marination is key. A **yogurt-based marinade** with spices tenderizes the protein and infuses it with flavor.</p>
        <p class="mb-4">**Marination Must-Haves:** Yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, and a squeeze of lemon.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">3. Layering for Maximum Flavor</h2>
        <p class="mb-4">Biryani is all about layers. To achieve the perfect balance of flavors:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Start with a layer of cooked rice.</li>
          <li class="mb-2">Add marinated protein or vegetables.</li>
          <li class="mb-2">Top with fried onions, fresh herbs (cilantro and mint), and saffron-infused milk.</li>
          <li class="mb-2">Repeat the layers to enhance depth of flavor.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">4. Mastering the Dum Cooking Technique</h2>
        <p class="mb-4">The secret to a perfectly cooked biryani lies in **dum cooking**—a slow cooking method that allows the flavors to blend beautifully.</p>
        <p class="mb-4">**How to Dum Cook Biryani:**</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Seal the pot with dough or a tight-fitting lid to trap steam.</li>
          <li class="mb-2">Cook on low heat for **25-30 minutes**.</li>
          <li class="mb-2">For an authentic touch, place a tawa (griddle) under the biryani pot for gentle heat distribution.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">5. The Role of Spices</h2>
        <p class="mb-4">Aromatic whole spices define biryani’s distinct taste. Essential spices include:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Bay leaves, cinnamon, cloves, and cardamom for depth.</li>
          <li class="mb-2">Star anise and mace for a touch of sweetness.</li>
          <li class="mb-2">A dash of rose water or kewra essence for a royal finish.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">6. Achieving the Perfect Texture</h2>
        <p class="mb-4">For fluffy, separate grains of rice:</p>
        <ul class="list-disc pl-6">
          <li class="mb-2">Use the **60-70% rule**—parboil the rice until it's 70% cooked before layering.</li>
          <li class="mb-2">Add ghee to prevent sticking and enhance flavor.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">7. The Importance of Resting</h2>
        <p class="mb-4">After cooking, **let the biryani rest for 10 minutes** before serving. This allows the flavors to meld and ensures every spoonful is packed with taste.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">8. Serving Biryani the Right Way</h2>
        <p class="mb-4">Biryani is best enjoyed with **raita, salan (gravy), or a simple cucumber salad**. When serving, use a flat spoon to gently lift the layers without mixing everything together.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Dish Worth Perfecting</h2>
        <p class="mb-4">Mastering biryani takes patience, but the rewards are truly delicious. By focusing on rice quality, marination, layering, and dum cooking, you can create a biryani that rivals the best. Experiment with different styles—Hyderabadi, Lucknowi, Kolkata—and make it your own!</p>
        <p class="mb-4">Now that you know the secrets, are you ready to cook your **perfect biryani**?</p>
        `,
    },
    "traditional-cooking-methods-benefits": {
      title: "The Health Benefits of Traditional Indian Cooking Methods",
      date: "March 22, 2025",
      author: "Anita Sharma",
      category: "Health & Wellness",
      image:
        "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=80",
      content: `
        <p class="mb-4">For centuries, Indian cooking has relied on traditional methods that not only enhance flavor but also offer significant health benefits. From slow cooking in clay pots to fermenting foods, these time-honored techniques contribute to better digestion, improved nutrition, and overall well-being.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">1. Slow Cooking for Maximum Nutrient Retention</h2>
        <p class="mb-4">Traditional Indian dishes are often slow-cooked over low heat, allowing flavors to develop naturally while preserving essential vitamins and minerals. Cooking techniques like **dum (steam cooking)** and **simmering** ensure that ingredients retain their nutritional value.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Slow cooking helps in better digestion, enhances nutrient absorption, and keeps proteins and fibers intact.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">2. Cooking in Clay Pots for Enhanced Flavor and Minerals</h2>
        <p class="mb-4">Before the rise of metal cookware, Indian households used **earthenware or clay pots** for cooking. Clay pots allow food to cook evenly and absorb excess moisture, keeping dishes naturally rich in flavor.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Clay is alkaline in nature, which balances the pH of acidic foods and adds trace minerals like iron, calcium, and magnesium to the dish.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">3. Fermentation: Boosting Gut Health</h2>
        <p class="mb-4">Fermented foods such as **idli, dosa, dahi (yogurt), and kanji** are staples in Indian cuisine. The natural fermentation process increases probiotics, which support gut health and boost immunity.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Probiotics aid digestion, improve metabolism, and enhance the absorption of essential nutrients like B vitamins.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">4. Using Ghee for Better Fat Metabolism</h2>
        <p class="mb-4">Despite modern myths about fats, **ghee (clarified butter)** has been a staple in Indian kitchens for centuries. Ghee is rich in healthy fats and contains butyric acid, which supports gut health.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Ghee promotes digestion, strengthens the immune system, and is a good source of energy and fat-soluble vitamins.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">5. Traditional Grinding Methods Preserve Nutrients</h2>
        <p class="mb-4">In earlier times, stone grinders (sil-batta) and hand mills (chakki) were used for grinding grains and spices. Unlike modern electric mixers, these methods generate less heat, preventing the loss of essential oils and nutrients.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Stone-ground spices and flours retain more antioxidants and essential nutrients, making them more beneficial for overall health.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">6. Tadka (Tempering) to Unlock Nutrients</h2>
        <p class="mb-4">Tadka, or tempering, is a method where whole spices are roasted in ghee or oil before being added to dishes. This process helps release essential oils and maximizes the absorption of fat-soluble vitamins.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Tadka enhances the bioavailability of nutrients, aids digestion, and adds anti-inflammatory properties to food.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">7. Sun Drying for Natural Preservation</h2>
        <p class="mb-4">In traditional Indian households, seasonal vegetables, fruits, and spices were sun-dried to preserve them naturally without artificial preservatives.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Sun drying retains more vitamins compared to modern dehydrating techniques and helps in storing food for long periods without chemical additives.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">8. Using Whole Spices for Enhanced Immunity</h2>
        <p class="mb-4">Traditional Indian cooking relies on whole spices like **turmeric, cumin, coriander, cinnamon, and cloves**. These spices are rich in antioxidants and have powerful medicinal properties.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Whole spices improve digestion, boost immunity, and reduce inflammation in the body.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">9. Eating Seasonal and Local Foods</h2>
        <p class="mb-4">Indian cooking follows the principle of eating what’s available **seasonally and locally**, ensuring freshness and better nutrient intake.</p>
        <p class="mb-4"><strong>Health Benefits:</strong> Seasonal foods are richer in vitamins, easier to digest, and more environmentally friendly.</p>
          
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Return to Traditional Wisdom</h2>
        <p class="mb-4">Modern cooking methods prioritize convenience, but traditional Indian cooking techniques offer unmatched **health benefits, better nutrition, and richer flavors**. By incorporating slow cooking, fermentation, stone grinding, and the use of whole spices into your routine, you can enjoy meals that are both delicious and nourishing.</p>
        <p class="mb-4">Revisiting these time-tested practices is not just a nod to tradition—it’s a step toward better health!</p>
        `,
    },
  };

  useEffect(() => {
    // Simulate fetching blog post data
    const timer = setTimeout(() => {
      setPost(
        blogPosts[slug] || {
          title: "Sample Blog Post",
          date: "January 1, 2023",
          author: "John Doe",
          category: "Food",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
          content: `
          <p class="mb-4">This is a placeholder blog post content. In a production environment, this would be real content fetched from a database or CMS.</p>
          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Section Heading</h2>
          <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        `,
        }
      );
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
                <Button
                  variant="ghost"
                  className="pl-0 hover:pl-2 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

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

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
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
