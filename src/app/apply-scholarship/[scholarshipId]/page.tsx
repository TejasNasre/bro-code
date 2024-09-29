"use client"

import React from 'react'
import {ScholarshipFormComponent} from "../../../components/scholarship-form"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link"

function page() {
  const router = useRouter();
  const params = useParams();
  const { scholarshipId } = params;
  return (
    <>
    <ScholarshipFormComponent scholarshipId={scholarshipId} />
    </>
  )
}

export default page