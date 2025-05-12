import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";


const BooksFifthYear = () => {
  const firstSemesterCourses = [
  { title: "Senior Research Project Phase 1", icon: "🧪📝" },
  { title: "Software Configuration Management", icon: "🧩⚙️" },
  { title: "Elective 1", icon: "🧾🎯" },
  { title: "Computer System Security", icon: "🔐🖥️" },
  { title: "Software Component Design", icon: "🧱💻" },
  { title: "Open Source Software Paradigms", icon: "🌐💡" },
  { title: "Distributed Systems", icon: "🛰️🔗" },
  ];

  const secondSemesterCourses = [
    { title: "Senior Research Project 2", icon: "🧪📘" },
    { title: "Elective 2", icon: "🧾🎯" },
    { title: "Software Evolution and Maintenance", icon: "🔄🔧" },
    { title: "Software Defined System", icon: "🖧🧠" },
    { title: "Selected Topics in Software Engineering", icon: "📘🧠" }
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
export default BooksFifthYear;