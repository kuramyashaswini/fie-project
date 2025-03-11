
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem("tastytrail_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // This is a mock authentication
      // In a real app, you would call an authentication API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful login
      if (email === "demo@example.com" && password === "password") {
        const newUser = {
          id: "user_123",
          email,
          name: "Demo User",
        };
        setUser(newUser);
        localStorage.setItem("tastytrail_user", JSON.stringify(newUser));
        toast({
          title: "Logged in successfully",
          description: "Welcome back to Tasty Trail!",
        });
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // This is a mock registration
      // In a real app, you would call a registration API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const newUser = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email,
        name,
      };
      
      setUser(newUser);
      localStorage.setItem("tastytrail_user", JSON.stringify(newUser));
      toast({
        title: "Account created successfully",
        description: "Welcome to Tasty Trail!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tastytrail_user");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
