import { restApi } from "@/utils/axios";

export class Api {
  public static get = async (route: string) => {
    const { data } = await restApi.get(route);
    return data;
  };
}
