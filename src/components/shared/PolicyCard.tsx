import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PolicyCardProps {
  title: string;
  description: string;
  eligibility: string;
  deadline: string;
}

export function PolicyCard({
  title,
  description,
  eligibility,
  deadline,
}: PolicyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Eligibility:</strong> {eligibility}
        </p>
        <p>
          <strong>Deadline:</strong> {deadline}
        </p>
      </CardContent>
      <CardFooter>
        <Button>Explore More</Button>
      </CardFooter>
    </Card>
  );
}
