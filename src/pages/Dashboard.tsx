
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
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { user, profile, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [progress, setProgress] = useState(0);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Animate progress bar on load
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle logout
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const upcomingDeliveries = [
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

  const pastDeliveries = [
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
                      {profile?.full_name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{profile?.full_name}</p>
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
                  <Button variant="ghost" className="w-full justify-start">
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
                  Welcome back, {profile?.full_name?.split(" ")[0] || "User"}!
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
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg">Family Plan</h3>
                        <p className="text-muted-foreground">
                          5 meals per week
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Next billing: July 1, 2025
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-right">
                          <span className="text-2xl font-bold">$79</span>
                          <span className="text-muted-foreground">/week</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Change Plan
                          </Button>
                          <Button size="sm">Manage</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current Billing Period</span>
                        <span>20 days remaining</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
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
                        {upcomingDeliveries.map((delivery) => (
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
                              <Button size="sm" variant="outline">
                                Modify
                              </Button>
                              <Button size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      <TabsContent value="past" className="space-y-4">
                        {pastDeliveries.map((delivery) => (
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
                              <Button size="sm" variant="outline">
                                Order Again
                              </Button>
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
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
