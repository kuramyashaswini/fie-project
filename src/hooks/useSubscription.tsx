
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Delivery {
  id: number;
  date: string;
  status: string;
  items: string[];
}

export interface Subscription {
  id?: string;
  plan_name: string;
  meals_per_week: number;
  price_per_week: number;
  next_billing_date: string;
  status: string;
  billing_period_end?: string;
  days_remaining?: number;
}

export const useSubscription = () => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [upcomingDeliveries, setUpcomingDeliveries] = useState<Delivery[]>([]);
  const [pastDeliveries, setPastDeliveries] = useState<Delivery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch subscription data
  useEffect(() => {
    const fetchSubscriptionData = async () => {
      if (!user) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        // For now, we'll use dummy data until we set up the actual tables in Supabase
        // Normally we would fetch from Supabase here
        
        // Simulate a profile fetch
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("subscription_plan, subscription_status")
          .eq("id", user.id)
          .single();
          
        if (profileError) throw profileError;
        
        // Calculate days remaining in billing period
        const today = new Date();
        const nextBillingDate = new Date(today);
        nextBillingDate.setDate(today.getDate() + 20); // 20 days from now
        
        const daysRemaining = Math.ceil(
          (nextBillingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        
        // Create a subscription object based on profile data
        const subscriptionData: Subscription = {
          plan_name: profile.subscription_plan || "Family Plan",
          meals_per_week: 5,
          price_per_week: 79,
          next_billing_date: nextBillingDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          status: profile.subscription_status || "active",
          days_remaining: daysRemaining,
        };
        
        setSubscription(subscriptionData);
        
        // Mock delivery data
        const upcomingMockDeliveries = [
          {
            id: 1,
            date: "Wednesday, June 21",
            status: "Scheduled",
            items: ["Herb Roasted Chicken", "Vegetable Lasagna", "Beef Stir Fry"],
          },
          {
            id: 2,
            date: "Wednesday, June 28",
            status: "Processing",
            items: [
              "Salmon with Dill Sauce",
              "Mushroom Risotto",
              "Lemon Garlic Pasta",
            ],
          },
        ];
        
        const pastMockDeliveries = [
          {
            id: 3,
            date: "Wednesday, June 14",
            status: "Delivered",
            items: ["Teriyaki Chicken Bowl", "Veggie Curry", "Pasta Primavera"],
          },
          {
            id: 4,
            date: "Wednesday, June 7",
            status: "Delivered",
            items: ["Beef Tacos", "Margherita Flatbread", "Shrimp Scampi"],
          },
        ];
        
        setUpcomingDeliveries(upcomingMockDeliveries);
        setPastDeliveries(pastMockDeliveries);
      } catch (err) {
        console.error("Error fetching subscription data:", err);
        setError(err instanceof Error ? err.message : "Failed to load subscription data");
        toast({
          title: "Error loading subscription",
          description: err instanceof Error ? err.message : "Failed to load subscription data",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSubscriptionData();
  }, [user, toast]);
  
  // Function to update subscription plan
  const updateSubscriptionPlan = async (newPlan: string) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ subscription_plan: newPlan })
        .eq("id", user.id);
        
      if (error) throw error;
      
      setSubscription(prev => prev ? { ...prev, plan_name: newPlan } : null);
      
      toast({
        title: "Plan Updated",
        description: `Your subscription plan has been updated to ${newPlan}`,
      });
      
      return true;
    } catch (err) {
      console.error("Error updating subscription plan:", err);
      toast({
        title: "Error updating plan",
        description: err instanceof Error ? err.message : "Failed to update subscription plan",
        variant: "destructive",
      });
      return false;
    }
  };
  
  // Function to modify a delivery
  const modifyDelivery = async (deliveryId: number, newItems: string[]) => {
    if (!user) return;
    
    try {
      // In a real app, we would update the delivery in Supabase
      // For now, we'll just update the state
      
      const updatedUpcoming = upcomingDeliveries.map(delivery => 
        delivery.id === deliveryId 
          ? { ...delivery, items: newItems } 
          : delivery
      );
      
      setUpcomingDeliveries(updatedUpcoming);
      
      toast({
        title: "Delivery Updated",
        description: "Your delivery has been successfully updated",
      });
      
      return true;
    } catch (err) {
      console.error("Error modifying delivery:", err);
      toast({
        title: "Error updating delivery",
        description: err instanceof Error ? err.message : "Failed to update delivery",
        variant: "destructive",
      });
      return false;
    }
  };
  
  return {
    subscription,
    upcomingDeliveries,
    pastDeliveries,
    isLoading,
    error,
    updateSubscriptionPlan,
    modifyDelivery,
  };
};
