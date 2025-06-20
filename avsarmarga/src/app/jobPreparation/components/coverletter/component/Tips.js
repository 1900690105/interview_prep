import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

function Tips() {
  const [expandedTip, setExpandedTip] = useState(null);

  const tip = {
    winning_ways_to_start_cover_letter: [
      {
        method: "Mention a contact within the company",
        description:
          "If you were referred by a former coworker, classmate, or friend who’s highly regarded in their company, mention their name in the opening sentence of your cover letter for some immediate credibility.",
        example: {
          title: "Well-Connected",
          text: "Upon learning about the social media manager opportunity at StarWon through my former colleague, Jennifer Henderson, I was thrilled by the prospect of joining your dynamic team. Jennifer and I collaborated closely during my two years at Turbofun, where we successfully executed eight high-impact social media projects. I’ve heard great things about the work being done at StarWon, and I’m confident my skills and experience would make me an excellent asset to your team.",
        },
      },
      {
        method: "Express enthusiasm for the role",
        description:
          "Employers love candidates who care about their work. They want to see that your passions align with the responsibilities associated with the role.",
        example: {
          title: "Passionate",
          text: "My senior year of high school, I saved up for nearly a year to buy the first generation Oculus Rift headset — my parents thought I was nuts. But ever since, I’ve been obsessed with the potential of virtual reality technology and have been thrilled to see its presence grow in our changing media industry. That’s why I’m excited for the opportunity to put my passion for VR to work as an Engineer at NextGen VR Corp, and help build the future of virtual reality technology.",
        },
      },
      {
        method: "Show your excitement about the company’s work",
        description:
          "If you’re genuinely excited about a company’s brand, its mission statement, or its products, highlight this excitement in your cover letter introduction. Relate your personal mission statement to the company’s mission to show that your goals align with theirs.",
        example: {
          title: "Excited",
          text: "As a long-term admirer of the contributions to solar panel technology being made by your team at GreenWays Engineering, I’m excited to submit my application for the open entry-level technician position posted on your site. As a recent graduate from the University of Rochester with a B.S. in Environmental Engineering, I’m confident that my knowledge of PV systems, practical experience performing energy modeling assessments, and precise attention to detail will make me an asset at GreenWays.",
        },
      },
      {
        method: "Impress employers with a relevant accomplishment",
        description:
          "The best cover letters demonstrate a candidate’s expertise. If you already have experience in your field, start your cover letter by noting a professional achievement that showcases a meaningful contribution at a previous workplace.",
        example: {
          title: "Accomplished",
          text: "With over six years of diverse accounting experience under my belt, I’ve cultivated a strong foundation in financial management and cost reduction strategies, enabling me to make a substantial impact on any team. For instance, during my tenure at Smith Johnson & Sons, I balanced a $400,000 budget while reducing costs by 20% for a client. I’m eager to bring my attention to detail and analytical abilities to the Senior Accountant role at Walker & Company and achieve similar results while further enhancing my expertise.",
        },
      },
      {
        method: "Acknowledge a career change",
        description:
          "Writing a career change cover letter can be daunting when you’re up against more experienced applicants. The key to winning over hiring managers is to demonstrate how your skills and experience transfer to your target job.",
        example: {
          title: "Resourceful",
          text: "As a self-taught makeup artist, I’m most fulfilled when I’m practicing makeup techniques at my full time role as a certified nursing assistant — for years I’ve honed my skills and made my patients feel beautiful, whether for special occasions or as part of our daily care routine. Inspired by your brand’s commitment to centering women over 50, I’d love to bring my eye for aesthetics, empathy, and incredibly steady hand to your team as I transition to my dream career.",
        },
      },
      {
        method: "Demonstrate what you can do for the company",
        description:
          "To catch their attention, use the opening lines of your cover letter to highlight either a problem you can help them tackle, or any specific hard or soft skills you have to offer.",
        example: {
          title: "Helpful",
          text: "I’m writing to apply for the Software Engineer role at Jasper Development. With over five years of experience as a backend engineer, I’m confident that my expertise would allow me to become an immediate contributor to the team at Jasper. Specifically, I understand that Jasper is looking to expand their services in cloud computing. At my previous job, I spearheaded a new cloud computing project that generated a 15% revenue increase. The Software Engineer role at Jasper would be an exciting opportunity for me to help your team build up the company’s cloud computing capacity while continuing to hone my skills in this area.",
        },
      },
      {
        method: "Be direct",
        description:
          "Hiring managers are busy people, and often don’t have time to read each applicant’s cover letter thoroughly. To make sure your application isn’t overlooked, write a short cover letter that gets straight to the point in the opening lines.",
        example: {
          title: "Direct",
          text: "I’m writing to apply for the restaurant manager position at La Fare Bistro. With more than eight years in the restaurant industry as a host, server, and manager, I’m confident that my expertise aligns closely with the responsibilities required of the restaurant manager position.",
        },
      },
      {
        method: "Reference industry trends or recent news",
        description:
          "Mention recent trends in the field or give your take on relevant news that will impact the business.",
        example: {
          title: "Informed",
          text: "As a passionate follower of the biotechnology sector, I was thrilled to read about Sinom Innovations’ recent breakthrough in risk reduction through personalized medicine. As a seasoned biomedical engineer with a 10+ year background in genetics and data analysis, I’d love to bring my experience in planning customized treatments to Sinom’s mission of revolutionizing patient care.",
        },
      },
      {
        method: "Lead with an impressive statistic",
        description:
          "Hiring managers love to see concrete proof of your achievements. Win them over right away by including a statistic that shows off your abilities in the opening sentence of your cover letter.",
        example: {
          title: "Skillful",
          text: "In my previous role as a marketing manager at Oracle Solutions, I led a team that achieved a 45% increase in lead generation within the first six months, surpassing our annual target. Recognizing that Apex Digital’s commitment to driving growth through innovative marketing strategies aligns perfectly with my own professional experience and skills, I am eager to explore the possibility of joining your company. I’d love to use my experience developing and executing successful marketing campaigns to contribute to the continued success of Apex.",
        },
      },
      {
        method: "Use humor (if appropriate)",
        description:
          "Injecting humor into your cover letter opening is an effective way to add personality to your application and catch the hiring manager’s attention.",
        example: {
          title: "Creative",
          text: "As an online native who’s obsessed (yes, obsessed) with the GoGourmet app, I was thrilled to see your listing for the Social Media Manager position at GoGourmet Studios. Before I started watching GoGourmet’s content, I didn’t know the difference between a ham steak and a lamb shank. While I still may not be much of a chef, I would consider myself something of a social media sommelier. With over three years of professional experience as an online brand manager under my belt, I’m confident my adaptability and hands-on branding experience would make me the ideal candidate to help GoGourmet expand their online presence and user base.",
        },
      },
      {
        method: "Explain how you were introduced to the company",
        description:
          "If you’re applying to a company whose work you’re already familiar with, sharing your personal experience is one way to establish an immediate connection.",
        example: {
          title: "Devoted",
          text: "When I lived on Park Street, the smell of your bagels baking made me a morning person — and a loyal customer. Before long, I was recommending Bo’s Bagels to strangers on the street. 3 years later, I’m sure you can imagine how thrilled I was to discover an open position at Bo’s as an advertising specialist. I’ve directed successful campaigns for a range of small businesses in the community — most recently increasing foot traffic at a local farmer’s market by 35% — and I’m confident my expertise will help establish Bo’s Bagels as the community staple it deserves to be.",
        },
      },
      {
        method: "Start with a unique skill",
        description:
          "If you have an uncommon skill that sets you apart from other applicants, your cover letter introduction is a great place to mention it.",
        example: {
          title: "Talented",
          text: "Growing up trilingual and deeply connected to both my Spanish and Arabic-speaking sides of the family, I’ve been lucky enough to participate in a truly multicultural society. When I learned about Borderless Inc.’s dedication to bridging cultural gaps through expert translation and localization services, I knew I’d found the perfect opportunity to leverage my unique language skills as a translator on your team. I’d love to bring my expertise in intercultural communication to Borderless Inc., and help make your services even more accessible to diverse populations.",
        },
      },
    ],
  };

  const toggleTip = (index) => {
    if (expandedTip === index) {
      setExpandedTip(null);
    } else {
      setExpandedTip(index);
    }
  };

  return (
    <div className=" p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Winning Ways to Start Your Cover Letter
          </h1>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <BookOpen className="w-5 h-5" />
            <p className="text-lg">12 Professional Tips for Success</p>
          </div>
        </div>

        <div className="grid gap-4">
          {tip.winning_ways_to_start_cover_letter.map((item, index) => (
            <Card
              key={index}
              className={`transition-all duration-200 ${
                expandedTip === index
                  ? "border-blue-500 shadow-lg"
                  : "hover:border-blue-300"
              }`}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleTip(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg md:text-xl text-blue-800">
                    {index + 1}. {item.method}
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    {expandedTip === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedTip === index && (
                <CardContent className="pt-2">
                  <div className="space-y-4">
                    <p className="text-gray-600">{item.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h3 className="font-semibold text-blue-800 mb-2">
                        Example: {item.example.title}
                      </h3>
                      <p className="text-gray-700 italic">
                        "{item.example.text}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tips;
