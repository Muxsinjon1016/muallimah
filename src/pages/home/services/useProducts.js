import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: () => request.get("/products/list").then((res) => res.data),
  });
};

export default useBooks;
