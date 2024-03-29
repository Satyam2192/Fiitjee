import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseDetails() {
  return (
    <div className="bg-[#d1e9f9] py-10">
      <div className="flex items-center justify-center w-screen">
        <div className="max-w-6xl p-8 mx-4 border shadow-xl md:mx-auto bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl my-10">
          <h1 className="mb-6 text-3xl font-bold text-[#1c1950]">Course Details</h1>
          <hr className="mb-6 border-gray-400" />
          <div className="flex mb-6">
            <h2 className="flex-shrink-0 mr-12 text-2xl font-bold border-r pr-14" style={{ color: "#1c1950" }}>
              Class Schedule
            </h2>
            <div className="flex-grow pl-6 mb-5 font-mono text-xl text-gray-700" style={{ color: "#1c1950" }}>
              <i className="far fa-calendar"></i> <strong> 12 To 14 Hrs/Week By Founders & Their Core Team</strong>
            </div>
          </div>
          <div className="flex flex-col mb-6 md:flex-row">
            <h2 className="flex-shrink-0 mr-12 text-2xl font-bold border-r pr-14" style={{ color: "#1c1950" }}>
              Study  Content
            </h2>
            <div className="flex-grow mb-4">
              <ul className="pl-8 list-unstyled ">
                <li className="mb-2 font-mono text-xl" style={{ color: "#1c1950" }}><strong>Comprehensive Study Material</strong></li>
                <li className="mb-2 font-mono text-lg" style={{ color: "#1c1950" }}>
                  Comprehensive Study Material Physics - 6 Modules + 6 Workbooks
                  Chemistry - 6 Modules + 6 Workbooks Mathematics - 6 Modules +
                  6 Workbooks Solutions - Modules 6(PC) and Workbooks 6(PCM) Final
                  Step - (Revision Package) - 5 Books and 5 Solutions
                </li>
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}><strong>Recordings Of Live Classes & Class Notes (PDF)</strong></li>
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}><strong>Live Quiz</strong></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mb-6 md:flex-row">
            <h2 className="flex-shrink-0 mr-12 text-2xl font-bold border-r pr-14" style={{ color: "#1c1950" }}>
              Comprehensive <br /> Practise & <br /> Assesment
            </h2>
            <div className="flex-grow mb-4 text-xl">
              <ul className="pl-4 list-unstyled">
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}>Non Academic Mentors</li>
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}>Recorded School Support Classes</li>
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}>
                  Students Practice And Check Their Performance Through Workbooks
                  Which Have Practice Questions And Last Year Sample Papers,
                  Carefully Selected Over 20 Years
                </li>
                <li className="mb-2 font-mono" style={{ color: "#1c1950" }}>Chat Based Interaction In The Class</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div
          className="w-full max-w-6xl p-8 mx-4 shadow-2xl md:mx-auto bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl">
          <h1 className="mb-6 text-3xl font-bold">Payment Plans</h1>
          <hr className="mb-6 border-gray-400" />

          <div
            className="items-start p-8 shadow-2xl w-96 rounded-2xl bg-gradient-to-b from-gray-300 to-gray-50"
            style={{ color: "#fff", background: "#1f1e5a" }}
          >

            <div>
              <h1 className="mb-6 text-2xl font-bold ">
                Course Package
              </h1>
              <div className="flex justify-between mt-6">
                <div>
                  <p className="text-sm">Actual Fee</p>
                  <div className="flex gap-4 items-cetner">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-xl font-bold line-through text-thin">$1,000</h2>
                      <h2 className="text-xl font-bold text-thin">$890</h2>
                      <p className="text-[10px]">Excluded GST*</p>
                    </div>
                    <div className="bg-[#17a2b8] p-1 rounded text-center text-[12px]">
                      Save 11%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 mt-5 font-bold text-white bg-yellow-400 rounded" >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
