import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ["getBlogCategories"],
    queryFn: () => request.get("/categories/list").then((res) => res.data),
  });
};

export default useBlogCategories;
