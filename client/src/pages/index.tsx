import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MyComponent from "@/components/__functionalComponent";

const Home: NextPage = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default Home;
