import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Api } from "@/domain/api/Api";
import MainLayout from "@/layouts/main-layout";
import { DND_ROUTES } from "@/utils/requests";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const init = async () => {
    const data = await Api.getSomething(DND_ROUTES.SPELLS.ALL_SPELLS);
    setData(data);
  };

  useEffect(() => {
    init().catch(console.error);
  }, []);
  return <MainLayout>{JSON.stringify(data, null, 4)}</MainLayout>;
};

export default Home;
