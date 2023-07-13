import { useState } from "react";
import "../styles/Course.css";
import CourseDetails from "./CourseDetails";

function Course() {
  const [table1Data] = useState([
    { column1: "Admission Mode", column2: "Entrance Test: IQPT, IEMT, ISAT" },
    { column1: "Course Code", column2: "Beginner" },
    { column1: "Commencement Date", column2: "1st Week of April." },
    { column1: "Phases", column2: "2 Phases 6 months each" },
    {
      column1: "Frequency of Classes / SDCC",
      column2:
        "Saturday, Sunday and School holidays 3 to 4 hours on each day. student are free to clarify their doubts from our faculties in the special doubt clearing classes which are conducted regularly.",
    },
  ]);

  const logTableValues = (tableData) => {
    const column2Values = tableData.map((row) => row.column2);
    console.log(column2Values);
  };


  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mb-10">

        <div className="md:w-1/4">
          <div className="box-group">
            <div className="box font-bold yellow-size bg-yellow-400 box1 small-height">
              <span className="box-content">7</span>
            </div>
            <div className="mt-1 font-bold box2">
              <span className="box-content blue-box">BEGINNER</span>
            </div>
          </div>
        </div>

        <div className="md:w-3/4 border-[1px] border-black/20">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-danger py-2 text-white bg-red-500 text-center" colSpan={2}>
                      Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index}>
                      <td className="font-bold mt-5 px-4 py-1">{row.column1}</td>
                      <td>{row.column2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button className="bg-yellow-400 mt-5 mx-4 py-2 px-4 rounded-[4px] border border-[#1f1d5a]" onClick={() => <CourseDetails/>} >
                  Registrations
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="md:w-1/4">
          <div className="box-group">
            <div className="box font-bold yellow-size bg-yellow-400 box1 small-height">
              <span className="box-content">7</span>
            </div>
            <div className="mt-1 font-bold box2">
              <span className="box-content blue-box">BEGINNER</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-danger text-white bg-red-500 w-3 text-center" colSpan={2}>
                      Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index}>
                      <td className="font-bold mt-5">{row.column1}</td>
                      <td>{row.column2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button className="bg-yellow-400 mt-5 me-5" onClick={() => <CourseDetails/>}>
                  Registrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="md:w-1/4">
          <div className="box-group">
            <div className="box font-bold yellow-size bg-yellow-400 box1 small-height">
              <span className="box-content">7</span>
            </div>
            <div className="mt-1 font-bold box2">
              <span className="box-content blue-box">BEGINNER</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-danger text-white bg-red-500 text-center" colSpan={2}>
                      Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index}>
                      <td className="font-bold mt-5">{row.column1}</td>
                      <td>{row.column2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button className="bg-yellow-400 mt-5 me-5" onClick={() => logTableValues(table1Data)}>
                  Registrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="md:w-1/4">
          <div className="box-group">
            <div className="box font-bold yellow-size bg-yellow-400 box1 small-height">
              <span className="box-content">7</span>
            </div>
            <div className="mt-1 font-bold box2">
              <span className="box-content blue-box">BEGINNER</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-danger text-white bg-red-500 text-center" colSpan={2}>
                      Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index}>
                      <td className="font-bold mt-5">{row.column1}</td>
                      <td>{row.column2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button className="bg-yellow-400 mt-5 me-5" onClick={() => logTableValues(table1Data)}>
                  Registrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="md:w-1/4">
          <div className="box-group">
            <div className="box font-bold yellow-size bg-yellow-400 box1 small-height">
              <span className="box-content">7</span>
            </div>
            <div className="mt-1 font-bold box2">
              <span className="box-content blue-box">BEGINNER</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="row mb-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-danger text-white bg-red-500 text-center" colSpan={2}>
                      Olympaids: IOQJS, INAO, IAO, NSO, NSEJS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1Data.map((row, index) => (
                    <tr key={index}>
                      <td className="font-bold mt-5">{row.column1}</td>
                      <td>{row.column2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                <button className="bg-yellow-400 mt-5 me-5" onClick={() => logTableValues(table1Data)}>
                  Registrations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ╬
    </div>
  );
}

export default Course;
