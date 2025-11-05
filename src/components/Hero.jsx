import React from "react";
import profilePic from "../assets/profile.jpg"; // Add your photo in src/assets/

const Hero = () => {
  return (
    <section id="home" className="text-center py-16 bg-linear-to-b from-indigo-50 to-white">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full shadow-md"
      />
      <h2 className="text-3xl font-bold mt-4">Usman Javeed</h2>
      <p className="text-lg text-gray-600 mt-2">
       Lecturer | Researcher
      </p>
      <p className="max-w-2xl mx-auto text-gray-700 mt-4">
       
I am a passionate educator and researcher currently serving as a Lecturer in the Department of Computer Science at the University of Okara, Pakistan, which is a public sector university. I hold an M.S. degree in Computer Science from COMSATS University Islamabad, Sahiwal Campus, with a strong academic and research background in Artificial Intelligence, Machine Learning, and Biomedical Image Processing. My research primarily focuses on developing intelligent systems and data-driven solutions for healthcare and cybersecurity applications. I have authored and co-authored several research papers published in reputed journals and conferences, covering topics such as heart disease prediction, phishing website detection, sentiment analysis, and brain tumor segmentation. With several years of teaching and research experience, I am committed to advancing innovation in AI and mentoring students to achieve academic and professional excellence.
      </p>
    </section>
  );
};

export default Hero;
