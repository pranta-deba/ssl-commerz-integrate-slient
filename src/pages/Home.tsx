import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <div>
      <h1>Home</h1>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        Responsive
      </button>
    </div>
  );
};

export default Home;
