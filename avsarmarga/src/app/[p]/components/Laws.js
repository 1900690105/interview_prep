import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Laws = () => {
  const law = [
    {
      title: "The Apprentices Act, 1961",
      purpose:
        "Provides practical training to technically qualified persons in various trades.",
      description:
        "This act regulates the apprenticeship of young persons in various trades and industries.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Bonded Labour System Abolition Act, 1976",
      purpose: "Abolishes the practice of bonded labor.",
      description:
        "This act aims to abolish the bonded labor system and provides for the release of bonded laborers.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Building and Other Construction Workers (Regulation of Employment and Conditions of Service) Act, 1996",
      purpose:
        "Regulates the employment and conditions of construction workers.",
      description:
        "This act provides for the regulation of the employment and conditions of service of building and other construction workers.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Building and Other Construction Workers Cess Act, 1996",
      purpose: "Imposes a cess for the welfare of construction workers.",
      description:
        "This act provides for the collection of a cess for the welfare of building and other construction workers.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Child Labour (Prohibition and Regulation) Act, 1986",
      purpose: "Prohibits the employment of children in hazardous occupations.",
      description:
        "This act prohibits the employment of children in hazardous work and regulates the conditions of work of children.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Children's (Pledging of Labour) Act, 1933",
      purpose: "Prohibits the pledging of children for labor.",
      description:
        "This act prohibits the pledging of children for labor and provides for their welfare.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Collection of Statistics Act, 1953",
      purpose: "Governs the collection of labor-related statistics.",
      description:
        "This act provides for the collection, compilation, and publication of statistics related to labor.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Contract Labour (Regulation and Abolition) Act, 1970",
      purpose:
        "Regulates the employment of contract labor and aims to abolish its exploitation.",
      description:
        "This act regulates the employment of contract labor and aims to improve their conditions.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Dock Workers' (Regulation of Employment) Act, 1948",
      purpose:
        "Regulates employment of dock workers and ensures their welfare.",
      description:
        "This act provides for the regulation of the employment of dock workers and ensures their welfare.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Dock Workers' (Safety, Health & Welfare) Act, 1986",
      purpose: "Ensures safety, health, and welfare measures for dock workers.",
      description:
        "This act provides for the safety, health, and welfare of dock workers.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Employees' Family Pension Scheme, 1971",
      purpose:
        "Provides pension benefits to employees' families after their death.",
      description:
        "This scheme provides pension benefits to the families of employees who die while in service.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Employees' Provident Funds & Miscellaneous Provisions Act, 1952",
      purpose: "Regulates provident fund, pension, and insurance schemes.",
      description:
        "This act regulates the provident funds and other benefits for employees.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Employees' State Insurance Act, 1948",
      purpose:
        "Provides benefits to employees in case of sickness, maternity, and injury.",
      description:
        "This act provides for medical and financial benefits to employees in case of sickness, maternity, and employment injuries.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Employment Exchanges (Compulsory Notification of Vacancies ) Act, 1959",
      purpose:
        "Mandates employers to notify employment exchanges of vacancies.",
      description:
        "This act requires employers to notify vacancies to employment exchanges.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Equal Remuneration Act, 1976",
      purpose: "Ensures equal pay for equal work for men and women.",
      description:
        "This act mandates equal pay for equal work for men and women.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Factories Act, 1948",
      purpose:
        "Ensures the health, safety, and welfare of workers in factories.",
      description:
        "This act regulates the working conditions in factories to ensure the health and safety of workers.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Fatal Accidents Act, 1855",
      purpose:
        "Provides compensation to families of workers who die due to accidents caused by negligence or unsafe work conditions.",
      description:
        "This act provides compensation to the families of workers who die due to workplace accidents.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Industrial Disputes Act, 1947",
      purpose:
        "Provides for the investigation and settlement of industrial disputes.",
      description:
        "This act provides a mechanism for the resolution of industrial disputes.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Industrial Employment (Standing Orders) Act, 1946",
      purpose:
        "Regulates the conditions of employment through standing orders.",
      description:
        "This act provides for the regulation of employment conditions through standing orders.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Iron Ore Mines, Manganese Ore Mines and Chrome Ore Mines Labour Welfare Cess Act, 1976",
      purpose:
        "Imposes a cess for the welfare of workers in iron, manganese, and chrome ore mines.",
      description:
        "This act imposes a cess for the welfare of workers in specified mining sectors.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Iron Ore Mines, Manganese Ore Mines and Chrome Ore Mines Labour Welfare Fund Act, 1976",
      purpose:
        "Establishes a welfare fund for workers in iron, manganese, and chrome ore mines.",
      description:
        "This act establishes a welfare fund for the benefit of workers in the mining industry.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Labour Welfare Fund Laws (Amendment) Act, 1987",
      purpose:
        "Amends laws related to the welfare of laborers through welfare funds.",
      description:
        "This act amends existing labor welfare fund laws to enhance benefits.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Limestone and Dolomite Mines Labour Welfare Fund Act, 1972",
      purpose:
        "Provides for welfare of workers in limestone and dolomite mines.",
      description:
        "This act establishes a welfare fund for the benefit of workers in limestone and dolomite mining.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Maternity Benefit Act, 1961",
      purpose: "Provides maternity benefits to women employees.",
      description:
        "This act ensures that women employees receive maternity benefits during and after pregnancy.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Merchant Shipping Act, 1958",
      purpose: "Regulates working conditions in the shipping industry.",
      description:
        "This act governs the employment conditions and rights of workers in the shipping industry.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Minimum Wages Act, 1948",
      purpose:
        "Ensures the minimum wages payable to workers in certain sectors.",
      description:
        "This act mandates the payment of minimum wages to workers in various sectors.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Motor Transport Workers' Act, 1961",
      purpose:
        "Regulates the employment conditions of motor transport workers.",
      description:
        "This act regulates the conditions of employment for workers in the motor transport sector.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Payment of Bonus Act, 1965",
      purpose:
        "Mandates the payment of bonus to employees based on profits or productivity.",
      description:
        "This act requires employers to pay bonuses to employees based on specified criteria.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Payment of Wages Act, 1936",
      purpose: "Regulates the payment of wages to employees.",
      description:
        "This act provides for the regulation of wages and timely payment to employees.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Personal Injuries (Compensation Insurance) Act, 1963",
      purpose:
        "Ensures compensation for workers in hazardous occupations through employer insurance.",
      description:
        "This act mandates compensation insurance for workers in hazardous jobs.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Plantations Labour Act, 1951",
      purpose: "Regulates the conditions of work in plantations.",
      description:
        "This act provides for the regulation of working conditions in plantations.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Pregnant Women (Employment) Act, 1972",
      purpose:
        "Prohibits the employment of pregnant women in hazardous conditions.",
      description:
        "This act prohibits the employment of pregnant women in jobs that may harm their health.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Shops and Establishments Act",
      purpose:
        "Regulates the working conditions in shops and commercial establishments.",
      description:
        "This act provides for the regulation of working hours, wages, and other conditions in shops and establishments.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Social Security Code, 2020",
      purpose: "Consolidates various social security laws for workers.",
      description:
        "This code aims to provide social security benefits to workers across different sectors.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Trade Unions Act, 1926",
      purpose: "Regulates the formation and registration of trade unions.",
      description:
        "This act provides for the registration and regulation of trade unions.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title:
        "The Working Journalists and Other News Paper Employees (Conditions of Service) and Miscellaneous Provisions Act, 1955",
      purpose:
        "Regulates the working conditions of journalists and newspaper employees.",
      description:
        "This act governs the conditions of service of working journalists and other newspaper employees.",
      url: "https://www.indiacode.nic.in/",
    },
    {
      title: "The Workmen's Compensation Act, 1923",
      purpose:
        "Provides compensation to workers for injuries sustained during employment.",
      description:
        "This act mandates compensation for workers injured during their work.",
      url: "https://www.indiacode.nic.in/",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [videoId, setVideoId] = useState("");
  const [title, setTitle] = useState("");

  // Filter laws based on search term
  const filteredLaws = law.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Indian Labor Laws</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search laws by title or purpose..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Laws Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredLaws.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <Link href={item.url}> {item.title}</Link>
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
        </div>

        {/* No Results Message */}
        {filteredLaws.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No laws found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laws;
