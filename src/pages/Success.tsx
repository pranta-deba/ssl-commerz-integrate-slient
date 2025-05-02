import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg animate-fade-in-up">
        <div className="flex justify-center items-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction was completed
          successfully.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
