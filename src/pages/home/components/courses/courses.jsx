import React from "react";
import { useCources } from "../../services/useCources";

export const Courses = () => {
  const { data } = useCources();

  console.log(data);
  return (
    <>
      <div>
        <div>top</div>
        {data?.map((item) => {
          return (
            <>
              <div key={item.id}>
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })}
        <div>bottom</div>
      </div>
    </>
  );
};

export default Courses;
