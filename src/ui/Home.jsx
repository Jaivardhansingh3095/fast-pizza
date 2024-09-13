import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-extrabold tracking-wide md:text-3xl">
        The best pizza.
        <br />
        <span className="mt-1 inline-block text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName ? (
        <Button to="/menu" type="primary">
          Continue Ordering, {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
