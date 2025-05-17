import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";

const BooksSecondYear = () => {
  const firstSemesterCourses = [
    { title: "DiscreteMaths", icon: "🧮" },
    { title: "Introduction to Software Engineering", icon: "💻" },
    { title: "Probability ", icon: "🎲" },
    { title: "History", icon: "📜" },
    { title: " FundmentalC", icon: "🔢" },
    { title: "GlobalTrend ", icon: "🌏" },
  ];

  const secondSemesterCourses = [
    { title: "Fundamentals of programming C++ 2", icon: "🔣" },
    { title: "DLD", icon: "⚙️" },
    { title: "Datacomunication", icon: "📡" },
    { title: "Database", icon: "🗃️" },
    { title: "Economics", icon: "💰" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-colors duration-300">
      <Navigate />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">--- First Semester</h1>
          {firstSemesterCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">--- Second Semester</h1>
          {secondSemesterCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
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

    try {
      const requestData = {
        course_name: course.title.trim(),
      };

      const response = await fetch(
        "http://localhost/GROUP4_IPII_PROJECT/backend/pdf_files.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Request failed");
      }

      window.location.href = result.download_url;
    } catch (error) {
      setError(error.message || "Download failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-colors duration-300">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3">{course.icon}</span>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {course.title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Course materials and resources
      </p>
      <div className="pt-4 bg-gradient-to-r from-green-400">
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          {isLoading ? "Loading..." : "📥 Download"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default BooksSecondYear;
