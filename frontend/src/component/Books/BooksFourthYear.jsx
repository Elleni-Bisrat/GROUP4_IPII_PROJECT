import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";

const BooksFourthYear = () => {
  const firstSemesterCourses = [
    { title: "Principles of Compiler Design", icon: "🛠️🔤" },
    { title: "Mobile Computing and Programming", icon: "📱💻" },
    { title: "Software Design and Architecture", icon: "🏗️🧠" },
    { title: "Introduction to Artificial Intelligence", icon: "🤖🧠" },
    { title: "Computer Graphics", icon: "🖼️🧊" },
    { title: "Integrated Engineering Team Project", icon: "👥🛠️" },
  ];

  const secondSemesterCourses = [
    { title: "Embedded Systems", icon: "🤖🔌" },
    { title: "Software Project Management", icon: "📊🗂️" },
    { title: "Software Quality Assurance and Testing", icon: "✅🧪" },
    { title: "Research Methods in Software Engineering", icon: "📚🔍" },
    { title: "Human Computer Interaction", icon: "🧑‍💻🖱️" },
    { title: "Introduction to Machine Learning", icon: "🧠📈" },

    { title: "Industrial Internship", icon: "🏭🧑‍💼" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigate />
      
      <Footer />
    </div>
  );
};

const CourseCard = ({ course }) => {
 

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-xl ">
     
    </div>
  );
};

export default BooksFourthYear;
