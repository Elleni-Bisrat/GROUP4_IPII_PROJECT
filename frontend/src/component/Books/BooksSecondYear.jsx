import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";

const BooksSecondYear = () => {
  const firstSemesterCourses = [
    {
      title: "DiscreteMaths",
      icon: "🧮",
    },
    {
      title: "Introduction to Software Engineering",
      icon: "💻",
    },
    {
      title: "Probability ",
      icon: "🎲",
    },
    {
      title: "History",
      icon: "📜",
    },
    {
      title: " FundmentalC",
      icon: "🔢",
    },
    {
      title: "GlobalTrend ",
      icon: "🌏",
    },
  ];

  const secondSemesterCourses = [
    {
      title: "Fundamentals of programming C++ 2",
      icon: "🔣",
    },
    {
      title: "DLD",
      icon: "⚙️",
    },
    {
      title: "Datacomunication",
      icon: "📡",
    },
    {
      title: "Database",
      icon: "🗃️",
    },
    {
      title: "Economics",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigate />
           <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---First Semester</h1>
          {firstSemesterCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---Second Semester</h1>
          {secondSemesterCourses.map((course, index) => (
            <CourseCard key={index} course={course}  />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CourseCard = ({ course }) => {
  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const handleDownload = async () => {
      setIsLoading(true);
      setError("");
    }

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-xl ">
      <div className="flex  items-center mb-2">
        <span className="text-2xl mr-3">{course.icon}</span>
        <h2 className="text-xl font-semibold">{course.title}</h2>
      </div>
      <p className="text-gray-600 mb-4">Course materials and resources</p>
      <div className="bg-gradient-to-r from-green-400  w- pt-4">
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="text-blue-600 hover:text-blue-800 "
        >
          {isLoading ? "Loading..." : "📥Download"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default BooksSecondYear;
