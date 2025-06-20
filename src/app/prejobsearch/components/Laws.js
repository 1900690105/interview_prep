import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { DataLaws } from "@/app/data/JobLaws";

const Laws = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLaws = DataLaws.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4 max-w-6xl" role="main">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Indian Labor Laws
        </h1>
        <p className="text-gray-600">
          Browse and learn about major labor laws that impact the Indian
          workforce.
        </p>
      </header>

      {/* Search Input */}
      <section
        className="relative mb-6 max-w-xl mx-auto"
        aria-labelledby="search-label"
      >
        <label htmlFor="law-search" id="search-label" className="sr-only">
          Search labor laws by title or purpose
        </label>
        <Search
          className="absolute left-2 top-3.5 h-4 w-4 text-gray-500"
          aria-hidden="true"
        />
        <Input
          id="law-search"
          type="text"
          placeholder="Search laws by title or purpose..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {/* Laws Grid */}
      <section
        aria-labelledby="laws-grid-heading"
        className="grid gap-4 md:grid-cols-2"
      >
        <h2 id="laws-grid-heading" className="sr-only">
          List of labor laws
        </h2>

        {filteredLaws.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
            role="article"
            aria-labelledby={`law-title-${index}`}
          >
            <CardHeader>
              <CardTitle
                id={`law-title-${index}`}
                className="text-lg font-semibold"
              >
                <Link
                  href={item.url}
                  aria-label={`Read more about ${item.title}`}
                >
                  {item.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-gray-700">Purpose:</h3>
                  <p className="text-gray-600">{item.purpose}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Description:</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* No Results */}
        {filteredLaws.length === 0 && (
          <div
            className="text-center col-span-full py-8"
            role="status"
            aria-live="polite"
          >
            <p className="text-gray-500">
              No laws found matching your search criteria.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Laws;
