import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseDetails() {
  return (
    <div>
    <div className="flex items-center justify-center w-screen">
      <div className="max-w-6xl mx-4 md:mx-auto p-8 bg-gradient-to-b from-gray-100 to-gray-50 shadow-2xl rounded-2xl">
        <h1 className="text-5xl font-bold mb-6">Course Details</h1>
        <hr className="border-gray-400 mb-6" />
        <div className="flex mb-6">
          <h2 className="border-r pr-14 mr-12 font-bold  text-3xl flex-shrink-0" style={{color : "#1c1950"}}>
            Class Schedule
          </h2>
          <div className="flex-grow text-2xl pl-12 mr-7 font-mono text-gray-700 mb-10 "  style={{color: "#1c1950"}}>
            <i className="far fa-calendar"></i> <strong> 12 To 14 Hrs/Week By Founders & Their Core Team</strong>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6">
          <h2 className="border-r pr-14 mr-12 font-bold  text-3xl flex-shrink-0" style={{color : "#1c1950"}}>
            Study  Content
          </h2>
          <div className="flex-grow text-2xl mb-4">
            <ul className="list-unstyled pl-8 ">
              <li className="mb-2 font-mono " style={{color: "#1c1950"}}><strong>Comprehensive Study Material</strong></li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}>
                Comprehensive Study Material Physics - 6 Modules + 6 Workbooks
                Chemistry - 6 Modules + 6 Workbooks Mathematics - 6 Modules +
                6 Workbooks Solutions - Modules 6(PC) and Workbooks 6(PCM) Final
                Step - (Revision Package) - 5 Books and 5 Solutions
              </li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}><strong>Recordings Of Live Classes & Class Notes (PDF)</strong></li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}><strong>Live Quiz</strong></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6">
          <h2 className="border-r pr-14 mr-12 font-bold  text-3xl flex-shrink-0" style={{color : "#1c1950"}}>
            Comprehensive <br /> Practise & <br /> Assesment
          </h2>
          <div className="flex-grow text-2xl mb-4">
            <ul className="list-unstyled pl-4">
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}>Non Academic Mentors</li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}>Recorded School Support Classes</li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}>
                Students Practice And Check Their Performance Through Workbooks
                Which Have Practice Questions And Last Year Sample Papers,
                Carefully Selected Over 20 Years
              </li>
              <li className="mb-2 font-mono" style={{color: "#1c1950"}}>Chat Based Interaction In The Class</li>
            </ul>
          </div>
        </div>
      </div>
      </div>


      <div className=" mt-8">
  <div className="max-w-6xl mx-4 w-full md:mx-auto p-8 bg-gradient-to-b from-gray-100 to-gray-50 shadow-2xl rounded-2xl">
    <h1 className="text-5xl font-bold mb-6">Payment Plans</h1>
    <hr className="border-gray-400 mb-6" />
    <div
      className="max-w-6xl items-start mx-4 md:mx-auto p-16 w-96 rounded-2xl bg-gradient-to-b from-gray-300 to-gray-50 shadow-2xl"
      style={{ color: "#fff", background: "#1f1e5a" }}
    >
      <div style={{ width: 200, borderRadius: 10 }}>
        <h1 className="text-3xl font-bold mb-6 mx-14 w-24" style={{ color: "#fff", lineHeight: 1.2 }}>
          Course Package
        </h1>
        <div className="flex justify-between mt-6">
          <div>
            <h2 className="text-xl font-bold text-thin">$1,000</h2>
            <p className="text-sm">Actual Fee</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-thin">$890</h2>
            <p className="text-sm" style={{ background: "#17a2b8" }}>
              Save 11%
            </p>
          </div>
        </div>
      </div>
      <button className="px-6 py-2 bg-primary text-white font-bold" style={{ background: "#ffca08" }}>
        Pay Now
      </button>
    </div>
  </div>
</div>


    </div>
  );
}

export default CourseDetails;
