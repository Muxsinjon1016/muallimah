import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbackData = [
  {
    id: 1,
    img1: "google_icon.png",
    title: "Axmadjon Axmadjanov",
    text: "Oldingi My grammar notes#1 da o'qiganimda darslarda Uyga vazifa ko'p berilardi va bularni bajarish uchun vaqt kam berilardi. Asosan biz o'zimiz qattiq harakat qilishimiz kerak bo'lardi. Darslar tez o'tilardi. Speaking ga unchalik ko'p etibor bermasdik. Ko'proq urg'u grammar ga qaratilardi. Hozirgi Men o'qiyotgan My grammar notes#3 oldingisidan tubdan farq qiladi. Darslar sifatli va tushunarli. Londa va o'rtacha tezlikda o'tiladi. Vazifalar ham ko'p emas va ularni bajarish uchun vaqt yetarli. Hozirgi kursimizda faqat grammarga etibor qaratmasdan speaking ga juda ham katta urg'u berilmoqda. Writing reading ayniqsa pronunciation ga ham e'tibor kuchli. Xulosa qilib aytganda hozirgi My grammar notes#3 kursimiz asosan grammar ga tashkil qilingan bo'lsada unda talabalar grammar bilimlarini mustahkamlab balki speaking writing ko'nikmalarini ham oshirishlari mumkin.",
    img: "feedback.png",
  },
  {
    id: 2,
    img1: "google_icon.png",
    title: "Axmadjon Axmadjanov",
    text: "Oldingi My grammar notes#1 da o'qiganimda darslarda Uyga vazifa ko'p berilardi va bularni bajarish uchun vaqt kam berilardi. Asosan biz o'zimiz qattiq harakat qilishimiz kerak bo'lardi. Darslar tez o'tilardi. Speaking ga unchalik ko'p etibor bermasdik. Ko'proq urg'u grammar ga qaratilardi.Hozirgi Men o'qiyotgan My grammar notes#3 oldingisidan tubdan farq qiladi. Darslar sifatli va tushunarli. Londa va o'rtacha tezlikda o'tiladi. Vazifalar ham ko'p emas va ularni bajarish uchun vaqt yetarli. Hozirgi kursimizda faqat grammarga etibor qaratmasdan speaking ga juda ham katta urg'u berilmoqda. Writing reading ayniqsa pronunciation ga ham e'tibor kuchli. Xulosa qilib aytganda hozirgi My grammar notes#3 kursimiz asosan grammar ga tashkil qilingan bo'lsada unda talabalar grammar bilimlarini mustahkamlab balki speaking writing ko'nikmalarini ham oshirishlari mumkin.",
    img: "feedback.png",
  },
  {
    id: 3,
    img1: "google_icon.png",
    title: "Axmadjon Axmadjanov",
    text: "Oldingi My grammar notes#1 da o'qiganimda darslarda Uyga vazifa ko'p berilardi va bularni bajarish uchun vaqt kam berilardi. Asosan biz o'zimiz qattiq harakat qilishimiz kerak bo'lardi. Darslar tez o'tilardi. Speaking ga unchalik ko'p etibor bermasdik. Ko'proq urg'u grammar ga qaratilardi.Hozirgi Men o'qiyotgan My grammar notes#3 oldingisidan tubdan farq qiladi. Darslar sifatli va tushunarli. Londa va o'rtacha tezlikda o'tiladi. Vazifalar ham ko'p emas va ularni bajarish uchun vaqt yetarli. Hozirgi kursimizda faqat grammarga etibor qaratmasdan speaking ga juda ham katta urg'u berilmoqda. Writing reading ayniqsa pronunciation ga ham e'tibor kuchli. Xulosa qilib aytganda hozirgi My grammar notes#3 kursimiz asosan grammar ga tashkil qilingan bo'lsada unda talabalar grammar bilimlarini mustahkamlab balki speaking writing ko'nikmalarini ham oshirishlari mumkin.",
    img: "feedback.png",
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === feedbackData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? feedbackData.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-[#00235a] py-14 flex items-center justify-center">
      <p className="absolute top-0 left-0 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-secondFamily text-white pt-[20px] md:pt-[30px] lg:pt-[35px]">
        Feedback
      </p>

      <button
        onClick={prevSlide}
        className="absolute w-[50px] h-[50px] rounded-lg bg-white z-10 text-2xl text-gray-400 left-2 md:text-3xl lg:text-4xl"
        style={{ boxShadow: "10px 0px 30px 0 rgba(0,35,90,0.05)" }}
      >
        {"<"}
      </button>

      <div className="relative w-full h-auto px-4 -mt-3 overflow-hidden md:mt-10 md:px-8 lg:px-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={feedbackData[index].id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full"
          >
            <div className="max-w-[1100px] mx-auto h-auto rounded-[10px] mt-10 bg-gray-50 flex flex-col-reverse md:flex-row items-start justify-between text-center md:text-left p-6">
              <img
                src={feedbackData[index].img1}
                alt="Google icon"
                className="w-16 h-auto hidden md:block"
              />
              <div className="p-[20px] md:px-[44px] md:py-[30px]">
                <h1 className="text-2xl font-bold text-left text-[#ff4756]">
                  {feedbackData[index].title}
                </h1>
                <p className="w-full md:w-[450px] lg:w-[499px] text-sm md:text-base mt-[15px] md:mt-[26px] mb-[18px] md:mb-[56px] text-[#00235a]">
                  {feedbackData[index].text}
                </p>
              </div>
              <div
                className="mt-32 justify-center mb-4 md:mt-25 p-10 w-72 h-[261px] rounded-lg bg-white"
                style={{ boxShadow: "0px 20px 40px -5px rgba(0,0,0,0.04)" }}
              >
                <img
                  src={feedbackData[index].img}
                  alt="feedback"
                  className="w-[200px] md:w-[300px] lg:w-[600px] h-auto"
                />
                <p className="w-[238px] text-xl font-semibold pt-4 pl-4 text-left text-[#00235a]">
                  My Grammar Notes
                </p>
                <div className="flex items-center w-24 h-5 gap-1 mt-2 ml-4">
                  <p className="left-[983px] top-[4812px] text-sm font-semibold text-left text-[#00235a]">
                    4,5
                  </p>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5 top-[4817px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_1715_3354)">
                      <path
                        d="M9.73465 3.5797L6.66048 3.11012L5.28256 0.175117C5.17965 -0.0440495 4.82006 -0.0440495 4.71715 0.175117L3.33965 3.11012L0.265479 3.5797C0.0129788 3.61845 -0.0878545 3.92553 0.0892288 4.10678L2.32256 6.39595L1.79465 9.6322C1.75256 9.88929 2.02715 10.0822 2.25423 9.95595L5.00006 8.43845L7.7459 9.95637C7.9709 10.0814 8.24798 9.8922 8.20548 9.63262L7.67756 6.39637L9.9109 4.1072C10.088 3.92553 9.98673 3.61845 9.73465 3.5797Z"
                        fill="#FFC107"
                      />
                    </g>
                    <defs>
                      <clippath id="clip0_1715_3354">
                        <rect width={10} height={10} rx={5} fill="white" />
                      </clippath>
                    </defs>
                  </svg>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5 top-[4817px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_1715_3356)">
                      <path
                        d="M9.73465 3.5797L6.66048 3.11012L5.28256 0.175117C5.17965 -0.0440495 4.82006 -0.0440495 4.71715 0.175117L3.33965 3.11012L0.265479 3.5797C0.0129788 3.61845 -0.0878545 3.92553 0.0892288 4.10678L2.32256 6.39595L1.79465 9.6322C1.75256 9.88929 2.02715 10.0822 2.25423 9.95595L5.00006 8.43845L7.7459 9.95637C7.9709 10.0814 8.24798 9.8922 8.20548 9.63262L7.67756 6.39637L9.9109 4.1072C10.088 3.92553 9.98673 3.61845 9.73465 3.5797Z"
                        fill="#FFC107"
                      />
                    </g>
                    <defs>
                      <clippath id="clip0_1715_3356">
                        <rect width={10} height={10} rx={5} fill="white" />
                      </clippath>
                    </defs>
                  </svg>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5 top-[4817px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_1715_3358)">
                      <path
                        d="M9.73465 3.5797L6.66048 3.11012L5.28256 0.175117C5.17965 -0.0440495 4.82006 -0.0440495 4.71715 0.175117L3.33965 3.11012L0.265479 3.5797C0.0129788 3.61845 -0.0878545 3.92553 0.0892288 4.10678L2.32256 6.39595L1.79465 9.6322C1.75256 9.88929 2.02715 10.0822 2.25423 9.95595L5.00006 8.43845L7.7459 9.95637C7.9709 10.0814 8.24798 9.8922 8.20548 9.63262L7.67756 6.39637L9.9109 4.1072C10.088 3.92553 9.98673 3.61845 9.73465 3.5797Z"
                        fill="#FFC107"
                      />
                    </g>
                    <defs>
                      <clippath id="clip0_1715_3358">
                        <rect width={10} height={10} rx={5} fill="white" />
                      </clippath>
                    </defs>
                  </svg>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5 top-[4817px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_1715_3360)">
                      <path
                        d="M9.73465 3.5797L6.66048 3.11012L5.28256 0.175117C5.17965 -0.0440495 4.82006 -0.0440495 4.71715 0.175117L3.33965 3.11012L0.265479 3.5797C0.0129788 3.61845 -0.0878545 3.92553 0.0892288 4.10678L2.32256 6.39595L1.79465 9.6322C1.75256 9.88929 2.02715 10.0822 2.25423 9.95595L5.00006 8.43845L7.7459 9.95637C7.9709 10.0814 8.24798 9.8922 8.20548 9.63262L7.67756 6.39637L9.9109 4.1072C10.088 3.92553 9.98673 3.61845 9.73465 3.5797Z"
                        fill="#FFC107"
                      />
                    </g>
                    <defs>
                      <clippath id="clip0_1715_3360">
                        <rect width={10} height={10} rx={5} fill="white" />
                      </clippath>
                    </defs>
                  </svg>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2.5 h-2.5 top-[4817px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_1715_3362)">
                      <path
                        d="M7.7459 9.95637L5.00006 8.43845L2.25423 9.95595C2.02715 10.0822 1.75256 9.88929 1.79465 9.6322L2.32256 6.39595L0.0892288 4.10678C-0.0878545 3.92553 0.0129788 3.61845 0.265479 3.5797L3.33965 3.11012L4.71715 0.175117C4.82006 -0.0440495 5.17965 -0.0440495 5.28256 0.175117L6.66048 3.11012L9.73465 3.5797M7.7459 9.95637L9.73188 3.9327L7.49862 6.22179L7.41051 6.3121L7.43082 6.43662L7.95874 9.67287L7.95876 9.67301C7.96136 9.68888 7.95886 9.69971 7.95524 9.70775C7.95115 9.71683 7.9438 9.72613 7.93315 9.73355C7.91174 9.74845 7.88855 9.74963 7.86731 9.73783L7.86685 9.73757L5.12101 8.21966L5.00008 8.1528L4.87914 8.21964L2.1333 9.73714L2.13275 9.73745C2.08864 9.76197 2.033 9.72369 2.04136 9.67259L2.04138 9.67245L2.5693 6.4362L2.58961 6.31168L2.50151 6.22137L0.268174 3.9322L0.268049 3.93208C0.232339 3.89552 0.25321 3.83459 0.303303 3.82682C0.303336 3.82682 0.303369 3.82681 0.303401 3.82681L3.3774 3.35725L3.50928 3.33711L3.56596 3.21633L4.94344 0.28138C4.94344 0.281374 4.94344 0.281368 4.94345 0.281362C4.94345 0.281353 4.94345 0.281344 4.94346 0.281334C4.94448 0.27918 4.94661 0.275458 4.95495 0.270871C4.96463 0.265544 4.98038 0.260742 4.99985 0.260742C5.01933 0.260742 5.03507 0.265544 5.04476 0.270871C5.05313 0.275477 5.05525 0.279211 5.05626 0.281361M7.7459 9.95637C7.9709 10.0814 8.24798 9.8922 8.20548 9.63262M7.7459 9.95637L8.20548 9.63262M9.73465 3.5797L9.69666 3.8268L6.62273 3.35725L6.49087 3.33711L6.43418 3.21636L5.05627 0.28138M9.73465 3.5797L9.6969 3.82683L9.69671 3.82681C9.74645 3.83449 9.76792 3.89561 9.73195 3.93262L9.9109 4.1072M9.73465 3.5797C9.98673 3.61845 10.088 3.92553 9.9109 4.1072M5.05627 0.28138L5.28254 0.175126L5.05626 0.281361M5.05627 0.28138C5.05627 0.281374 5.05626 0.281367 5.05626 0.281361M5.05627 0.28138L5.05626 0.281361M9.9109 4.1072L7.67756 6.39637M9.9109 4.1072L7.67756 6.39637M7.67756 6.39637L8.20548 9.63262M7.67756 6.39637L8.20548 9.63262"
                        stroke="#FFC107"
                        stroke-width="0.5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.71715 0.175117C4.76863 0.0654877 4.88433 0.0106961 5 0.0107422V8.43849L2.25423 9.95595C2.02715 10.0822 1.75256 9.88929 1.79465 9.6322L2.32256 6.39595L0.0892288 4.10678C-0.0878545 3.92553 0.0129788 3.61845 0.265479 3.5797L3.33965 3.11012L4.71715 0.175117Z"
                        fill="#FFC107"
                      />
                    </g>
                    <defs>
                      <clippath id="clip0_1715_3362">
                        <rect width={10} height={10} rx={5} fill="white" />
                      </clippath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextSlide}
        className="absolute z-10 text-2xl text-gray-400 right-2 md:text-3xl lg:text-4xl w-[50px] h-[50px] rounded-lg bg-white"
        style={{ boxShadow: "-10px 0px 30px 0 rgba(0,35,90,0.05)" }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Feedback;
