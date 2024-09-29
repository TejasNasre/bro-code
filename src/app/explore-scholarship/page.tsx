import React from "react";
import { PolicyCard } from "@/components/shared/PolicyCard";

export default function page() {
  const policies = [
    {
      title: "State Merit Scholarship",
      description: "For high-achieving students from all states",
      eligibility: "Students with 90% or above in 12th grade",
      deadline: "August 31, 2023",
    },
    {
      title: "STEM Excellence Scholarship",
      description: "Supporting future scientists and engineers",
      eligibility: "Students pursuing STEM fields",
      deadline: "September 15, 2023",
    },
    {
      title: "Arts and Humanities Grant",
      description: "Fostering creativity and critical thinking",
      eligibility: "Students in arts, literature, or humanities",
      deadline: "October 1, 2023",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 py-10">
          Explore Scholarships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <PolicyCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </>
  );
}
