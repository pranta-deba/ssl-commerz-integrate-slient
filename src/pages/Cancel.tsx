import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MdWarningAmber } from "react-icons/md";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.warning("Payment Cancelled!", {
      icon: "⚠️",
    });
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center animate-fade-in-up">
        <div className="text-yellow-600 text-6xl mb-4 flex justify-center">
          <MdWarningAmber className="animate-pulse duration-1000" />
        </div>
        <h1 className="text-2xl font-bold text-yellow-700 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-4">
          You have cancelled the payment process. You will be redirected
          shortly.
        </p>
        <div className="text-sm text-gray-500">Redirecting to home page...</div>
      </div>
    </div>
  );
};

export default Cancel;
