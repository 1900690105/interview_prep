import Head from "next/head";
import React from "react";

function HeroSeection({ websiteSchema }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CareerLaunch",
    description:
      "Helping students navigate from education to employment with personalized career paths",
    url: "https://careerlaunch.com",
    logo: "https://careerlaunch.com/logo.png",
    foundingDate: "2024",
    sameAs: [
      "https://www.linkedin.com/company/careerlaunch",
      "https://twitter.com/careerlaunch",
    ],
  };
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          CareerLaunch | Your Path to Professional Success - Student Career
          Guidance Platform
        </title>
        <meta
          name="title"
          content="CareerLaunch | Your Path to Professional Success - Student Career Guidance Platform"
        />
        <meta
          name="description"
          content="Transform your career with CareerLaunch - the leading platform helping students navigate from education to employment. Discover personalized career paths, gain industry skills, and connect with top employers. Start your professional journey today!"
        />
        <meta
          name="keywords"
          content="career guidance, student career platform, professional development, job placement, career counseling, skills development, employment opportunities, career paths, student success, professional training"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="CareerLaunch Team" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://careerlaunch.com/" />
        <meta
          property="og:title"
          content="CareerLaunch | Your Path to Professional Success"
        />
        <meta
          property="og:description"
          content="Transform your career with CareerLaunch - helping students navigate from education to employment with personalized career paths and industry connections."
        />
        <meta
          property="og:image"
          content="https://careerlaunch.com/og-image.jpg"
        />
        <meta property="og:site_name" content="CareerLaunch" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://careerlaunch.com/" />
        <meta
          property="twitter:title"
          content="CareerLaunch | Your Path to Professional Success"
        />
        <meta
          property="twitter:description"
          content="Transform your career with CareerLaunch - helping students navigate from education to employment with personalized career paths."
        />
        <meta
          property="twitter:image"
          content="https://careerlaunch.com/twitter-image.jpg"
        />
        <meta property="twitter:creator" content="@careerlaunch" />

        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://careerlaunch.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="msapplication-TileColor" content="#4F46E5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </Head>
    </div>
  );
}

export default HeroSeection;
