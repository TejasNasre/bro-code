import React from "react";
import { PolicyCard } from "@/components/shared/PolicyCard";
import scholarship from "../../../data/scholarship.json";

export default function page() {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 py-10">
          Explore Scholarships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarship.map((policy, index) => (
            <PolicyCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </>
  );
}
