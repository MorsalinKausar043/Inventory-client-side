import { useState } from "react";
import Layout from "../components/layout/Layout";
import { MdInvertColors } from "react-icons/md";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passToggle, setPassToggle] = useState(false);
  const router = useRouter();
  // submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email : ${email} and password ${password}`);
    router.push("/");
  };
  return (
    <>
      <Layout title={"Inventory | Sign In"}>
        <main className="w-screen h-screen flex justify-center items-center flex-col bg-blue-100">
          <div className="w-full max-w-lg px-2 md:px-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg shadow-blue-100/20 px-8 pt-6 pb-8 mb-4"
            >
              {/* form title  */}
              <div className="mb-4 text-center">
                <h1 className="text-2xl flex justify-center items-center flex-row font-bold text-blue-400 drop-shadow-lg shadow-blue-400/30">
                  <span className="text-4xl">
                    <MdInvertColors />
                  </span>
                  <span className="text-blue-400">Inventory</span>
                </h1>
                <p className="mt-2 text-sm text-gray-400">
                  Your Social Campaigns
                </p>
              </div>
              {/* user email field  */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  User Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Inter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              {/* user password field  */}
              <div className="mb-6 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`shadow appearance-none border ${
                    password ? "border-sky-500" : "border-red-500"
                  } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="password"
                  type={passToggle ? "text" : "password"}
                  placeholder="******************"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {/* show hide icon  */}
                <div
                  onClick={() => setPassToggle(!passToggle)}
                  className="absolute right-5 top-[50%] cursor-pointer"
                >
                  <span className="inline-block text-lg drop-shadow-lg shadow-gray-400/60 hover:text-blue-500 transition">
                    {passToggle ? <BiShowAlt /> : <BiHide />}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <button
                  disabled
                  title="google auth not available"
                  className="border mt-3 border-blue-400 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Google Sign In
                </button>
              </div>
            </form>
            <p
              className="
              text-center
             text-gray-500 text-xs
             "
            >
              &copy;2023 Acme Corp. All rights reserved.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Login;
