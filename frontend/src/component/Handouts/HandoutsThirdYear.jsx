import React from "react";
import Navigate from "../Nav";
import Footer from "../Footer";
import { useState } from "react";

const HandoutsThirdYear = () => {
 

  const firstSemesterCourses = [
    {
      title: "Object Oriented Programming",
      icon: "📚",
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
      title: "Data Structure and Algorithms",
      icon: "📊",
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
      title: "Computer Organization and Architecture",
      icon: "🖥️",
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
      title: "Internet Programming 1",
      icon: "🌐",
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
      title: "System Analysis and Modelling",
      icon: "📈",
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
      title: "Internet programming 2",
      icon: "🌐",
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
      title: "Operating systems",
      icon: "🐧",
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
      title: "Software requirements engineering",
      icon: "📝",
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
      title: "Advanced programming",
      icon: "🚀",
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
      title: "Formal language and automata theory",
      icon: "🤖",
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
  return (
    <div className="mb-4">
      
    </div>
  );
};

export default HandoutsThirdYear;
