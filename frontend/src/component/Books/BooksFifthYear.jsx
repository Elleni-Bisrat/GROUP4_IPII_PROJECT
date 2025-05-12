import React from"react";
import React, { useState } from "react";
import Navigate from "../Nav";
import Footer from "../Footer";


const BooksFifthYear = () => {
  const firstSemesterCourses = [
  { title: "Senior Research Project Phase 1", icon: "🧪📝",
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
  { title: "Software Configuration Management", icon: "🧩⚙️",
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
  { title: "Elective 1", icon: "🧾🎯",
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
  { title: "Computer System Security", icon: "🔐🖥️",
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
  { title: "Software Component Design", icon: "🧱💻",
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
  { title: "Open Source Software Paradigms", icon: "🌐💡",
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
  { title: "Distributed Systems", icon: "🛰️🔗",
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

  const secondSemesterCourses = [
    { title: "Senior Research Project 2", icon: "🧪📘",
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
    { title: "Elective 2", icon: "🧾🎯",
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
    { title: "Software Evolution and Maintenance", icon: "🔄🔧",
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
    { title: "Software Defined System", icon: "🖧🧠",
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
    { title: "Selected Topics in Software Engineering", icon: "📘🧠",
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
    }
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigate />
      <Footer />
    </div>
  );
};

const CourseCard = ({ course, isExpanded, onToggle }) => {
 

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-xl ">
      
    </div>
  );
};
export default BooksFifthYear;
