import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Fail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Payment Failed!");
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-red-600 font-bold text-2xl">
        Payment Failed. Redirecting...
      </h1>
    </div>
  );
};

export default Fail;
