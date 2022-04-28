import { restApi } from "@/utils/axios";

export class Api {
  public static getSomething = async (route: string) => {
    const { data } = await restApi.get<unknown>(route);
    return data;
  };
}
