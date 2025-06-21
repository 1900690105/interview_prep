"use client";

import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CareerLaunch</h3>
              <p className="text-gray-400">
                Bridging the gap between education and employment for students
                worldwide.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social icons would go here */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Career Paths
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Job Board
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Employers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    For Universities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 capitalize">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {`${process.env.NEXT_PUBLIC_BRAND_NAME}`}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
