import { useRouter } from "next/router";
import { FaTachometerAlt } from "react-icons/fa";

const NavTitle = () => {
  const { route } = useRouter();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <span className="md:text-2xl text-gray-900 mr-2">Dashboard</span>
          <span className="text-md text-gray-500">Control Panel</span>
        </div>
        <div className="text-sm font-semibold hidden md:flex justify-center items-center flex-row">
          <span className="mr-1 text-lg">
            <FaTachometerAlt />
          </span>
          <h1>Home {`>`} </h1>
          <span className="text-gray-400 ml-1">
            {route === "/"
              ? "Dashboard"
              : route.slice(1,2).toUpperCase() + route.slice(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default NavTitle;
