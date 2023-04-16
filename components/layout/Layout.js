import Head from "next/head";


const Layout = ({title, children}) => {
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
      <main className="bg-[#ebf8fe] dark:bg-slate-700">{children}</main>
    </>
  );
}

export default Layout
