import React from "react";

const PackageComparison = () => {
  return (
    <section className=" py-20 px-4 md:px-10 text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Which Program Is Right for You?
      </h3>

      <div className="overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-white shadow-xl text-gray-800">
            <thead className="bg-gray-100">
              <tr className="text-green-700 text-center text-lg">
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">28-Day</th>
                <th className="p-4 font-semibold">12-Week</th>
                <th className="p-4 font-semibold">Weekly</th>
                <th className="p-4 font-semibold">Daily</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-t">
                <td className="p-4 font-medium">Number of Modes</td>
                <td className="p-4">3</td>
                <td className="p-4">7</td>
                <td className="p-4">1-7</td>
                <td className="p-4">Gradual</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Personal Coaching</td>
                <td className="p-4 text-red-500">❌</td>
                <td className="p-4 text-green-500">✅</td>
                <td className="p-4 text-red-500">❌</td>
                <td className="p-4 text-red-500">❌</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Community Access</td>
                <td className="p-4">Basic</td>
                <td className="p-4">Full</td>
                <td className="p-4 text-red-500">❌</td>
                <td className="p-4 text-red-500">❌</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Time Commitment</td>
                <td className="p-4">30 min/day</td>
                <td className="p-4">1 hour/day</td>
                <td className="p-4">Flexible</td>
                <td className="p-4">5 min/day</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Best For</td>
                <td className="p-4">Quick Start</td>
                <td className="p-4">Full Transform</td>
                <td className="p-4">Self-Paced</td>
                <td className="p-4">Busy Lifestyle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;
