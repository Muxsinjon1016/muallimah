import React from 'react';


export default function Main() {
  return (
    <div className='main-container w-full max-w-[1440px] h-auto text-center relative mx-auto my-0'>
      <div className='relative bg-[#00235a] h-[559px] w-full'>
        <h1 className="text-white font-['Lobster'] text-[48px] mt-10 z-[1]">
          Free Online Language Courses
        </h1>
      </div>

      <div className='absolute top-[134px] left-1/2 transform -translate-x-1/2 bg-white w-[90%] max-w-[1242px] h-auto p-8 rounded-[20px] z-[2] shadow-lg'>
        <h2 className="text-[#ff4756] font-['Lobster'] text-[36px] mb-4">
          250+ Free online courses
        </h2>
        <p className="text-[#00235a] font-['Manrope'] text-[16px] leading-[24px] mb-6">
          This course is for self-disciplined, hard-working and ambitious
          students. Learn English with the Muallimah any time, anywhere and become
          fluent in English.
        </p>
        <button className='bg-[#00235a] text-white py-2 px-8 rounded hover:bg-[#001c4e] transition'>
          Learn free
        </button>
      </div>

      {/* Rounded circle icons */}
      <div className='absolute bottom-0 left-[50%] transform -translate-x-1/2 flex space-x-4 mb-4 z-[7]'>
        <div className='w-[20px] h-[20px] bg-[url(../assets/images/30b68f7c-be12-4270-b493-375d3bba0c8d.png)] bg-cover rounded-full' />
        <div className='w-[14px] h-[14px] bg-[url(../assets/images/eb6968ad-5136-488b-93ee-6a4a2fce0fb1.png)] bg-cover rounded-full' />
        <div className='w-[14px] h-[14px] bg-[url(../assets/images/974afa59-c153-430e-9c6e-bcb4e0f5e844.png)] bg-cover rounded-full' />
      </div>
    </div>
  );
}
