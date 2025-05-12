import React from "react";
import Footer from "../component/Footer";

function About() {
  return (
    <div className="bg-cover bg-center text-white h-screen bg-[rgb(30,30,32)] ">
      <div className="flex justify-center ">
        <h1 className="text-3xl mt-14 font-bold">About Us</h1>
      </div>
      <div className=" flex justify-center text-center">
        <p className="text-center max-w-4xl mx-4 mt-6">
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
        <img src="images/girl.png" alt="" className="w-48 rounded-xl" />

        <img src="images/imagee.png" alt="" className="w-48 rounded-xl" />

        <img src="images/image.png" alt="" className="w-48 rounded-xl" />
      </div>
       <Footer />
    <div>
    </div>


    </div>
  );
}
export default About;
