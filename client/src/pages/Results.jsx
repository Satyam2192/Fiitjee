import React from "react";

function Result() {
  return (
    <section className="bg-gray-100" id="result">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">JEE Advanced 2023 Results</h3>
        </div>

        <div className="overflow-x-auto text-start flex justify-center max-w-6xl mx-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 w-full">
                <th className="py-2 px-4">Centre Name</th>
                <th className="py-2 px-4">Student's Name</th>
                <th className="py-2 px-4">VMC Roll No</th>
                <th className="py-2 px-4">CRL RANK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white w-full">
                <td className="py-2 px-4">AGRA</td>
                <td className="py-2 px-4">Utsav Sharma</td>
                <td className="py-2 px-4">230310038281</td>
                <td className="py-2 px-4">1498</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4">AGRA</td>
                <td className="py-2 px-4">Tanvi Agarwal</td>
                <td className="py-2 px-4">10P23002209</td>
                <td className="py-2 px-4">2191</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">AGRA</td>
                <td className="py-2 px-4">Krishna Goyal</td>
                <td className="py-2 px-4">10P23005087</td>
                <td className="py-2 px-4">2464</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4">AGRA</td>
                <td className="py-2 px-4">Yash Chaudhary</td>
                <td className="py-2 px-4">2.3031E+11</td>
                <td className="py-2 px-4">7879</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Atharv Mittal</td>
                <td className="py-2 px-4">8P23AV1013</td>
                <td className="py-2 px-4">623</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Mir Maiti</td>
                <td className="py-2 px-4">8P23AV1006</td>
                <td className="py-2 px-4">1676</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Kanwarveer Singh</td>
                <td className="py-2 px-4">8P23AV1092</td>
                <td className="py-2 px-4">1696</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Kumar Vedant</td>
                <td className="py-2 px-4">10P23005210</td>
                <td className="py-2 px-4">2286</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Pratyush Chauhan</td>
                <td className="py-2 px-4">10P23004861</td>
                <td className="py-2 px-4">2873</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4">Anand Vihar</td>
                <td className="py-2 px-4">Aaditya Bansal</td>
                <td className="py-2 px-4">10P23000205</td>
                <td className="py-2 px-4">3036</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Result;
