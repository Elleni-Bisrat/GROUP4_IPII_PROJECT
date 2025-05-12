import React from "react";
import Navigate from "../Nav";
import Footer from "../Footer";
import { useState } from "react";

const HandoutsFourthYear = () => {
  const firstSemesterCourses = [
    {
      title: "Principles of Compiler Design",
      icon: "🛠️🔤",
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
      title: "Mobile Computing and Programming",
      icon: "📱💻",
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
      title: "Software Design and Architecture",
      icon: "🏗️🧠",
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
      title: "Introduction to Artificial Intelligence",
      icon: "🤖🧠",
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
      title: "Computer Graphics",
      icon: "🖼️🧊",
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
      title: "Integrated Engineering Team Project",
      icon: "👥🛠️",
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
    {
      title: "Embedded Systems",
      icon: "🤖🔌",
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
      title: "Software Project Management",
      icon: "📊🗂️",
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
      title: "Software Quality Assurance and Testing",
      icon: "✅🧪",
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
      title: "Research Methods in Software Engineering",
      icon: "📚🔍",
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
      title: "Human Computer Interaction",
      icon: "🧑‍💻🖱️",
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
      title: "Introduction to Machine Learning",
      icon: "🧠📈",
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
      title: "Industrial Internship",
      icon: "🏭🧑‍💼",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigate />

      <Footer />
    </div>
  );
};

const CourseCard = ({ course, isExpanded, onToggle }) => {
  return <div className="mb-4">
    
  </div>;
};

export default HandoutsFourthYear;
