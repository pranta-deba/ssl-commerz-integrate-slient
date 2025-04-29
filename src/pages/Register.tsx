import { FormEvent, useState } from "react";
import Loader from "../components/ui/Loader";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const [loading, setLoading] = useState(false);

  //* email password login
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const form = e.currentTarget;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.files?.[0];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullname || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }
    if (!image) {
      toast.error("Image file required!");
      setLoading(false);
      return;
    }

    console.log({ fullname, email, password, confirmPassword, image });
    setLoading(false);
    toast.success("Registration successful!");
  };

  //* google login
  const handleGoogleLogin = () => {
    console.log("Google Login");
    toast.success("Google login Success.");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 rounded-md sm:p-8 bg-black text-white shadow-2xs">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Sign up to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Already account?
          <Link
            to={"/login"}
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Login here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Login with Google"
            type="button"
            disabled={loading}
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 cursor-pointer"
          >
            <FaGoogle />

            {!loading ? (
              <p>Sign up with Google</p>
            ) : (
              <Loader trigger={loading} />
            )}
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="fullname" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                autoComplete="name"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="current-password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>

            {/* Image URL Field */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="image" className="block text-sm">
                Profile Image URL
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 font-semibold rounded-md bg-white text-black cursor-pointer flex justify-center items-center"
          >
            {!loading ? "Sign up" : <Loader trigger={loading} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
