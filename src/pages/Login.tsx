import { FormEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../components/ui/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
    setLoading(false);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 rounded-md sm:p-8 bg-black text-white shadow-2xs">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link
            to={"/register"}
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Sign up here
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

            {!loading ? <p>Login with Google</p> : <Loader trigger={loading} />}
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-indigo-600"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 font-semibold rounded-md bg-white text-black cursor-pointer flex justify-center items-center"
          >
            {!loading ? " Sign in" : <Loader trigger={loading} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
