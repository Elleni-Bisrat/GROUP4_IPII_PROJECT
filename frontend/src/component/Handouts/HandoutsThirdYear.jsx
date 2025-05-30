import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";

const HandoutsThirdYear = () => {
  const [expanded, setExpanded] = useState("");

  const toggleCourse = (title) => {
    setExpanded(expanded === title ? null : title);
  };

  const firstSemesterCourses = [
    {
      title: "Object Oriented Programming",
      icon: "📚",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Data Structure and Algorithms",
      icon: "📊",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Computer Organization and Architecture",
      icon: "🖥️",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Internet Programming 1",
      icon: "🌐",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "System Analysis and Modelling",
      icon: "📈",
      chapters: [{ title: "Chapter 1:" }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4:" }],
    },
  ];

  const secondSemesterCourses = [
    {
      title: "IPII",
      icon: "🌐",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "OperatingSystem",
      icon: "🐧",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Software requirements engineering",
      icon: "📝",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Advanced programming",
      icon: "🚀",
      chapters: [{ title: "Chapter 1: " }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4: " }],
    },
    {
      title: "Flat",
      icon: "🤖",
      chapters: [{ title: "Chapter 1:" }, { title: "Chapter 2: " }, { title: "Chapter 3: " }, { title: "Chapter 4:" }],
    },
  ];

  const handleDownload = async (courseTitle, chapterTitle) => {
    try {
      const chapterMatch = chapterTitle.match(/(\d+)/);
      const chapterNum = chapterMatch ? chapterMatch[1] : null;

      const response = await fetch(
        "http://localhost/GROUP4_IPII_PROJECT/backend/download_handouts.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            course_name: courseTitle.trim(),
            chapter: chapterNum,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Failed to download");
      }

      const link = document.createElement("a");
      link.href = result.download_url;
      link.download = result.file_name || "handout.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      alert(`Download failed: ${error.message}`);
    }
  };

  const CourseCard = ({ course, isExpanded, onToggle }) => (
    <div className="mb-4">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-3">{course.icon}</span>
          <h2 className="text-xl font-semibold">{course.title}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Course materials and resources</p>
        <div className="bg-gradient-to-r from-green-400 w- pt-4" onClick={onToggle}>
          <button className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-700 dark:hover:text-blue-300">
            View course materials
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-2 ml-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Select a chapter:</h3>
          <div className="space-y-3">
            {course.chapters.map((chapter, index) => (
              <div key={index} className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <h4 className="font-medium">{chapter.title}</h4>
                <button
                  onClick={() => handleDownload(course.title, chapter.title)}
                  className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-700 to-green-300 text-white text-sm rounded hover:bg-blue-600"
                >
                  📥Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-black dark:text-white">
      <Navigate />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---First Semester</h1>
          {firstSemesterCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              isExpanded={expanded === course.title}
              onToggle={() => toggleCourse(course.title)}
            />
          ))}
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---Second Semester</h1>
          {secondSemesterCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              isExpanded={expanded === course.title}
              onToggle={() => toggleCourse(course.title)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HandoutsThirdYear;
