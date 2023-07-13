import React from "react";

function OurMission() {
  return (
    <div className="bg-[#f1f106] flex flex-row items-center justify-center  p-10">
      <div className="w-[300px] h-[410px]  mx-auto bg-white rounded-xl shadow-md overflow-hidden  m-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className=" w-full object-cover md:w-48" src="https://www.vidyamandir.com/assets/images/v1.jpg" alt="Founder 1" />
          </div>
          <div className="p-8">
            <p className=" text-center mt-1 text-sm leading-tight font-medium text-black">
              To help students EXCEED their potential while creating awakened
              citizens who will take the nation forward and make the world a
              better place
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto overflow-hidden  m-4">
        <img className="h-[400px] w-full object-cover md:w-full" src="https://png.pngtree.com/png-vector/20220512/ourmid/pngtree-mission-vision-business-concept-corporate-png-image_4594785.png" alt="Banner" />
      </div>
      <div className=" w-[300px] h-[410px]  mx-auto bg-white rounded-xl shadow-md overflow-hidden  m-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className=" w-full object-cover md:w-48" src="https://www.vidyamandir.com/assets/images/m1.jpg" alt="Founder 2" />
          </div>
          <div className="p-8">
            <p className="text-center mt-1 text-sm leading-tight font-medium text-black">
              To become the first preference for all 
              students regarding their preparation
              for all competitive &amp; scholastic exams. As a{" "}
              <b className="font-bold">GURU</b>, to continuously foster intellectual curiosity,
              develop critical thinking, and enable the pursuit of excellence in
              all educational endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;