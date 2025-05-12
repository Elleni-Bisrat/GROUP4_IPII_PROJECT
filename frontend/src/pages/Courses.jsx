import React from "react";
import Navigate from "../component/Nav";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  const Books = [
    {
      title: "Second Year",
      icon: "📚",
      path: "/BooksSecondYear",
    },
    {
      title: "Third Year",
      icon: "📚",
      path: "/BooksThirdYear",
    },
    {
      title: "Fourth Year",
      icon: "📚",
      path: "/BooksFourthYear",
    },
    {
      title: "Fifth Year",
      icon: "📚",
      path: "/BooksFifthYear",
    },
  ];
  const Handouts = [
    {
      title: "Second Year",
      icon: "📚",
      path: "/HandoutsSecondYear",
    },
    {
      title: "Third Year",
      icon: "📚",
      path: "/HandoutsThirdYear",
    },
    {
      title: "Fourth Year",
      icon: "📚",
      path: "/HandoutsFourthYear",
    },
    {
      title: "Fifth Year",
      icon: "📚",
      path: "/HandoutsFifthYear",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navigate />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---Books</h1>
          {Books.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---Handouts</h1>
          {Handouts.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">---Assignments</h1>
          {Books.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-6">---Referal links</h1>
        <div className="mb-12">
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md  ">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3"></span>
            </div>
            <p className="text-gray-600 mb-4">Course materials and resources</p>
            <div className=" bg-gradient-to-r from-green-400  w- pt-4">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <span className="mr-2"></span>View helpfull links
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md  ">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3">{course.icon}</span>
        <h2 className="text-xl font-semibold">{course.title}</h2>
      </div>
      <p className="text-gray-600 mb-4">Course materials and resources</p>
      <Link to={course.path}>
        <div className=" bg-gradient-to-r from-green-400  w- pt-4">
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <span className="mr-2"></span>View course materials
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Courses;
