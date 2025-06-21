// components/JobListing.js
"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import JobCard from "./JobCard";
import { db } from "@/lib/firebaseConfig";

const JobListing = ({ refreshTrigger }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "joblisting"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const jobsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsData);
    } catch (err) {
      console.error("Error fetching jobs: ", err);
      setError("Failed to load job listings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [refreshTrigger]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "all" || job.type === filter;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading jobs...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search jobs, companies, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} Job{filteredJobs.length !== 1 ? "s" : ""}{" "}
            Found
          </h2>
          <button
            onClick={fetchJobs}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            {searchTerm || filter !== "all"
              ? "No jobs match your criteria"
              : "No job listings found"}
          </div>
          <p className="text-gray-400 mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListing;
