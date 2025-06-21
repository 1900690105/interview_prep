"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  ExternalLink,
  Briefcase,
  Building,
  Globe,
  Users,
} from "lucide-react";
import { DataPortals } from "@/app/data/JobPortals";

const JobPortals = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const portals = DataPortals;

  const filterItems = (items) => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const PortalCard = ({ item }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          <span className="text-blue-700">{item.title}</span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        {item.description}
      </CardContent>
    </Card>
  );

  const GridSection = ({ items }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filterItems(items).map((item, index) => (
        <PortalCard key={index} item={item} />
      ))}
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8" role="main">
      <h1
        className="text-3xl font-bold text-center text-blue-800 mb-8"
        id="job-search-heading"
      >
        Job Search Directory
      </h1>

      {/* Search Bar */}
      <section className="relative max-w-2xl mx-auto mb-8" aria-label="Search">
        <label htmlFor="job-search" className="sr-only">
          Search portals, companies, or agencies
        </label>
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          aria-hidden="true"
        />
        <input
          id="job-search"
          type="text"
          placeholder="Search portals, companies, or agencies..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="search-instruction"
        />
        <p id="search-instruction" className="sr-only">
          Start typing to filter the job resources below.
        </p>
      </section>

      {/* Tabs */}
      <section aria-labelledby="directory-tabs-heading">
        <h2 id="directory-tabs-heading" className="sr-only">
          Job Resource Categories
        </h2>
        <Tabs
          defaultValue="job_portals"
          className="w-full"
          aria-label="Job Resource Tabs"
        >
          <TabsList
            className="flex justify-center mb-6 bg-blue-50 p-1 rounded-lg"
            role="tablist"
          >
            <TabsTrigger
              value="job_portals"
              className="flex items-center gap-2 px-4 py-2"
              role="tab"
              aria-controls="tab-job-portals"
            >
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              Job Portals
            </TabsTrigger>
            <TabsTrigger
              value="remote_job_portals"
              className="flex items-center gap-2 px-4 py-2"
              role="tab"
              aria-controls="tab-remote-jobs"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              Remote Jobs
            </TabsTrigger>
            <TabsTrigger
              value="companies"
              className="flex items-center gap-2 px-4 py-2"
              role="tab"
              aria-controls="tab-companies"
            >
              <Building className="w-4 h-4" aria-hidden="true" />
              Companies
            </TabsTrigger>
            <TabsTrigger
              value="staffing_agencies"
              className="flex items-center gap-2 px-4 py-2"
              role="tab"
              aria-controls="tab-agencies"
            >
              <Users className="w-4 h-4" aria-hidden="true" />
              Agencies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="job_portals" id="tab-job-portals" role="tabpanel">
            <GridSection items={portals.job_portals} />
          </TabsContent>

          <TabsContent
            value="remote_job_portals"
            id="tab-remote-jobs"
            role="tabpanel"
          >
            <GridSection items={portals.remote_job_portals} />
          </TabsContent>

          <TabsContent value="companies" id="tab-companies" role="tabpanel">
            <GridSection items={portals.companies} />
          </TabsContent>

          <TabsContent
            value="staffing_agencies"
            id="tab-agencies"
            role="tabpanel"
          >
            <GridSection items={portals.staffing_agencies} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default JobPortals;
