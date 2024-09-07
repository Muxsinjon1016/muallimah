import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useBanner = () => {
  return useQuery({
    queryKey: ["getBanners"],
    queryFn: () => request.get("/banner").then((res) => res.data),
  });
};

export default useBanner;
