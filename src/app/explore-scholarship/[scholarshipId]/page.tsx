"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import scholarship from "../../../../data/scholarship.json";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  let { scholarshipId } = params;

  // Handle the case if scholarshipId is an array
  if (Array.isArray(scholarshipId)) {
    scholarshipId = scholarshipId[0]; // Take the first element if it's an array
  }

  // Convert scholarshipId to number for matching (if scholarshipId in params is a string)
  const id = parseInt(scholarshipId, 10);

  // Handle case where scholarshipId is missing or invalid
  if (!scholarshipId || isNaN(id)) {
    return <p>Scholarship ID is invalid</p>;
  }

  // Filter the scholarship data to find the matching item
  const data = scholarship.find(item => item.id === id);

  // If no matching scholarship is found, display a message
  if (!data) {
    return <p>No scholarship found with ID {scholarshipId}</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p><strong>Eligibility:</strong> {data.eligibility}</p>
      <p><strong>Deadline:</strong> {data.deadline}</p>
      <p><strong>Amount:</strong> {data.amount}</p>
      <p><strong>Renewable:</strong> {data.renewable ? 'Yes' : 'No'}</p>

      {/* Example button to navigate to the application page */}
      <button>
        <Link href={`/apply-scholarship/${scholarshipId}`}>Apply Now</Link>
      </button>

      {/* Button to go back to the previous page */}
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Page;
