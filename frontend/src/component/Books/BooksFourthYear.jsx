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
      // 1. Prepare the request data
      const requestData = {
        course_name: course.title.trim()
      };

      console.log("Sending request with:", requestData);

      const response = await fetch("http://localhost/loginphp/pdf_files.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      console.log("Received response status:", response.status);

      // 3. Handle the response
      const result = await response.json();
      console.log("Parsed response:", result);

      if (!response.ok || result.error) {
        throw new Error(result.error || "Request failed");
      }

      // 4. Trigger the download
      console.log("Attempting download from:", result.download_url);
      window.location.href = result.download_url;
    } catch (error) {
      console.error("Download error:", error);
      setError(error.message || "Download failed");
    } finally {
      setIsLoading(false);
    }
  };

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
export default BooksFifthYear;
