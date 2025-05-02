import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.warning("Payment Cancelled!", {
      icon: "⚠️",
    });
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <h1 className="text-yellow-700 font-bold text-2xl">
        Payment Cancelled. Redirecting...
      </h1>
    </div>
  );
};

export default Cancel;
