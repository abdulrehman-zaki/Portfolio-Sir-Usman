import React from "react";

const Education = () => {
  const degrees = [
    {
      degree: "MS (Computer Science)",
      institution: " Comsats University of Islambad, Sahiwal Campus ",
      year: "2020-2022",
      details: "Information and Communication Technologies (ICTs) ",
    },
    {
      degree: "BS (Computer Science) ",
      institution: "The Superior College of Lahore",
      year: "2014-2018",
      details: "Information and Communication Technologies (ICTs) ",
    },
    {
      degree: "B.ED (LEADERSHIP AND MANAGEMENT)",
      institution: "Allama Iqbal Open Univerity of Islamabad",
      year: "2019-2021",
      details: "Education",
    }
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">Education</h2>
      <div className="space-y-6">
        {degrees.map((deg, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{deg.degree}</h3>
            <p className="text-gray-700">{deg.institution} • {deg.year}</p>
            <p className="text-gray-600 mt-2">{deg.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
