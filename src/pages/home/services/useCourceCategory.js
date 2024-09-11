import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useCourceCategory = () => {
  return useQuery({
    queryKey: ["getCourcesCategories"],
    queryFn: () => request.get("categories/list").then((res) => res.data),
  });
};

export default useCourceCategory;
