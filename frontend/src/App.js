import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/Aboutus";
import Courses from "./pages/Courses";
import { ThemeProvider } from "./component/ThemeContext";

import BooksThirdYear from "./component/Books/BooksThirdYear";
import BooksFourthYear from "./component/Books/BooksFourthYear";
import BooksSecondYear from "./component/Books/BooksSecondYear";
import BooksFifthYear from "./component/Books/BooksFifthYear";

import HandoutsSecondYear from "./component/Handouts/HandoutsSecondYear";
import HandoutsThirdYear from "./component/Handouts/HandoutsThirdYear";
import HandoutsFourthYear from "./component/Handouts/HandoutsFifthYear";
import HandoutsFifthYear from "./component/Handouts/HandoutsFifthYear";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider> {/* ✅ Wrap app in ThemeProvider */}
      <BrowserRouter>
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/BooksThirdYear" element={<BooksThirdYear />} />
            <Route path="/BooksFourthYear" element={<BooksFourthYear />} />
            <Route path="/BooksSecondYear" element={<BooksSecondYear />} />
            <Route path="/BooksFifthYear" element={<BooksFifthYear />} />

            <Route path="/HandoutsSecondYear" element={<HandoutsSecondYear />} />
            <Route path="/HandoutsThirdYear" element={<HandoutsThirdYear />} />
            <Route path="/HandoutsFourthYear" element={<HandoutsFourthYear />} />
            <Route path="/HandoutsFifthYear" element={<HandoutsFifthYear />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
