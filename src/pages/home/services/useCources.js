import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useCources = () => {
  return useQuery({
    queryKey: ["getCources"],
    queryFn: () => request.get("/course/list").then((res) => res.data),
  });
};

export default useCources;
