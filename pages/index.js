import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../components/dashboard/Home";
const index = () => {
  return (
    <>
      <Layout title={"Inventory | Home"}>
        <Home />
      </Layout>
    </>
  );
};

export default index;
