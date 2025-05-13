import React from "react";
import Navigate from "../Nav";
import Footer from "../Footer";
import { useState } from "react";

const HandoutsSecondYear = () => {
  const [expanded, setExpanded] = useState("");
  const toggleCourse = (title) => {
    setExpanded(expanded === title ? null : title);
  };

  const firstSemesterCourses = [
    {
      title: "Discretemaths",
      icon: "🧮",
      chapters: [
        {
          title: "Chapter 1",
        },
        {
          title: "Chapter 2",
        },
        {
          title: "Chapter 3",
        },
        {
          title: "Chapter 4",
        },
      ],
    },
    {
      title: "Introduction to Software Engineering",
      icon: "💻",
      chapters: [
        {
          title: "Chapter 1",
        },
        {
          title: "Chapter 2",
        },
        {
          title: "Chapter 3",
        },
        {
          title: "Chapter 4",
        },
      ],
    },
    {
      title: "Probability and statistics ",
      icon: "🎲",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: "history",
      icon: "📜",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: " fundamentals of programming C++ 1",
      icon: "🔢",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: "Globaltrend ",
      icon: "🌏",
      chapters: [
        {
          title: "Chapter 1",
        },
        {
          title: "Chapter 2",
        },
        {
          title: "Chapter 3",
        },
        {
          title: "Chapter 4",
        },
      ],
    },
  ];

  const secondSemesterCourses = [
    {
      title: "Fundamentals of programming C++ 2",
      icon: "🔣",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: "Digital logic design",
      icon: "⚙️",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: " Data communication and computer networks",
      icon: "📡",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: "Database system",
      icon: "🗃️",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
    {
      title: "Economics",
      icon: "💰",
      chapters: [
        {
          title: "Chapter 1: Introduction to OOP",
        },
        {
          title: "Chapter 2: Inehritance",
        },
        {
          title: "Chapter 3: Polymorphism",
        },
        {
          title: "Chapter 4: Introduction to OOP",
        },
      ],
    },
  ];

  const handleDownload = async (courseTitle, chapterTitle) => {
    try {
      // Extract chapter number more reliably
      const chapterMatch = chapterTitle.match(/(\d+)/);
      const chapterNum = chapterMatch ? chapterMatch[1] : null;

      const response = await fetch(
        "http://localhost/GROUP4_IPII_PROJECT/backend/download_handouts.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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

      // Create download link
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

 

//  const handleDownload = async (courseTitle, chapterTitle) => {
//   console.log("Download initiated for:", courseTitle, chapterTitle);
  
//   try {
//     // 1. Show immediate feedback
//     alert("Starting download...");
    
//     // 2. Extract chapter number
//     const chapterNum = chapterTitle.match(/(\d+)/)?.[1] || null;
//     console.log("Extracted chapter:", chapterNum);
    
//     // 3. Make the request
//     const response = await fetch("http://localhost/GROUP4_IPII_PROJECT/backend/download_handouts.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         course_name: courseTitle.trim(),
//         chapter: chapterNum
//       }),
//     });
//     console.log("Response status:", response.status);
    
//     // 4. Process response
//     const result = await response.json();
//     console.log("Server response:", result);
    
//     if (!response.ok || result.error) {
//       throw new Error(result.error || "Download failed");
//     }
    
//     // 5. Force download
//     const link = document.createElement('a');
//     link.href = result.download_url;
//     link.download = result.file_name || "handout.pdf";
//     link.style.display = 'none';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
    
//     // 6. Fallback
//     setTimeout(() => {
//       window.open(result.download_url, '_blank');
//     }, 500);
    
//   } catch (error) {
//     console.error("Download failed:", error);
//     alert(`Download error: ${error.message}\nCheck console for details.`);
//   }
// };

  const CourseCard = ({ course, isExpanded, onToggle }) => {
    return (
      <div className="mb-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-3">{course.icon}</span>
            <h2 className="text-xl font-semibold">{course.title}</h2>
          </div>
          <p className="text-gray-600 mb-4">Course materials and resources</p>

          <div
            className="bg-gradient-to-r from-green-400 w- pt-4"
            onClick={onToggle}
          >
            <button className="flex items-center text-blue-600 hover:text-blue-800">
              View course materials
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-2 ml-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Select a chapter:</h3>
            <div className="space-y-3">
              {course.chapters.map((chapter, index) => (
                <div key={index} className="p-3 bg-white rounded shadow-sm">
                  <h4 className="font-medium">{chapter.title}</h4>
                  <button
                    onClick={() => handleDownload(course.title, chapter.title)}
                    className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-400 to-green-300 text-white text-sm rounded hover:bg-blue-600"
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
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

export default HandoutsSecondYear;
