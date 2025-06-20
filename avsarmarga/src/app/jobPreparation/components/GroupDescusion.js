import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Target,
  List,
  LightbulbIcon,
  BookOpenCheck,
  Newspaper,
  Youtube,
  Globe,
  Book,
  Smartphone,
  Users2,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { CgBrowser } from "react-icons/cg";
import YouTube from "react-youtube";
import { AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";
import service from "../../../../config/service";
import { Button } from "@/components/ui/button";

const GroupDiscussion = () => {
  const [videoId, setVideoId] = useState("dDlyfBS96S4");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const YoutubeVideo = async () => {
    const response = await service.getVideos(`Group Discussion`);
    if (response && response.length > 0) {
      setVideoId(response[0]?.id?.videoId);
    } else {
      console.log("errror");
    }
  };

  const gd = {
    GroupDiscussion: {
      Overview: {
        Description:
          "Group Discussion (GD) rounds are a common component in various selection processes, particularly for job interviews and educational admissions.",
        Process: [
          {
            Step: 1,
            Action: "Introduction",
            Details: "Participants introduce themselves briefly.",
          },
          {
            Step: 2,
            Action: "Topic Announcement",
            Details:
              "A topic is presented by the moderator, which can cover current affairs, abstract ideas, or social issues.",
          },
          {
            Step: 3,
            Action: "Preparation Time",
            Details:
              "Candidates are given a brief period (1-2 minutes) to gather their thoughts.",
          },
          {
            Step: 4,
            Action: "Discussion",
            Details:
              "Participants share their viewpoints, engaging with each other while demonstrating active listening and logical reasoning.",
          },
        ],
      },
      KeyAttributesAssessed: [
        {
          Attribute: "Communication Skills",
          Description:
            "Clarity and conciseness in expressing ideas are crucial.",
        },
        {
          Attribute: "Teamwork",
          Description:
            "The ability to collaborate and respect others' viewpoints is essential.",
        },
        {
          Attribute: "Leadership Qualities",
          Description:
            "Candidates should demonstrate the capacity to guide discussions and encourage participation.",
        },
        {
          Attribute: "Analytical Skills",
          Description:
            "Evaluators assess how well candidates can analyze information and construct reasoned arguments.",
        },
        {
          Attribute: "Problem-Solving Abilities",
          Description:
            "The ability to identify issues and propose solutions is critical.",
        },
      ],
      CommonTopicsForGD: [
        "The impact of technology on society",
        "Climate change and environmental conservation",
        "Gender equality in the workplace",
        "The role of social media in modern communication",
        "Education system reforms",
        "Impact of COVID-19 on the economy",
        "Climate change and its effects",
        "Recent political events (e.g., elections, policies)",
        "Gender equality in the workplace",
        "Poverty alleviation strategies",
        "Artificial Intelligence and its impact on jobs",
        "The future of work in a digital age",
        "Cybersecurity and data privacy concerns",
        "Startups vs. traditional businesses",
        "The gig economy: benefits and challenges",
      ],
      PreparationTips: [
        {
          Tip: 1,
          Advice: "Stay Informed",
          Details:
            "Regularly read news articles to stay updated on current affairs and trending topics.",
        },
        {
          Tip: 2,
          Advice: "Practice Articulation",
          Details:
            "Rehearse speaking clearly and confidently about various subjects.",
        },
        {
          Tip: 3,
          Advice: "Engage in Mock Discussions",
          Details:
            "Participate in practice sessions to build confidence and receive constructive feedback.",
        },
        {
          Tip: 4,
          Advice: "Time Management",
          Details:
            "Be mindful of balancing speaking time with listening to others.",
        },
        {
          Tip: 5,
          Advice: "Build Knowledge on Diverse Topics",
          Details:
            "Research and gain knowledge on topics related to business, politics, technology, education, economy, and social issues. GDs may cover any of these areas, so a broad understanding is essential.",
        },
        {
          Tip: 6,
          Advice: "Improve Communication Skills",
          Details:
            "Practice speaking clearly and confidently. Work on articulation and ensure that your thoughts are structured well when speaking in a group.",
        },
        {
          Tip: 7,
          Advice: "Develop Analytical Thinking",
          Details:
            "Learn to break down topics into key points and think critically about them. Focus on understanding all sides of an argument to contribute well-rounded perspectives during the GD.",
        },
        {
          Tip: 8,
          Advice: "Practice Mock GDs",
          Details:
            "Simulate real GDs with friends or peers. Choose random topics, set a time limit, and practice speaking in a group setting. This will help in building confidence and refining your approach.",
        },
        {
          Tip: 9,
          Advice: "Learn Group Etiquette",
          Details:
            "Familiarize yourself with group discussion etiquette such as respecting others' opinions, avoiding interruptions, and maintaining a balanced tone. These behaviors are critical in making a good impression.",
        },
        {
          Tip: 10,
          Advice: "Practice Non-Verbal Communication",
          Details:
            "Work on positive body language, such as maintaining eye contact, sitting confidently, and using gestures appropriately. Avoid slouching, fidgeting, or looking disengaged.",
        },
      ],
      resources: [
        {
          title: "Newspapers and Magazines",
          description:
            "Reading newspapers like The Hindu, The Times of India, and magazines such as The Economist and Business Today will keep you updated on current affairs, economy, politics, and business trends.",
        },
        {
          title: "Online News Platforms",
          description:
            "Use platforms like BBC News, Al Jazeera, NDTV, and Reuters for daily updates on global and national events. Apps like Inshorts also offer quick summaries of the news.",
        },
        {
          title: "YouTube Channels",
          description:
            "Channels such as StudyIQ, Unacademy, and TEDx Talks offer GD tips, communication techniques, and insights into a wide range of topics that can be useful for discussions.",
        },
        {
          title: "Online Forums and GD Preparation Websites",
          description:
            "Websites like Pagalguy, CareerRide, and Group Discussion Ideas provide curated GD topics, sample discussions, and preparation tips specifically for MBA and job interviews.",
        },
        {
          title: "Books on Group Discussions and Communication",
          description: [
            {
              book: "How to Win Friends and Influence People",
              author: "Dale Carnegie",
              description:
                "This classic book helps improve communication and interpersonal skills, which are essential for group discussions.",
            },
            {
              book: "GD/PI Book for CAT and MBA Aspirants",
              author: "Arun Sharma",
              description:
                "A popular book among MBA aspirants that focuses on Group Discussions, Personal Interviews, and other selection processes.",
            },
          ],
        },
        {
          title: "Mobile Apps",
          description: [
            {
              app: "Inshorts",
              description:
                "Provides concise news updates, helping you stay informed on current events in a short span of time.",
            },
            {
              app: "TED",
              description:
                "Offers talks on various subjects, expanding your knowledge and providing you with unique ideas for group discussions.",
            },
          ],
        },
        {
          title: "GD Practice Groups",
          description:
            "Join practice groups either online (Facebook groups or LinkedIn) or offline with peers. Websites like Meetup or university clubs also provide opportunities for GD practice.",
        },
        {
          title: "MOOCs and Online Courses",
          description: [
            {
              platform: "Coursera",
              courses: [
                "Effective Communication: Writing, Design, and Presentation",
                "Critical Thinking Skills for Problem Solving",
              ],
            },
            {
              platform: "Udemy",
              courses: [
                "Public Speaking and Presentation Skills",
                "Group Discussion Preparation: Techniques and Practice",
              ],
            },
          ],
        },
      ],
      group_discussion_websites: [
        {
          name: "CareerRide",
          url: "https://www.careerride.com",
          description:
            "Offers a variety of GD topics, tips, and interview preparation resources, including sample GDs and common discussion points.",
        },
        {
          name: "StudyChaCha",
          url: "http://studychacha.com",
          description:
            "Provides a list of GD topics, insights on GD techniques, and tips on how to approach different discussion scenarios.",
        },
        {
          name: "Group Discussion Topics",
          url: "https://www.groupdiscussiontopics.com",
          description:
            "A dedicated platform for GD topics, including detailed descriptions and suggested points for discussion on various themes.",
        },
        {
          name: "IndiaBix",
          url: "https://www.indiabix.com/group-discussion/",
          description:
            "Features a section on GD topics with various categories, along with tips and techniques for effective participation in discussions.",
        },
        {
          name: "PrepUp",
          url: "https://prepup.com",
          description:
            "Offers resources for GD preparation, including expert articles, practice sessions, and forums for discussing various topics.",
        },
        {
          name: "Mock GD",
          url: "https://www.mockgd.com",
          description:
            "Provides mock GD sessions, video discussions, and a community platform for students to practice and improve their GD skills.",
        },
        {
          name: "PlacementPapers",
          url: "https://placementpapers.net",
          description:
            "A comprehensive resource for placement preparation, including GD topics, interview questions, and company-specific insights.",
        },
        {
          name: "Edureka",
          url: "https://www.edureka.co",
          description:
            "Features articles and blogs on GD preparation, including strategies and common mistakes to avoid during discussions.",
        },
        {
          name: "YourStory",
          url: "https://yourstory.com",
          description:
            "Offers insights on entrepreneurship and business discussions, which can be useful for GD topics related to business and startups.",
        },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning",
          description:
            "Provides various courses on communication, teamwork, and discussion skills, which can help enhance GD performance.",
        },
      ],
    },
  };

  const ResourceIcon = ({ title }) => {
    switch (title) {
      case "Newspapers and Magazines":
        return <Newspaper className="w-6 h-6" />;
      case "Online News Platforms":
        return <Globe className="w-6 h-6" />;
      case "YouTube Channels":
        return <Youtube className="w-6 h-6" />;
      case "Online Forums and GD Preparation Websites":
        return <Users2 className="w-6 h-6" />;
      case "Books on Group Discussions and Communication":
        return <Book className="w-6 h-6" />;
      case "Mobile Apps":
        return <Smartphone className="w-6 h-6" />;
      case "GD Practice Groups":
        return <Users className="w-6 h-6" />;
      case "MOOCs and Online Courses":
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <BookOpenCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Group Discussion Guide
          </h1>
          <p className="text-blue-600 text-lg max-w-3xl mx-auto">
            {gd.GroupDiscussion.Overview.Description}
          </p>
        </div>

        {/* youtube video */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <AiOutlineYoutube />
              Youtube Video
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <YouTube videoId={videoId} opts={opts} />
            </div>
            <Button
              className="mt-2"
              onClick={() => YoutubeVideo()}
              variant="outline"
            >
              Change video
            </Button>
          </CardContent>
        </Card>

        {/* Process Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <List />
              Process Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {gd.GroupDiscussion.Overview.Process.map((step) => (
                <div
                  key={step.Step}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-xl font-semibold text-blue-800 mb-2">
                    Step {step.Step}: {step.Action}
                  </div>
                  <p className="text-blue-600">{step.Details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Attributes Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <Target />
              Key Attributes Assessed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gd.GroupDiscussion.KeyAttributesAssessed.map((attr, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-xl font-semibold text-blue-800 mb-2">
                    {attr.Attribute}
                  </div>
                  <p className="text-blue-600">{attr.Description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preparation Tips Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <LightbulbIcon />
              Preparation Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {gd.GroupDiscussion.PreparationTips.map((tip) => (
                <div
                  key={tip.Tip}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-xl font-semibold text-blue-800 mb-2">
                    {tip.Tip}. {tip.Advice}
                  </div>
                  <p className="text-blue-600">{tip.Details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <BookOpenCheck />
              Learning Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gd.GroupDiscussion.resources.map((resource, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <ResourceIcon title={resource.title} />
                    <h3 className="text-xl font-semibold text-blue-800">
                      {resource.title}
                    </h3>
                  </div>
                  {Array.isArray(resource.description) ? (
                    <div className="space-y-3">
                      {resource.description.map((item, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-blue-300 pl-3"
                        >
                          {item.book || item.app || item.platform ? (
                            <div>
                              <h4 className="font-semibold text-blue-700">
                                {item.book || item.app || item.platform}
                              </h4>
                              {item.author && (
                                <p className="text-blue-600 text-sm">
                                  by {item.author}
                                </p>
                              )}
                              {item.courses ? (
                                <ul className="list-disc list-inside text-blue-600 mt-2">
                                  {item.courses.map((course, i) => (
                                    <li key={i} className="ml-4">
                                      {course}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-blue-600 mt-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-blue-600">{resource.description}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* website resources */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <CgBrowser />
              Websites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gd.GroupDiscussion.group_discussion_websites.map(
                (topic, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                  >
                    <p className="text-blue-800 text-lg font-bold">
                      <Link href={topic.url}>{topic.name}</Link>
                    </p>
                    <p className="text-blue-700 ">{topic.description}</p>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>

        {/* Common Topics Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800 text-2xl">
              <BookOpen />
              Common Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gd.GroupDiscussion.CommonTopicsForGD.map((topic, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:shadow-md transition-shadow"
                >
                  <p className="text-blue-700 text-lg">{topic}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GroupDiscussion;
