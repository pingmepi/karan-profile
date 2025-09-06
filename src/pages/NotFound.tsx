import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Seo title="404 – Page Not Found" description="The page you're looking for doesn't exist." canonicalPath={location.pathname} noIndex />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <p className="text-sm text-muted-foreground mb-4">Redirecting to home in 3 seconds...</p>
        <button 
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return to Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
