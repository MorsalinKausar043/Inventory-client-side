import Link from "next/link";
import NavButton from "./nav_button/NavButton";
import NavTitle from "./nav_button/NavTitle";
import Sidebar from "./sidebar/Sidebar";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";

const Home = () => {
  const NavButtonData = [
    {
      id: 1,
      cls: `bg-sky-500`,
      data: `01`,
      title: "Total Products",
      link: "/login",
      icon: <MdOutlineShoppingBag />,
    },
    {
      id: 2,
      cls: `bg-green-500`,
      data: `02`,
      title: "বাকির হিসাব",
      link: "/login",
      icon: <GoGraph />,
    },
    {
      id: 3,
      cls: `bg-yellow-500`,
      data: `03`,
      title: "আজকের লেনদেন",
      link: "/login",
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
    <main className="flex gap-6">
      <Sidebar />
      <section className="my-6 px-2 md:px-6 font-semibold w-full">
        {/* dashboard title  */}
        <NavTitle />

        {/* dashboard nav button  */}
        <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {NavButtonData.map((data) => (
            <>
              <Link key={data.id} href={data.link}>
                <NavButton {...data} />
              </Link>
            </>
          ))}
        </div>
        {/* mini button  */}
        <div className="mt-5">
          <button className="bg-indigo-500 hover:bg-indigo-600 drop-shadow-xl shadow-indigo-500/40 text-white font-bold py-2 px-4 rounded-full">
            Add New Product
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 drop-shadow-xl shadow-teal-500/40 text-white font-bold py-2 px-4 rounded-full ml-2">
            Sell Product
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
