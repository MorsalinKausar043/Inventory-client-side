import { BiRightArrowCircle } from "react-icons/bi";


const NavButton = ({ cls, data, title, icon }) => {
  return (
    <>
      <div
        className={`${cls} flex flex-col py-2 px-3 drop-shadow-lg rounded-lg`}
      >
        {/* top side  */}
        <div className="flex flex-row justify-between items-center">
          {/* top left side  */}
          <div className="py-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-xl shadow-gray-400/30">
              {data}
            </h1>
            <span className="text-2xl mt-6 inline-block text-slate-200 font-semibold drop-shadow-xl shadow-gray-400/30">
              {title}
            </span>
          </div>
          {/* top right side  */}
          <div>
            <span className="text-7xl lg:text-8xl text-gray-500">
              {icon}
            </span>
          </div>
        </div>
        {/* bottom side  */}
        <div className="flex justify-center items-center flex-row py-2 text-lg text-white font-semibold drop-shadow-xl shadow-gray-400/30">
          <span> More Info</span>
          <span className="inline-block ml-1 text-2xl">
            <BiRightArrowCircle />
          </span>
        </div>
      </div>
    </>
  );
};

export default NavButton;
