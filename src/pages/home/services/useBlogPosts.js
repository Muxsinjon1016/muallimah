import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["getBlogPosts"],
    queryFn: () => request.get("/posts").then((res) => res.data),
  });
};

export default useBlogPosts;
