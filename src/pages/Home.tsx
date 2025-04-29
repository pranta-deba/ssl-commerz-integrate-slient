import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
