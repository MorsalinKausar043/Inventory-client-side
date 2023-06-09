import Link from "next/link";
import NavButton from "./nav_button/NavButton";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { modelEvent } from "../../features/filter/filterSlice";
import Model from "./model/Model";

const Home = () => {
  const {model} = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const NavButtonData = [
    {
      id: 1,
      cls: `bg-sky-500`,
      data: `01`,
      title: "Total Products",
      link: "/products",
      icon: <MdOutlineShoppingBag />,
    },
    {
      id: 2,
      cls: `bg-green-500`,
      data: `02`,
      title: "বাকির হিসাব",
      link: "/account",
      icon: <GoGraph />,
    },
    {
      id: 3,
      cls: `bg-yellow-500`,
      data: `03`,
      title: "আজকের লেনদেন",
      link: "/transaction",
      icon: <FaUserFriends />,
    },
    {
      id: 4,
      cls: `bg-violet-400`,
      data: `04`,
      title: "Not Available",
      link: "/",
      icon: <CgUnavailable />,
    },
  ];
  return (
      <main>
        

        {/* dashboard nav button  */}
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {NavButtonData.map((data) => (
              <Link key={data.id} href={data.link}>
                <NavButton {...data} />
              </Link>
          ))}
        </div>
        {/* mini button  */}
        <div className="mt-5">
          <button
            onClick={() => dispatch(modelEvent(true))}
            className="bg-indigo-500 hover:bg-indigo-600 drop-shadow-xl shadow-indigo-500/40 text-white font-bold py-2 px-4 rounded-full"
          >
            Add New Product
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 drop-shadow-xl shadow-teal-500/40 text-white font-bold py-2 px-4 rounded-full mt-2 md:mt-0 ml-2">
            Sell Product
          </button>
        </div>
        {model && <Model/>}
      </main>
  );
};

export default Home;
