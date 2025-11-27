import React from "react";
<Analysisdata
  stats={[
    { value: "700M+", label: "Global Records" },
    { value: "180+", label: "Countries" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "24/7", label: "Data Updates" },
  ]}
/>;
const Analysisdata = ({ stats = [] }) => {
  return (
    <div className="bg-[#E9EAFF] p-6 sm:p-8 lg:p-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-[#6364F2] mb-1 sm:mb-2">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm lg:text-lg text-gray-800 font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analysisdata;
