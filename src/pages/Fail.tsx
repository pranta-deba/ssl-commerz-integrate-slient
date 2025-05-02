import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MdErrorOutline } from "react-icons/md";

const Fail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Payment Failed!");
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center animate-fade-in-up">
        <div className="text-red-600 text-6xl mb-4 flex justify-center">
          <MdErrorOutline className="animate-pulse duration-1000" />
        </div>
        <h1 className="text-2xl font-bold text-red-700 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-4">
          Oops! Something went wrong with your payment. You will be redirected
          shortly.
        </p>
        <div className="text-sm text-gray-500">Redirecting to home page...</div>
      </div>
    </div>
  );
};

export default Fail;
