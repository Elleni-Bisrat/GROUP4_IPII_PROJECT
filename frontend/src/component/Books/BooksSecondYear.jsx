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

export default BooksSecondYear;
