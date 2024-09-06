import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

import React from "react";

export const useAmount = () => {
  return useQuery({
    queryKey: ["getAmount"],
    queryFn: () => request.get("/statistika").then((res) => res.data),
  });
};

export default useAmount;
