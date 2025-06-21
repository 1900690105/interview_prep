"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  Play,
  ChevronRight,
  Globe,
  Calendar,
  TrendingUp,
  Award,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const CreateCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const courseData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(courseData);
        console.log(courseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search term, level, and category
  const filteredCourses = courses.filter((item) => {
    return (
      item.content.courseName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "" || item.difficulty === selectedLevel) &&
      (selectedCategory === "" || item.category === selectedCategory)
    );
  });

  // Get level styling
  const getLevelStyling = (level) => {
    switch (level) {
      case "Beginner" || "beginner":
        return {
          bg: "bg-emerald-100",
          text: "text-emerald-700",
          border: "border-emerald-200",
          icon: "🌱",
        };
      case "Intermediate":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          border: "border-blue-200",
          icon: "🚀",
        };
      case "Advanced":
        return {
          bg: "bg-purple-100",
          text: "text-purple-700",
          border: "border-purple-200",
          icon: "⚡",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-200",
          icon: "📚",
        };
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "text-blue-600",
      Programming: "text-green-600",
      Design: "text-purple-600",
      "Data Science": "text-orange-600",
      Marketing: "text-pink-600",
    };
    return colors[category] || "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <header
        className="bg-white shadow-sm border-b border-gray-100"
        role="banner"
        aria-label="Main banner"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Discover Amazing Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn new skills, advance your career, and achieve your goals with
            our expertly crafted courses
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section
        aria-label="Search and filter courses"
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-7xl mx-auto mt-6"
        role="search"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <label htmlFor="course-search" className="sr-only">
              Search for courses
            </label>
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <input
              id="course-search"
              type="text"
              placeholder="Search for courses, topics, or skills..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Level Filter */}
          <div className="relative">
            <label htmlFor="level-filter" className="sr-only">
              Filter by level
            </label>
            <Filter
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <select
              id="level-filter"
              className="pl-12 pr-8 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white min-w-[160px] text-lg"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Beginner">🌱 Beginner</option>
              <option value="Intermediate">🚀 Intermediate</option>
              <option value="Advanced">⚡ Advanced</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category-filter" className="sr-only">
              Filter by category
            </label>
            <select
              id="category-filter"
              className="px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white min-w-[160px] text-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Web Development">💻 Web Development</option>
              <option value="Programming">🔧 Programming</option>
              <option value="Design">🎨 Design</option>
              <option value="Data Science">📊 Data Science</option>
            </select>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <main
        id="main-content"
        className="max-w-7xl mx-auto px-6 py-12"
        role="main"
      >
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16" role="status" aria-live="polite">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse all courses
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredCourses.length} Course
                {filteredCourses.length !== 1 ? "s" : ""} Found
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp size={16} aria-hidden="true" />
                <span className="text-sm">Sorted by popularity</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map((course) => {
                const levelStyle = getLevelStyling(course.difficulty);
                return (
                  <article
                    key={course.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
                    tabIndex={0}
                    aria-labelledby={`course-title-${course.id}`}
                  >
                    <div className="relative p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`px-3 py-1 rounded-full ${levelStyle.bg} ${levelStyle.border} border flex items-center gap-1`}
                        >
                          <span className="text-xs">{levelStyle.icon}</span>
                          <span
                            className={`text-sm font-medium ${levelStyle.text}`}
                          >
                            {course.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star
                            size={16}
                            fill="currentColor"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <h3
                        id={`course-title-${course.id}`}
                        className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        {course.content.courseName}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {course.content.description}
                      </p>

                      <div className="flex justify-between">
                        <div
                          className={`text-sm font-medium capitalize ${getCategoryColor(
                            course.category
                          )} mb-4`}
                        >
                          {course.category}
                        </div>
                        <div className="text-sm font-medium mb-4 text-gray-800">
                          {course.topicName}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-4 flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Globe size={14} aria-hidden="true" />
                        <span className="capitalize">
                          {course.video_language}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} aria-hidden="true" />
                        <span>
                          {new Date(course.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="px-6 pb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                          <Award size={14} aria-hidden="true" /> What you&#39;ll
                          learn:
                        </h4>

                        <ul className="space-y-1">
                          {course.content.chapters.map((chapter, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-gray-600 flex items-center gap-2"
                            >
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              {chapter.chapterName}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => {
                          window.location.href = `/learn/course/start?courseId=${course.id}`;
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={`Start learning ${course.content.courseName}`}
                      >
                        <Play size={18} aria-hidden="true" />
                        Start Learning
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CreateCourse;
