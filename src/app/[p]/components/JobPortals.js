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

const JobPortals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const portals = {
    job_portals: [
      {
        title: "Job-a-Thon by GeeksforGeeks",
        link: "https://www.geeksforgeeks.org/events/rec/job-a-thon",
        description:
          "Job-a-Thon is a competitive coding event hosted by GeeksforGeeks for recruitment, connecting talented coders with top companies.",
      },
      {
        title: "Cuvette Tech",
        link: "https://cuvette.tech/",
        description:
          "Cuvette Tech is a platform for students and professionals to find internships and entry-level jobs in the tech industry.",
      },
      {
        title: "AICTE Internship Portal",
        link: "https://internship.aicte-india.org/",
        description:
          "The AICTE Internship portal connects students with various internship opportunities from companies and institutions across India.",
      },
      {
        title: "Hirect",
        link: "https://www.hirect.in/",
        description:
          "Hirect is a job portal that helps startups and SMBs hire professionals quickly through direct chat with job seekers.",
      },
      {
        title: "Apna",
        link: "https://apna.co/",
        description:
          "Apna is a job platform designed for blue-collar workers, offering job opportunities across industries for various skill sets.",
      },
      {
        title: "AngelList",
        link: "https://www.angellist.com/",
        description:
          "AngelList is a platform that connects job seekers with startups, offering job listings for various roles in the startup ecosystem.",
      },
      {
        title: "Naukri.com",
        link: "https://www.naukri.com/",
        description:
          "Naukri.com is one of India's largest job portals, providing job listings across different industries and job roles.",
      },
      {
        title: "Indeed",
        link: "https://in.indeed.com/",
        description:
          "Indeed is a global job search engine that aggregates job listings from various sources, offering job opportunities worldwide.",
      },
      {
        title: "Wellfound",
        link: "https://wellfound.com/",
        description:
          "Wellfound (formerly AngelList Talent) is a platform that helps job seekers find startup jobs and connect with companies.",
      },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/",
        description:
          "LinkedIn is a professional networking platform that offers job listings, career development opportunities, and networking features for professionals.",
      },
      {
        title: "Unstop",
        link: "https://unstop.com/",
        description:
          "Unstop offers a variety of competitions, internships, and job opportunities to help students and professionals grow their careers.",
      },
      {
        title: "Handshake",
        link: "https://joinhandshake.com/",
        description:
          "Handshake is a platform that connects college students with employers, providing internships and job opportunities.",
      },
      {
        title: "Upwork",
        link: "https://www.upwork.com/",
        description:
          "Upwork is a freelancing platform that connects businesses with independent professionals for remote job opportunities.",
      },
      {
        title: "CareerBuilder",
        link: "https://www.careerbuilder.com/regional_sites",
        description:
          "CareerBuilder provides job listings across different industries and regions, helping job seekers find their next role.",
      },
      {
        title: "Foundit (formerly Monster India)",
        link: "https://www.foundit.in/",
        description:
          "Foundit (formerly Monster India) is a job portal offering opportunities across various industries in India and globally.",
      },
      {
        title: "SimplyHired",
        link: "https://www.simplyhired.com/",
        description:
          "SimplyHired is a job search engine that lists job openings from various companies and sectors.",
      },
      {
        title: "ZipRecruiter",
        link: "https://www.ziprecruiter.in/",
        description:
          "ZipRecruiter connects job seekers with employers, providing an easy platform for applying to various job listings.",
      },
      {
        title: "Glassdoor",
        link: "https://www.glassdoor.com/index.html",
        description:
          "Glassdoor is a job portal that also provides company reviews, salary information, and interview insights from current and former employees.",
      },
      {
        title: "OffCampusJobs4u",
        link: "https://offcampusjobs4u.com/",
        description:
          "OffCampusJobs4u focuses on providing job opportunities for recent graduates and students looking for off-campus placements.",
      },
      {
        title: "FreshersNow",
        link: "https://www.freshersnow.com/",
        description:
          "FreshersNow is a platform offering job updates, placement papers, and government job opportunities for fresh graduates.",
      },
      {
        title: "Dice",
        link: "https://www.dice.com/",
        description:
          "Dice is a job board focusing on tech and IT jobs, offering listings for both full-time and freelance opportunities.",
      },
      {
        title: "Remote OK",
        link: "https://remoteok.com/",
        description:
          "Remote OK is a job board specializing in remote job opportunities across various industries.",
      },
      {
        title: "Remotive",
        link: "https://remotive.com/",
        description:
          "Remotive offers a curated list of remote job opportunities from companies around the world.",
      },
      {
        title: "FlexJobs",
        link: "https://www.flexjobs.com/homeVariant/desktopV2",
        description:
          "FlexJobs is a subscription-based job board specializing in remote, part-time, freelance, and flexible job opportunities.",
      },
      {
        title: "LinkUp",
        link: "https://www.linkup.com/",
        description:
          "LinkUp aggregates job listings directly from company websites, ensuring up-to-date and verified job postings.",
      },
      {
        title: "GetHired",
        link: "https://www.gethired365.com/",
        description:
          "GetHired is a job search platform focusing on remote and in-person opportunities across various sectors.",
      },
      {
        title: "Craigslist",
        link: "https://mumbai.craigslist.org/",
        description:
          "Craigslist is a classifieds website that also offers job listings in various categories for local job seekers.",
      },
      {
        title: "Snagajob",
        link: "https://www.snagajob.com/",
        description:
          "Snagajob specializes in hourly jobs, connecting workers with employers for part-time, full-time, and seasonal work.",
      },
      {
        title: "Google Jobs",
        link: "https://jobs.google.com/about/",
        description:
          "Google Jobs aggregates job listings from across the web, allowing users to find jobs directly through Google's search engine.",
      },
      {
        title: "The Ladders",
        link: "https://www.theladders.com/",
        description:
          "The Ladders offers job listings and career advice for professionals looking for high-paying roles in various industries.",
      },
      {
        title: "USA Jobs",
        link: "https://www.usajobs.gov/",
        description:
          "USA Jobs is the official job board of the United States government, providing job listings for federal employment.",
      },
      {
        title: "Job.com",
        link: "https://job.com/",
        description:
          "Job.com uses AI-driven job matching to help users find jobs tailored to their experience and skills.",
      },
      {
        title: "Engineering Jobs",
        link: "https://jobs.engineering.com/jobs/",
        description:
          "Engineering Jobs provides listings of job opportunities for engineering professionals across various disciplines.",
      },
      {
        title: "Joblist",
        link: "https://www.joblist.com/",
        description:
          "Joblist is a job search platform that allows users to browse job openings based on personalized recommendations.",
      },
      {
        title: "HerKey Jobs",
        link: "https://www.herkey.com/jobs",
        description:
          "HerKey is a job platform that offers career opportunities for women, helping them find jobs in various industries.",
      },
      {
        title: "Shine.com",
        link: "https://www.shine.com/new/job-search",
        description:
          "Shine.com is a job portal offering listings across various sectors, helping job seekers in India find employment.",
      },
      {
        title: "GrabJobs",
        link: "https://grabjobs.co/",
        description:
          "GrabJobs is a job portal that offers listings for both full-time and part-time opportunities in various sectors.",
      },
      {
        title: "Cutshort",
        link: "https://cutshort.io/",
        description:
          "Cutshort connects job seekers with companies looking for talent, focusing on tech and startup jobs.",
      },
      {
        title: "TimesJobs",
        link: "https://www.timesjobs.com/",
        description:
          "TimesJobs is a job portal offering listings across various industries and sectors, primarily focusing on the Indian job market.",
      },
      {
        title: "Jobsora",
        link: "https://jobsora.com/",
        description:
          "Jobsora aggregates job listings from various sources, offering a wide range of job opportunities across sectors.",
      },
      {
        title: "Quikr Jobs",
        link: "https://www.quikr.com/jobs",
        description:
          "Quikr Jobs offers local job listings across industries, helping job seekers in India find opportunities near them.",
      },
      {
        title: "Hirist",
        link: "https://www.hirist.com/",
        description:
          "Hirist is a platform offering tech job opportunities in fields like software development, data science, and more.",
      },
      {
        title: "Jooble",
        link: "https://in.jooble.org/",
        description:
          "Jooble is a job search engine that aggregates job listings from various job boards and company websites globally.",
      },
      {
        title: "FreshersWorld",
        link: "https://www.freshersworld.com/",
        description:
          "FreshersWorld is a job portal dedicated to helping fresh graduates find entry-level jobs, internships, and training programs.",
      },
      {
        title: "WorkIndia",
        link: "https://www.workindia.in/",
        description:
          "WorkIndia helps blue-collar workers and entry-level job seekers in India find employment opportunities in various industries.",
      },
      {
        title: "Snaphunt",
        link: "https://snaphunt.com/",
        description:
          "Snaphunt is a hiring platform that offers job listings and recruitment services for both remote and on-site roles.",
      },
      {
        title: "Internshala Jobs",
        link: "https://internshala.com/jobs/",
        description:
          "Internshala offers internships and entry-level job opportunities for students and freshers across various fields.",
      },
      {
        title: "Rozgar",
        link: "https://www.rozgar.com/",
        description:
          "Rozgar provides job opportunities across industries, focusing on helping job seekers in India find relevant roles.",
      },
      {
        title: "Mount Talent",
        link: "https://www.mounttalent.com/",
        description:
          "Mount Talent is a recruitment firm that helps job seekers find roles across various industries, including IT, HR, and more.",
      },
      {
        title: "Placement India",
        link: "https://www.placementindia.com/",
        description:
          "Placement India offers job listings for professionals and freshers, with opportunities across multiple sectors in India.",
      },
      {
        title: "National Career Service",
        link: "https://www.ncs.gov.in/",
        description:
          "National Career Service is a government-run job portal that provides listings and career services for job seekers in India.",
      },
      {
        title: "Asana Jobs",
        link: "https://asana.com/jobs/all",
        description:
          "Asana offers career opportunities within their company, helping professionals find jobs in tech, product management, and more.",
      },
      {
        title: "RemotePass",
        link: "https://www.remotepass.com/",
        description:
          "RemotePass offers remote job opportunities across various industries and sectors, helping companies hire globally.",
      },
      {
        title: "We Work Remotely",
        link: "https://weworkremotely.com/",
        description:
          "We Work Remotely is a job portal that lists remote job opportunities in tech, marketing, sales, and other sectors.",
      },
      {
        title: "MyGov Jobs",
        link: "https://www.mygov.in/work-at-mygov/",
        description:
          "MyGov Jobs provides job opportunities and internships for those interested in working with the Indian government.",
      },
      {
        title: "BECIL Vacancies",
        link: "https://www.becil.com/vacancies",
        description:
          "BECIL offers job opportunities for professionals looking for employment in the broadcasting and media industries.",
      },
      {
        title: "NITI Aayog Careers",
        link: "https://www.niti.gov.in/career/vacancy-circular",
        description:
          "NITI Aayog offers job opportunities and internships for those looking to work in the field of public policy and government planning.",
      },
      {
        title: "TN Private Jobs",
        link: "https://www.tnprivatejobs.tn.gov.in/",
        description:
          "TN Private Jobs offers job listings in the private sector for job seekers in the state of Tamil Nadu.",
      },
      {
        title: "Your Job Updates",
        link: "https://yourjobupdates.com/",
        description:
          "Your Job Updates provides job notifications, government job alerts, and career guidance for job seekers in India.",
      },
      {
        title: "Freelancer",
        link: "https://www.freelancer.com/",
        description:
          "Freelancer is a freelancing platform where businesses can hire independent professionals for various remote jobs.",
      },
      {
        title: "Fiverr",
        link: "https://www.fiverr.com/",
        description:
          "Fiverr is a marketplace for freelancers offering services across various categories, including digital marketing, writing, and design.",
      },
      {
        title: "NITI Aayog Work for India",
        link: "https://workforindia.niti.gov.in/erecruitment/niticon/Homefinal.aspx",
        description:
          "NITI Aayog's Work for India portal offers job opportunities for professionals looking to work in the field of public policy.",
      },
      {
        title: "Michael Page",
        link: "https://www.michaelpage.com/",
        description:
          "Michael Page is a global recruitment firm offering job listings across various industries and sectors.",
      },
      {
        title: "Majhi Naukri",
        link: "https://majhinaukri.in/",
        description:
          "Majhi Naukri is a job portal offering government job listings and employment news for job seekers in India.",
      },
      {
        title: "GitHub",
        link: "https://www.github.careers/careers-home",
        description:
          "GitHub offers career opportunities in software development, project management, and customer success, supporting open-source and developer communities worldwide.",
      },
    ],
    remote_job_portals: [
      {
        title: "Airbnb",
        link: "https://www.airbnb.com/",
        description:
          "Airbnb is an online marketplace offering accommodation and tourism experiences worldwide, connecting travelers with hosts for unique stays.",
      },
      {
        title: "Cisco",
        link: "https://www.cisco.com/",
        description:
          "Cisco is a global leader in networking, cybersecurity, and IT solutions, providing hardware and software for businesses to manage their network infrastructure.",
      },
      {
        title: "Shopify",
        link: "https://www.shopify.com/",
        description:
          "Shopify is an e-commerce platform that allows businesses to set up, run, and manage their online stores with customizable tools and integrations.",
      },
      {
        title: "GitLab",
        link: "https://about.gitlab.com/",
        description:
          "GitLab is a web-based DevOps platform that supports the full software development lifecycle, offering tools for version control, CI/CD, and collaboration.",
      },
      {
        title: "DigitalOcean",
        link: "https://www.digitalocean.com/",
        description:
          "DigitalOcean is a cloud infrastructure provider, offering scalable compute, storage, and networking resources for developers and startups.",
      },
      {
        title: "Revolut",
        link: "https://www.revolut.com/",
        description:
          "Revolut is a fintech company providing banking services like international money transfers, debit cards, and financial management tools.",
      },
      {
        title: "RemotePass",
        link: "https://www.remotepass.com/",
        description:
          "RemotePass provides remote work solutions for global companies, offering tools for remote hiring, payroll, and compliance management.",
      },
      {
        title: "QuillBot",
        link: "https://quillbot.com/",
        description:
          "QuillBot is an AI-powered writing and paraphrasing tool designed to assist users in rewriting, summarizing, and improving their written content.",
      },
      {
        title: "Level AI",
        link: "https://www.level.ai/",
        description:
          "Level AI provides AI-driven solutions for customer service, offering tools for conversation intelligence and workflow automation in customer support.",
      },
      {
        title: "Snapchat",
        link: "https://www.snapchat.com/",
        description:
          "Snapchat is a multimedia messaging app known for its ephemeral photo and video sharing, as well as its augmented reality filters and features.",
      },
      {
        title: "Uplers",
        link: "https://www.uplers.com/",
        description:
          "Uplers is a digital outsourcing company that offers hiring solutions, web development, and digital marketing services for global clients.",
      },

      {
        title: "Remote OK",
        link: "https://remoteok.com/",
        description:
          "Remote OK is a remote job board offering a wide range of remote positions in fields like tech, design, marketing, and customer support.",
      },
      {
        title: "Pangian",
        link: "https://pangian.co/",
        description:
          "Pangian is a job portal focused on remote work opportunities worldwide, connecting job seekers with roles in technology, marketing, and design.",
      },
      {
        title: "Wellfound (formerly AngelList Talent)",
        link: "https://wellfound.com/jobs",
        description:
          "Wellfound provides job opportunities at startups, including many remote positions, allowing candidates to connect directly with companies.",
      },
      {
        title: "Working Nomads",
        link: "https://workingnomads.com/",
        description:
          "Working Nomads curates remote job listings across industries, with roles in tech, sales, writing, and more, aimed at digital nomads.",
      },
      {
        title: "We Work Remotely",
        link: "https://weworkremotely.com/",
        description:
          "We Work Remotely is a job board for remote jobs, offering listings in fields like programming, marketing, and customer support.",
      },
      {
        title: "Remotive",
        link: "https://remotive.com/",
        description:
          "Remotive is a remote job platform providing curated listings in various fields, including software engineering, design, and customer service.",
      },
      {
        title: "Remote Hunt",
        link: "https://remotehunt.com/",
        description:
          "Remote Hunt offers a curated list of remote job opportunities across industries, helping users discover companies hiring remote talent.",
      },
      {
        title: "FlexJobs",
        link: "https://www.flexjobs.com/homeVariant/desktopV2",
        description:
          "FlexJobs is a subscription-based job platform specializing in remote, flexible, and freelance job opportunities across numerous industries.",
      },
      {
        title: "Remote.co",
        link: "https://remote.co/",
        description:
          "Remote.co offers remote job listings, career advice, and resources for both job seekers and employers interested in remote work.",
      },
      {
        title: "Arc.dev",
        link: "https://arc.dev/",
        description:
          "Arc.dev specializes in remote tech jobs, offering developers access to career opportunities, mentorship, and remote work resources.",
      },
      {
        title: "Working Nomads",
        link: "https://www.workingnomads.com/jobs",
        description:
          "Working Nomads offers curated remote job listings across diverse fields such as development, marketing, and customer service.",
      },
      {
        title: "Jobspresso",
        link: "https://jobspresso.co/",
        description:
          "Jobspresso is a remote job board offering hand-picked job listings in technology, marketing, customer support, and other fields.",
      },
      {
        title: "JS Remotely",
        link: "https://jsremotely.com",
        description:
          "JS Remotely is a niche job board dedicated to remote JavaScript roles, connecting developers with companies seeking remote talent.",
      },
      {
        title: "Pangian",
        link: "https://pangian.com/",
        description:
          "Pangian offers remote jobs for global digital nomads in fields like technology, creative, and marketing, along with a community for remote workers.",
      },
      {
        title: "JustRemote",
        link: "https://justremote.co/",
        description:
          "JustRemote is a job board focused on remote opportunities, with listings in tech, marketing, HR, and more for remote job seekers.",
      },
      {
        title: "Daily Remote",
        link: "https://dailyremote.com/",
        description:
          "Daily Remote provides remote job listings across various industries, along with resources to support remote job seekers.",
      },
      {
        title: "Jooble",
        link: "https://jooble.org/",
        description:
          "Jooble is a job search engine that aggregates listings from multiple job boards, including remote work opportunities worldwide.",
      },
      {
        title: "SAP Jobs",
        link: "https://jobs.sap.com/",
        description:
          "SAP Jobs lists career opportunities at SAP, including remote and hybrid roles in fields like tech, consulting, and management.",
      },
      {
        title: "RemoteWoman",
        link: "https://remotewoman.com/",
        description:
          "RemoteWoman is a job board featuring remote opportunities at companies committed to inclusive and flexible workplaces for women.",
      },
    ],
    companies: [
      {
        title: "Hexaware",
        link: "https://hexaware.com/",
        description:
          "Hexaware is a global IT and consulting services company offering digital solutions, cloud services, and business process automation to enhance operational efficiency.",
      },
      {
        title: "Gametion",
        link: "https://www.gametion.com/",
        description:
          "Gametion is a mobile game development company known for popular titles like 'Ludo King,' focusing on casual and board games for global audiences.",
      },
      {
        title: "Games2win",
        link: "https://www.games2win.com/",
        description:
          "Games2win is a gaming company that creates mobile games across genres like racing, fashion, and simulation, catering to millions of users worldwide.",
      },
      {
        title: "Gameberry Labs",
        link: "https://gameberrylabs.com/",
        description:
          "Gameberry Labs develops popular multiplayer games for mobile platforms, with a focus on creating engaging and interactive social experiences.",
      },
      {
        title: "Moloco",
        link: "https://www.moloco.com/",
        description:
          "Moloco provides machine learning and data-driven solutions for mobile advertisers, enabling them to optimize ad campaigns and user engagement on a large scale.",
      },
      {
        title: "AppsFlyer",
        link: "https://www.appsflyer.com/",
        description:
          "AppsFlyer is a mobile marketing analytics and attribution platform, helping marketers measure, optimize, and secure their mobile ad campaigns.",
      },
      {
        title: "Automattic",
        link: "https://automattic.com/",
        description:
          "Automattic is the company behind WordPress.com, WooCommerce, and other web tools, focusing on open-source publishing and online commerce solutions.",
      },
      {
        title: "GitLab",
        link: "https://about.gitlab.com/",
        description:
          "GitLab is a DevOps platform offering tools for the entire software development lifecycle, including version control, CI/CD, and collaboration.",
      },
      {
        title: "Crossover",
        link: "https://www.crossover.com/",
        description:
          "Crossover specializes in finding top global talent for high-skill remote positions across tech, finance, and operations, utilizing a rigorous selection process.",
      },
      {
        title: "Kraken",
        link: "https://www.kraken.com/",
        description:
          "Kraken is a leading cryptocurrency exchange offering a secure platform for buying, selling, and trading various digital assets.",
      },
      {
        title: "Chainlink Labs",
        link: "https://chain.link/",
        description:
          "Chainlink Labs develops Chainlink, a decentralized oracle network that securely connects blockchain-based smart contracts to external data sources.",
      },
      {
        title: "Invisible",
        link: "https://www.inv.tech/",
        description:
          "Invisible provides outsourced business solutions through digital and human workflows, supporting various industries with scalable task automation.",
      },
      {
        title: "Finixio",
        link: "https://www.finixio.com/",
        description:
          "Finixio is a digital media company operating in finance, trading, and technology, offering informational websites and content marketing services.",
      },
      {
        title: "Oyster",
        link: "https://www.oysterhr.com/",
        description:
          "Oyster is an HR platform for global hiring, providing tools for remote workforce management, compliance, and payroll for distributed teams.",
      },
      {
        title: "InVision",
        link: "https://www.invisionapp.com/",
        description:
          "InVision is a design collaboration platform that enables teams to prototype, collaborate, and manage digital product design workflows.",
      },
      {
        title: "FluentU",
        link: "https://www.fluentu.com/",
        description:
          "FluentU is an online language learning platform using real-world videos, interactive subtitles, and quizzes to teach various languages.",
      },
      {
        title: "Arcesium",
        link: "https://www.arcesium.com/careers#open-positions",
        description:
          "Arcesium offers career opportunities in technology and finance, providing advanced solutions for asset managers and financial institutions.",
      },
      {
        title: "Coinbase",
        link: "https://www.coinbase.com/careers/positions",
        description:
          "Coinbase is a leading cryptocurrency exchange offering career opportunities in technology, compliance, and finance for blockchain enthusiasts.",
      },
      {
        title: "Adidas",
        link: "https://careers.adidas-group.com/",
        description:
          "Adidas offers global career opportunities in sportswear, fashion, and retail, with roles in design, marketing, and operations.",
      },
      {
        title: "Nikon",
        link: "https://www.nikon.com/about/employment/",
        description:
          "Nikon provides career paths in imaging and optics technology, offering roles in engineering, research, and innovation.",
      },
      {
        title: "EaseMyTrip",
        link: "https://www.easemytrip.com/careers.html",
        description:
          "EaseMyTrip offers career opportunities in travel and technology, providing a platform for innovation in the travel industry.",
      },
      {
        title: "Google",
        link: "https://careers.google.com/",
        description:
          "Google offers career paths across engineering, research, marketing, and more, with roles that drive technology and innovation globally.",
      },
      {
        title: "Agoda",
        link: "https://careersatagoda.com/",
        description:
          "Agoda provides career opportunities in travel technology, specializing in roles for software development, analytics, and customer support.",
      },
      {
        title: "Shiprocket",
        link: "https://www.shiprocket.in/careers/",
        description:
          "Shiprocket offers career opportunities in e-commerce logistics and technology, with roles in software, data, and customer solutions.",
      },
      {
        title: "Marks and Spencer",
        link: "https://jobs.marksandspencer.com/",
        description:
          "Marks and Spencer provides career opportunities in retail, management, and customer service, with roles aimed at innovation in retail.",
      },
      {
        title: "Housing.com",
        link: "https://housing.com/careers",
        description:
          "Housing.com offers career paths in real estate technology, with roles focused on innovation in property listings and client solutions.",
      },
      {
        title: "Accenture",
        link: "https://www.accenture.com/us-en/careers",
        description:
          "Accenture provides career opportunities across consulting, technology, and business operations with a focus on digital transformation.",
      },
      {
        title: "Twilio",
        link: "https://www.twilio.com/en-us/company/jobs",
        description:
          "Twilio offers careers in cloud communications, providing roles in software development, customer support, and operations.",
      },
      {
        title: "Incedo",
        link: "https://career44.sapsf.com/career?company=incedotech",
        description:
          "Incedo offers career opportunities in digital transformation and consulting, with roles across technology and business innovation.",
      },
      {
        title: "Centric Consulting",
        link: "https://centricconsulting.com/about-us/careers/",
        description:
          "Centric Consulting provides career paths in business consulting, digital transformation, and operational strategy.",
      },
      {
        title: "Gojek",
        link: "https://www.gojek.io/careers",
        description:
          "Gojek offers diverse career opportunities in Southeast Asia’s leading on-demand platform for services, payments, and logistics.",
      },
      {
        title: "GoDaddy",
        link: "https://careers.godaddy/jobs/search",
        description:
          "GoDaddy provides career paths in web hosting, domain services, and customer solutions, with roles in engineering and operations.",
      },
      {
        title: "Evalueserve",
        link: "https://www.evalueserve.com/jobs/",
        description:
          "Evalueserve offers career opportunities in data analytics, AI, and business solutions across various industries.",
      },
      {
        title: "Tata Steel",
        link: "https://tslhr.tatasteel.co.in/recruit/",
        description:
          "Tata Steel provides career paths in manufacturing, engineering, and business management within the steel industry.",
      },
      {
        title: "HCLTech",
        link: "https://www.hcltech.com/careers",
        description:
          "HCLTech offers global career opportunities in technology and business services, including software development and digital transformation.",
      },
      {
        title: "NPCI",
        link: "https://career.npci.org.in/",
        description:
          "NPCI provides career opportunities in digital payments and fintech, supporting India's payment infrastructure and innovation.",
      },
      {
        title: "Finiq",
        link: "https://www.finiq.com/careers",
        description:
          "Finiq offers career opportunities in financial technology, with roles focused on software solutions for the banking and financial sector.",
      },
      {
        title: "Enzo",
        link: "http://enzoteam.com/",
        description:
          "Enzo is a technology company offering career opportunities in software development and innovation for digital solutions.",
      },
      {
        title: "SoulHQ",
        link: "https://app.soulhq.ai/",
        description:
          "SoulHQ provides career paths in AI-driven solutions for social impact and digital engagement.",
      },
      {
        title: "OptimHire",
        link: "https://optimhire.com/",
        description:
          "OptimHire offers career opportunities in remote talent solutions, connecting tech professionals with job opportunities worldwide.",
      },
      {
        title: "RevX",
        link: "https://revx.io/",
        description:
          "RevX provides career opportunities in mobile marketing, offering roles in data analytics and digital advertising technology.",
      },
      {
        title: "Redis",
        link: "https://redis.io/",
        description:
          "Redis Labs offers career paths in open-source database management and cloud solutions, with roles in engineering and support.",
      },
      {
        title: "Lilly",
        link: "https://careers.lilly.com/us/en",
        description:
          "Lilly offers global career opportunities in pharmaceutical research and healthcare solutions, with roles in R&D and business operations.",
      },
      {
        title: "Ensono",
        link: "https://www.ensono.com/company/careers/jobs-board/",
        description:
          "Ensono provides career paths in cloud and IT services, offering roles in infrastructure management and digital transformation.",
      },
      {
        title: "Atlassian",
        link: "https://www.atlassian.com/company/careers/all-jobs",
        description:
          "Atlassian offers global career opportunities in software development and collaboration tools for teams, including roles in engineering and support.",
      },
      {
        title: "HSBC",
        link: "https://www.hsbc.com/careers",
        description:
          "HSBC provides career opportunities in banking, finance, and digital transformation across global markets.",
      },
      {
        title: "Optum",
        link: "https://www.optum.in/about/careers.html",
        description:
          "Optum offers career paths in healthcare technology, data analytics, and health services, supporting better health outcomes globally.",
      },
      {
        title: "Oportun",
        link: "https://oportun.com/careers/#current-openings",
        description:
          "Oportun provides career opportunities in finance and technology, focused on affordable credit and lending solutions.",
      },
      {
        title: "Canonical",
        link: "https://canonical.com/careers",
        description:
          "Canonical provides career paths in open-source software, including development roles for Ubuntu and cloud solutions.",
      },
      {
        title: "Scrut",
        link: "https://scrut.freshteam.com/jobs?location=[]&department=[]&jobType=[%222%22]&title=&isRemoteLocation=true",
        description:
          "Scrut offers career opportunities in compliance automation, security, and technology solutions for enterprises.",
      },
      {
        title: "Astellas",
        link: "https://astellascareers.jobs/jobs/",
        description:
          "Astellas provides career opportunities in pharmaceutical research and healthcare innovation, with roles in R&D and support.",
      },
      {
        title: "Revolut",
        link: "https://www.revolut.com/en-IN/careers/",
        description:
          "Revolut offers career paths in fintech, providing roles in app development, finance, and customer support.",
      },
      {
        title: "Level AI",
        link: "https://levelal.com/",
        description:
          "Level AI provides career opportunities in artificial intelligence and customer service solutions, with a focus on natural language processing.",
      },
      {
        title: "Stripe",
        link: "https://stripe.com/jobs/search?remote_locations=Asia+Pacific—India+Remote",
        description:
          "Stripe offers career paths in financial technology, with roles in software development, payment solutions, and business operations.",
      },
      {
        title: "Twilio",
        link: "https://boards.greenhouse.io/twilio",
        description:
          "Twilio offers global career opportunities in communications technology, providing roles in software engineering and support.",
      },
      {
        title: "Nagarro",
        link: "https://www.nagarro.com/en/careers",
        description:
          "Nagarro provides career paths in digital engineering and technology consulting, offering roles in development and client services.",
      },
      {
        title: "Upwork",
        link: "https://www.upwork.com/careers/jobs/explore",
        description:
          "Upwork provides career opportunities in freelancing and remote work, supporting the gig economy across industries.",
      },
      {
        title: "Docusign",
        link: "https://careers.docusign.com/jobs?locationType=ANY&page=1",
        description:
          "Docusign offers career paths in e-signature and digital agreement solutions, with roles in software development and support.",
      },
    ],
    staffing_agencies: [
      {
        title: "Randstad",
        link: "https://www.randstad.in/applicants/",
        description:
          "Randstad provides recruitment services, connecting job seekers with opportunities across various industries.",
      },
      {
        title: "Adecco",
        link: "https://www.adecco.com/",
        description:
          "Adecco is a global staffing agency that offers job placements in various fields, including temporary and permanent roles.",
      },
      {
        title: "Kelly Services",
        link: "https://www.kellyservices.com/",
        description:
          "Kelly Services offers a range of staffing solutions, matching candidates with jobs in fields like science, technology, and education.",
      },
      {
        title: "Manpower",
        link: "https://www.manpower.com/",
        description:
          "Manpower provides workforce solutions, including temporary, contract, and permanent job placements across multiple sectors.",
      },
      {
        title: "Robert Half",
        link: "https://www.roberthalf.com/",
        description:
          "Robert Half specializes in professional staffing, offering job opportunities in finance, technology, and creative fields.",
      },
      {
        title: "Insight Global",
        link: "https://www.insightglobal.com/",
        description:
          "Insight Global is a staffing agency that connects professionals with opportunities in IT, finance, and engineering.",
      },
      {
        title: "Allegis Group",
        link: "https://www.allegisgroup.com/",
        description:
          "Allegis Group provides staffing solutions and talent management, with job opportunities across industries worldwide.",
      },
      {
        title: "Hays",
        link: "https://www.hays.com/",
        description:
          "Hays specializes in recruitment for professionals in IT, construction, and healthcare, offering global staffing solutions.",
      },
      {
        title: "Roth Staffing",
        link: "https://www.rothstaffing.com/",
        description:
          "Roth Staffing connects job seekers with positions in administration, finance, and technology through its specialized divisions.",
      },
      {
        title: "Integrity Staffing Solutions",
        link: "https://www.integritystaffing.com/",
        description:
          "Integrity Staffing Solutions provides job opportunities in logistics, warehouse management, and administrative support.",
      },
      {
        title: "Creative Circle",
        link: "https://www.creativecircle.com/",
        description:
          "Creative Circle is a staffing agency that connects creative professionals with freelance and full-time opportunities.",
      },
      {
        title: "Cornerstone Staffing Solutions",
        link: "https://www.cornerstonestaffing.com/",
        description:
          "Cornerstone Staffing Solutions offers job placements in light industrial, administrative, and technical roles.",
      },
      {
        title: "Atrium",
        link: "https://www.atriumstaff.com/",
        description:
          "Atrium provides staffing services for job seekers in administration, finance, and marketing roles across various industries.",
      },
    ],
  };
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Job Search Directory
      </h1>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search portals, companies, or agencies..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="job_portals" className="w-full">
        <TabsList className="flex justify-center mb-6 bg-blue-50 p-1 rounded-lg">
          <TabsTrigger
            value="job_portals"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Briefcase className="w-4 h-4" />
            Job Portals
          </TabsTrigger>
          <TabsTrigger
            value="remote_job_portals"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Globe className="w-4 h-4" />
            Remote Jobs
          </TabsTrigger>
          <TabsTrigger
            value="companies"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Building className="w-4 h-4" />
            Companies
          </TabsTrigger>
          <TabsTrigger
            value="staffing_agencies"
            className="flex items-center gap-2 px-4 py-2"
          >
            <Users className="w-4 h-4" />
            Agencies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="job_portals">
          <GridSection items={portals.job_portals} />
        </TabsContent>
        <TabsContent value="remote_job_portals">
          <GridSection items={portals.remote_job_portals} />
        </TabsContent>
        <TabsContent value="companies">
          <GridSection items={portals.companies} />
        </TabsContent>
        <TabsContent value="staffing_agencies">
          <GridSection items={portals.staffing_agencies} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobPortals;
