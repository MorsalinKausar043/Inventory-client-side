import { BiRightArrowCircle } from "react-icons/bi";

const NavButton = ({ id, cls, data }) => {
  return (
    <>
      <div className={`${cls} flex flex-col py-2 px-3`}>
        {/* top side  */}
        <div className="flex flex-row justify-between items-center">
          {/* top left side  */}
          <div>{data}</div>
          {/* top right side  */}
          <div>icon</div>
        </div>
        {/* bottom side  */}
        <div className="flex justify-center items-center flex-row">
            <span> More Info</span>
            <span>
              <BiRightArrowCircle />
            </span>
        </div>
      </div>
    </>
  );
};

export default NavButton;
