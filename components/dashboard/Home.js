import NavButton from "./nav_button/NavButton";
import Sidebar from "./sidebar/Sidebar";

const Home = () => {
  const NavButtonData = [
    { id: 1, cls: `bg-red-300`, data: `01` },
    { id: 2, cls: `bg-green-300`, data: `02` },
    { id: 3, cls: `bg-blue-300`, data: `03` },
    { id: 4, cls: `bg-violet-300`, data: `04` },
  ];
  return (
    <main className="flex gap-6">
      <Sidebar/>
      <section className="m-3  font-semibold w-full">
        {/* dashboard title  */}
        <span className="md:text-2xl text-gray-900 mr-2">Dashboard</span>
        <span className="text-md text-gray-500">Control Panel</span>

        {/* dashboard nav button  */}
        <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {NavButtonData.map((data) => <NavButton key={data.id} {...data} />)}
        </div>
      </section>
    </main>
  );
};

export default Home;
