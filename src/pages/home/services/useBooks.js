import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  return useQuery({
    queryKey: ["getBooks"],
    queryFn: () => request.get("/books/list").then((res) => res.data),
  });
};

export default useBooks;
