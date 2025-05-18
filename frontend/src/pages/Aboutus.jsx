import React from "react";
import Footer from "../component/Footer";
function About() {
  return (
   
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-300 transition-colors duration-300 ">
  
      <div className="bg-[rgb(30,30,32)] dark:bg-gray-900 text-white dark:text-gray-200 transition-colors duration-300 mb-10">
        <div className="flex justify-center">
          <h1 className="text-3xl mt-14 font-bold">About Us</h1>
        </div>
        <div className="flex justify-center text-center">
          <p className="max-w-4xl mx-4 mt-6">
            Welcome to University Handout and Resource Management, a comprehensive
            platform designed to simplify access to essential study materials for
            software engineering students. Our goal is to empower students with
            the tools they need to succeed by providing a centralized repository
            of resources such as lecture handouts, textbooks, tutorials, coding
            exercises, and project guides. The platform is designed to cater to
            diverse academic needs, offering features like organized content
            categories, a powerful search functionality, and user-friendly
            navigation. Additionally, we promote collaboration through interactive
            discussion forums where students can share insights, ask questions,
            and connect with peers. With a focus on accessibility and efficiency,
            University Handout and Resource Management aims to bridge the gap
            between students and the resources they need, ensuring a seamless
            learning experience. Whether you're catching up on coursework, working
            on assignments, or exploring new topics, this platform is your trusted
            partner in academic excellence. Let’s revolutionize the way students
            access knowledge and foster a more connected educational community!
          </p>
        </div>
        <div className="flex justify-around mt-10 mb-40">
          <img src="images/girl.png" alt="" className="w-48 rounded-xl mb-10" />
          <img src="images/imagee.png" alt="" className="w-48 rounded-xl mb-10" />
          <img src="images/image.png" alt="" className="w-48 rounded-xl mb-10" />
        </div>
      </div>

  
      <div className="flex align-center justify-center h-20">
        <p className="text-black dark:text-gray-300 text-2xl">
          WELCOME TO OUR WEBSITE
        </p>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 m-20">
        {[
          {
            title: "Access to Handouts",
            desc: "Students can easily view and download subject-wise handouts uploaded by the admin or instructor. These are organized per course and chapter for quick reference.",
          },
          {
            title: "Books and Study Material Links",
            desc: "Curated links to textbooks, reference books, and online study resources are available to help students deepen their understanding of the subjects.",
          },
          {
            title: "Assignments and Practice Questions",
            desc: "Assignments for different subjects are uploaded regularly. Students can download them for practice and submission purposes.",
          },
          {
            title: "Smart Search Feature",
            desc: "A powerful search bar allows students to search for specific handouts, books, or assignments across all subjects and semesters in one place.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-green-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default About;
