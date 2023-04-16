import { useState } from "react";
import Layout from "../components/layout/Layout";
import { MdInvertColors } from "react-icons/md";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email : ${email} and password ${password}`);
    router.push("/")
  };
  return (
    <>
      <Layout title={"Inventory | Sign In"}>
        <main className="w-screen h-screen flex justify-center items-center flex-col bg-blue-100">
          <div className="w-full max-w-lg">
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
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <button disabled className="border mt-3 border-blue-400 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Google Sign In
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 Acme Corp. All rights reserved.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Login;
