"use client";
import { useState } from "react";
import HowWork from "./home/components/HowWork";
import CareerResources from "./home/components/Resourse";
import FeatureSection from "./home/components/Feature";
import HeroSeection from "./components/HeroSeection";
import PowerCareerPath from "./components/PowerCareerPath";
import HeroSection from "./home/components/HeroSection";
import Footer from "./home/components/Footer";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  // Structured data for SEO

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AvsarMarg",
    url: "https://avsarmarg.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://avsarmarg.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const testimonials = [
    {
      name: "Janavi Khawale",
      role: "1st Year Student at GCOEY",
      image: "/pro1.jpg",
      quote:
        "CareerLaunch made learning enjoyable and tailored to my pace. It boosted my confidence and helped me understand where I truly excel.",
    },
    {
      name: "Ankita Warkhade",
      role: "2nd Year Student at GCOEY",
      image: "/pro2.jpg",
      quote:
        "I used to feel lost about my future, but CareerLaunch gave me clarity and direction. Now I'm motivated to learn and grow every day.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Skip link for screen readers */}
        <a
          href="#main-content"
          aria-label="Skip to main content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Navigation landmark */}
        <nav aria-label="Main navigation" role="navigation">
          {/* Replace with actual Nav component */}
        </nav>

        <HeroSection />

        {/* Main content area */}
        <main id="main-content" role="main" tabIndex={-1}>
          <HowWork />
          <PowerCareerPath />

          {/* Testimonials Section */}
          <section
            className="py-16 bg-white"
            aria-labelledby="testimonials-heading"
            role="region"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
                <h2
                  id="testimonials-heading"
                  className="text-3xl font-bold text-gray-900"
                >
                  Student Success Stories
                </h2>
                <p className="mt-2 text-xl text-gray-600">
                  See how students like you achieved their career goals
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((story, index) => (
                  <article
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    itemScope
                    itemType="https://schema.org/Review"
                    aria-label={`Testimonial from ${story.name}`}
                  >
                    <div className="flex items-start">
                      <img
                        src={story.image}
                        alt={`${story.name} - ${story.role}`}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                      <div>
                        <blockquote
                          className="text-gray-600 mb-4"
                          itemProp="reviewBody"
                        >
                          "{story.quote}"
                        </blockquote>
                        <footer>
                          <h4
                            className="font-bold text-gray-900"
                            itemProp="author"
                            itemScope
                            itemType="https://schema.org/Person"
                          >
                            <span itemProp="name">{story.name}</span>
                          </h4>
                          <p className="text-gray-500">{story.role}</p>
                        </footer>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="bg-indigo-700"
            aria-labelledby="cta-heading"
            role="region"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-3/5">
                  <h2
                    id="cta-heading"
                    className="text-3xl font-bold text-white"
                  >
                    Ready to Start Your Career Journey?
                  </h2>
                  <p className="mt-3 text-xl text-indigo-100">
                    Join thousands of students who've successfully launched
                    their careers with our platform.
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <a
                    href="/register"
                    className="block text-center bg-white text-indigo-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                    role="button"
                    aria-label="Create a free account"
                  >
                    Create Free Account
                  </a>
                </div>
              </div>
            </div>
          </section>

          <CareerResources />
          <FeatureSection />

          {/* Newsletter Section */}
          <section
            className="py-16 bg-white"
            aria-labelledby="newsletter-heading"
            role="region"
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2
                id="newsletter-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for career tips, job alerts, and
                industry insights
              </p>

              {/* Live region for alerts */}
              <div
                id="form-status"
                className="sr-only"
                aria-live="polite"
              ></div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center"
                noValidate
                aria-labelledby="newsletter-heading"
              >
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  aria-describedby="email-help"
                />
                <p id="email-help" className="sr-only">
                  We'll send you career tips and job opportunities
                </p>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>

      {/* Footer landmark */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
}
