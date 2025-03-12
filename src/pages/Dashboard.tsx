
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  User,
  Settings,
  ShoppingBag,
  LogOut,
  Bell,
  Home,
  Loader2,
  PenSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSubscription } from "@/hooks/useSubscription";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, profile, isAuthenticated, logout } = useAuth();
  const { 
    subscription, 
    upcomingDeliveries, 
    pastDeliveries,
    isLoading: isSubscriptionLoading,
    updateSubscriptionPlan,
    modifyDelivery,
  } = useSubscription();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isUpdatingPlan, setIsUpdatingPlan] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Animate progress bar on load
  useEffect(() => {
    if (subscription?.days_remaining) {
      const percent = Math.floor((subscription.days_remaining / 30) * 100);
      const timer = setTimeout(() => setProgress(percent), 500);
      return () => clearTimeout(timer);
    }
  }, [subscription]);

  const handleUpdatePlan = async () => {
    if (!selectedPlan) {
      toast({
        title: "No plan selected",
        description: "Please select a plan to continue",
        variant: "destructive",
      });
      return;
    }
    
    setIsUpdatingPlan(true);
    
    try {
      await updateSubscriptionPlan(selectedPlan);
    } finally {
      setIsUpdatingPlan(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (!isAuthenticated) {
    return null; // Don't render if not authenticated
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Navbar />
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="md:w-64 flex-shrink-0"
          >
            <Card className="sticky top-24">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage
                      src={profile?.avatar_url || ""}
                      alt={profile?.full_name || "User"}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{profile?.full_name || "User"}</p>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1 px-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/plans")}>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    My Plan
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Delivery Schedule
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
              <CardFooter className="pt-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="space-y-6">
              {/* Greeting */}
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Welcome back, {profile?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "User"}!
                </h1>
                <p className="text-muted-foreground">
                  Manage your meal deliveries and subscription from your
                  dashboard.
                </p>
              </div>

              {/* Subscription Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Your Meal Plan</CardTitle>
                    <CardDescription>
                      Current subscription and upcoming renewal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubscriptionLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                          <div>
                            <h3 className="font-semibold text-lg">{subscription?.plan_name || "Family Plan"}</h3>
                            <p className="text-muted-foreground">
                              {subscription?.meals_per_week || 5} meals per week
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Next billing: {subscription?.next_billing_date || "July 1, 2025"}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="text-right">
                              <span className="text-2xl font-bold">${subscription?.price_per_week || 79}</span>
                              <span className="text-muted-foreground">/week</span>
                            </div>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    Change Plan
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Change Your Meal Plan</DialogTitle>
                                    <DialogDescription>
                                      Select a new meal plan from the options below.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                      <label className="flex items-center space-x-2">
                                        <input 
                                          type="radio" 
                                          name="plan" 
                                          value="Basic Plan" 
                                          checked={selectedPlan === "Basic Plan"} 
                                          onChange={(e) => setSelectedPlan(e.target.value)}
                                          className="form-radio text-primary h-4 w-4"
                                        />
                                        <span>Basic Plan - 3 meals/week ($49)</span>
                                      </label>
                                      
                                      <label className="flex items-center space-x-2">
                                        <input 
                                          type="radio" 
                                          name="plan" 
                                          value="Family Plan" 
                                          checked={selectedPlan === "Family Plan"} 
                                          onChange={(e) => setSelectedPlan(e.target.value)}
                                          className="form-radio text-primary h-4 w-4"
                                        />
                                        <span>Family Plan - 5 meals/week ($79)</span>
                                      </label>
                                      
                                      <label className="flex items-center space-x-2">
                                        <input 
                                          type="radio" 
                                          name="plan" 
                                          value="Premium Plan" 
                                          checked={selectedPlan === "Premium Plan"} 
                                          onChange={(e) => setSelectedPlan(e.target.value)}
                                          className="form-radio text-primary h-4 w-4"
                                        />
                                        <span>Premium Plan - 7 meals/week ($109)</span>
                                      </label>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button 
                                      onClick={handleUpdatePlan} 
                                      disabled={isUpdatingPlan}
                                    >
                                      {isUpdatingPlan ? (
                                        <>
                                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                          Updating...
                                        </>
                                      ) : (
                                        "Update Plan"
                                      )}
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              
                              <Button size="sm" onClick={() => navigate("/plans")}>Manage</Button>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current Billing Period</span>
                            <span>{subscription?.days_remaining || 20} days remaining</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Deliveries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Your Deliveries</CardTitle>
                    <CardDescription>
                      View and manage your meal deliveries
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubscriptionLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      </div>
                    ) : (
                      <Tabs
                        defaultValue="upcoming"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="space-y-4"
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                          <TabsTrigger value="past">Past Deliveries</TabsTrigger>
                        </TabsList>
                        <TabsContent value="upcoming" className="space-y-4">
                          {upcomingDeliveries.length === 0 ? (
                            <div className="text-center py-8">
                              <p className="text-muted-foreground">No upcoming deliveries scheduled</p>
                            </div>
                          ) : (
                            upcomingDeliveries.map((delivery) => (
                              <div
                                key={delivery.id}
                                className="border rounded-lg p-4 space-y-3"
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-primary" />
                                      <h3 className="font-medium">
                                        {delivery.date}
                                      </h3>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      <span>
                                        Delivery between 2:00 PM - 6:00 PM
                                      </span>
                                    </div>
                                  </div>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-primary">
                                    {delivery.status}
                                  </span>
                                </div>
                                <div className="pt-2">
                                  <p className="font-medium text-sm">Meals:</p>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                                    {delivery.items.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="pt-2 flex justify-end gap-2">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button size="sm" variant="outline">
                                        <PenSquare className="mr-2 h-3 w-3" />
                                        Modify
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>Modify Your Delivery</DialogTitle>
                                        <DialogDescription>
                                          Make changes to your delivery for {delivery.date}
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4 py-4">
                                        <p className="text-sm font-medium">Current meals:</p>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                          {delivery.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                          ))}
                                        </ul>
                                        <p className="text-sm text-muted-foreground">
                                          You can change your meal selections up to 48 hours before the delivery date.
                                        </p>
                                      </div>
                                      <DialogFooter>
                                        <Button onClick={() => {
                                          toast({
                                            title: "Delivery updated",
                                            description: "Your delivery has been updated successfully.",
                                          });
                                        }}>
                                          Save Changes
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                  <Button size="sm" onClick={() => {
                                    toast({
                                      title: "Delivery details",
                                      description: `Your delivery for ${delivery.date} will arrive between 2:00 PM - 6:00 PM.`,
                                    });
                                  }}>View Details</Button>
                                </div>
                              </div>
                            ))
                          )}
                        </TabsContent>
                        <TabsContent value="past" className="space-y-4">
                          {pastDeliveries.length === 0 ? (
                            <div className="text-center py-8">
                              <p className="text-muted-foreground">No past deliveries found</p>
                            </div>
                          ) : (
                            pastDeliveries.map((delivery) => (
                              <div
                                key={delivery.id}
                                className="border rounded-lg p-4 space-y-3"
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-muted-foreground" />
                                      <h3 className="font-medium">
                                        {delivery.date}
                                      </h3>
                                    </div>
                                  </div>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                    {delivery.status}
                                  </span>
                                </div>
                                <div className="pt-2">
                                  <p className="font-medium text-sm">Meals:</p>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-1">
                                    {delivery.items.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="pt-2 flex justify-end">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => {
                                      toast({
                                        title: "Order again",
                                        description: "We've added these meals to your next delivery",
                                      });
                                    }}
                                  >
                                    Order Again
                                  </Button>
                                </div>
                              </div>
                            ))
                          )}
                        </TabsContent>
                      </Tabs>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
