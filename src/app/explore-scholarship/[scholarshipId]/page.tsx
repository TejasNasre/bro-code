"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const { scholarshipId } = params;

  // Handle case where spaceId is missing
  if (!scholarshipId) {
    return <p>Space ID not found</p>;
  }

  return (
    <div>
      <h1>Space Details</h1>
      <p>Space ID: {scholarshipId}</p>

      {/* Example button to navigate back */}
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default Page;
