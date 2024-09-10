import React from "react";
import CountUp from "react-countup";

export const Amount = () => {
  return (
    <div className="container my-10">
      <div className="flex items-center flex-wrap justify-evenly">
        <div className="relative pt-14 text-center w-[135px] h-[160px] bg-no-repeat">
          <img className="absolute -z-10 top-0" src="amountBg.svg" alt="img" />
          <CountUp
            end={15}
            suffix="+"
            className="text-white  font-secondFamily font-semibold text-2xl"
          />
          <p className="text-sm text-center mt-10 text-blue-900 font-semibold">
            Years of experience
          </p>
        </div>
        <div className="relative pt-14 text-center w-[135px] h-[160px] bg-no-repeat">
          <img className="absolute -z-10 top-0" src="amountBg.svg" alt="img" />
          <CountUp
            end={300}
            suffix="+"
            className="text-white font-secondFamily font-semibold text-2xl"
          />
          <p className="text-sm text-center mt-10 text-blue-900 font-semibold">
            Students
          </p>
        </div>

        <div className="relative pt-14 text-center w-[135px] h-[160px] bg-no-repeat">
          <img className="absolute -z-10 top-0" src="amountBg.svg" alt="img" />
          <CountUp
            end={1}
            suffix="M+"
            className="text-white font-secondFamily font-semibold text-2xl"
          />
          <p className="text-sm text-center mt-10 text-blue-900 font-semibold">
            Views
          </p>
        </div>

        <div className="relative pt-14 text-center w-[135px] h-[160px] bg-no-repeat">
          <img className="absolute -z-10 top-0" src="amountBg.svg" alt="img" />
          <CountUp
            end={100}
            suffix="K+"
            className="text-white font-secondFamily font-semibold text-2xl"
          />
          <p className="text-sm text-center mt-10 text-blue-900 font-semibold">
            Students worldwide
          </p>
        </div>

        <div className="relative pt-14 text-center w-[135px] h-[160px] bg-no-repeat">
          <img className="absolute -z-10 top-0" src="amountBg.svg" alt="img" />
          <CountUp
            end={10}
            suffix="+"
            className="text-white font-secondFamily font-semibold text-2xl"
          />
          <p className="text-sm text-center mt-10 text-blue-900 font-semibold">
            Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amount;
