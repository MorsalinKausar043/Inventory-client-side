import { useDispatch } from "react-redux";
import { modelEvent } from "../../../features/filter/filterSlice";
import { MdInvertColors } from "react-icons/md";

const Model = () => {
  const dispatch = useDispatch();
  // handle submit data
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <form
          onSubmit={handleSubmit}
          className="relative min-w-min my-6 mx-auto max-w-7xl"
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h1 className="text-2xl flex justify-center items-center flex-row font-bold text-blue-400 drop-shadow-lg shadow-blue-400/30">
                <span className="text-4xl">
                  <MdInvertColors />
                </span>
                <span className="text-blue-400">Inventory</span>
              </h1>
              <span className="text-sm text-gray-500 font-semibold">
                Add a new product
              </span>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="w-full">
                {/* product name --------------------->  */}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-2/6 ">
                    <label
                      className="text-start text-semibold text-md text-gray-500 "
                      htmlFor="inline-full-name"
                    >
                      Product Name:
                    </label>
                  </div>
                  <div className="md:w-4/6">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      placeholder="Enter Product Name"
                      required
                    />
                  </div>
                </div>
                {/* product Quantity --------------------->  */}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-2/6 ">
                    <label
                      className="text-start text-semibold text-md text-gray-500 "
                      htmlFor="inline-full-name"
                    >
                      Product Quantity:
                    </label>
                  </div>
                  <div className="md:w-4/6">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      placeholder="Enter Product Quantity"
                      required
                    />
                  </div>
                </div>
                {/* product Rate --------------------->  */}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-2/6 ">
                    <label
                      className="text-start text-semibold text-md text-gray-500 "
                      htmlFor="inline-full-name"
                    >
                      Product Rate:
                    </label>
                  </div>
                  <div className="md:w-4/6">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      placeholder="Enter Product Rate"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(modelEvent(false))}
              >
                Cancel
              </button>
              <button
                className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Model;
