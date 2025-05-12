import React from "react";
import { Link } from "react-router-dom";
import {
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-white py-10 px-4 md:px-8 w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our goal is to empower students with the tools they need to
              succeed by providing a centralized repository of resources such as
              lecture handouts, textbooks, tutorials, coding exercises, and
              project guides.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://facebook.com"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20}/>
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                className="text-white hover:text-red-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
              >
                home
              </Link>
              <Link
                to="/aboutus"
                className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
              >
                aboutus
              </Link>
              <Link
                to="/login"
                className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
              >
                login
              </Link>
              <Link
                to="/courses"
                className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
              >
                courses
              </Link>
              <Link
                to="/signup"
                className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
              >
                signup
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300" />
                <a
                  href="tel:+15415551234"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  +(251) 986-65-80-69
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300" />
                <a
                  href="mailto:info@example.com"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  resources@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Footer Links */}
        <div className="pt-6 border-t border-gray-700 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p>© 2025 SE-RESOURCE. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/privacy"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/faq"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                FAQ
              </a>
              <a
                href="/accessibility"
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
