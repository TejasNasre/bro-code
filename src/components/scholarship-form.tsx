"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserIcon, GraduationCap, FileText, Upload } from "lucide-react";

type FormData = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  academicInfo: {
    school: string;
    major: string;
    gpa: string;
    graduationYear: string;
  };
  essayInfo: {
    essay: string;
  };
  documents: {
    transcript: File | null;
    recommendation: File | null;
  };
};

export function ScholarshipFormComponent({
  scholarshipId,
}: {
  scholarshipId: any;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { firstName: "", lastName: "", email: "", phone: "" },
    academicInfo: { school: "", major: "", gpa: "", graduationYear: "" },
    essayInfo: { essay: "" },
    documents: { transcript: null, recommendation: null },
  });

  const steps = [
    {
      title: "Personal Information",
      icon: UserIcon,
      fields: ["firstName", "lastName", "email", "phone"],
    },
    {
      title: "Academic Information",
      icon: GraduationCap,
      fields: ["school", "major", "gpa", "graduationYear"],
    },
    { title: "Essay", icon: FileText, fields: ["essay"] },
    {
      title: "Documents",
      icon: Upload,
      fields: ["transcript", "recommendation"],
    },
  ];

  const handleInputChange = (
    step: keyof FormData,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
  };

  const handleFileChange = (
    field: "transcript" | "recommendation",
    file: File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      documents: { ...prev.documents, [field]: file },
    }));
  };

  const isStepValid = () => {
    const currentStepData =
      formData[Object.keys(formData)[currentStep] as keyof FormData];
    return Object.values(currentStepData).every((value) => {
      if (typeof value === "string") return value.trim() !== "";
      return value !== null;
    });
  };

  const handleNext = () => {
    if (isStepValid() && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStepValid()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  };

  const renderStep = () => {
    const step = steps[currentStep];
    const stepKey = Object.keys(formData)[currentStep] as keyof FormData;

    return (
      <div className="space-y-4">
        {step.fields.map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Label>
            {field === "essay" ? (
              <Textarea
                id={field}
                value={
                  formData[stepKey][
                    field as keyof (typeof formData)[typeof stepKey]
                  ]
                }
                onChange={(e) =>
                  handleInputChange(stepKey, field, e.target.value)
                }
                className="min-h-[200px]"
              />
            ) : stepKey === "documents" ? (
              <Input
                id={field}
                type="file"
                onChange={(e) =>
                  handleFileChange(
                    field as "transcript" | "recommendation",
                    e.target.files?.[0] || null
                  )
                }
              />
            ) : (
              <Input
                id={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                value={
                  formData[stepKey][
                    field as keyof (typeof formData)[typeof stepKey]
                  ]
                }
                onChange={(e) =>
                  handleInputChange(stepKey, field, e.target.value)
                }
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Scholarship Application For {scholarshipId}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className="mb-2"
          />
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`rounded-full p-2 ${
                      index <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs mt-1 text-center">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit}>{renderStep()}</form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button onClick={handleSubmit} disabled={!isStepValid()}>
            Submit Application
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={!isStepValid()}>
            Next
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
