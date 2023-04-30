import Head from "next/head";
import Sidebar from "../dashboard/sidebar/Sidebar";
import NavTitle from "../dashboard/nav_button/NavTitle";
import { useRouter } from "next/router";


const Layout = ({title, children}) => {
  const { route } = useRouter();
  console.log(route)
  return (
    <>
      <Head>
        {/* title  */}
        <title>{title}</title>
        {/* favicon  */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.ibb.co/bXLsPMg/6840478.png"
        ></link>
      </Head>
      <main className="bg-[#ebf8fe] dark:bg-slate-700 flex gap-6">
        {route !== "/login" ? (
          <>
            <Sidebar />
            <section className="my-6 px-2 md:px-6 font-semibold w-full">
              {/* dashboard title  */}
              <NavTitle />
              {children}
            </section>
          </>
        ) : (
          <div>{children}</div>
        )}
      </main>
    </>
  );
}

export default Layout
