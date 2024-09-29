import React from "react";
import { Hero } from "@/components/home/Hero";
import { FeatureCard } from "@/components/home/FeatureCard";
import { PolicyCard } from "@/components/shared/PolicyCard";
import { Search, FileText, Bell } from "lucide-react";
import scholarship from "../../data/scholarship.json";

export default function Home() {
  const features = [
    {
      title: "Easy Search",
      description:
        "Find scholarships that match your profile with our advanced search system.",
      icon: <Search className="w-10 h-10" />,
    },
    {
      title: "Clear Guidelines",
      description:
        "Access detailed and easy-to-understand application guidelines for each scholarship.",
      icon: <FileText className="w-10 h-10" />,
    },
    {
      title: "Application Tracking",
      description:
        "Stay updated on your application status with real-time notifications.",
      icon: <Bell className="w-10 h-10" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100">
      <main className="flex-grow">
        <Hero />
        <section className="py-36 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-36 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Featured Scholarships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarship.map((policy, index) => (
                <PolicyCard key={index} {...policy} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
