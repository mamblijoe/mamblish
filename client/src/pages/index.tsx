import type { NextPage } from "next";
import MyComponent from "@/components/__functionalComponent";
import MainLayout from "@/layouts/main-layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <MyComponent />
    </MainLayout>
  );
};

export default Home;
