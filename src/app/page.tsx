import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { FeatureCard } from '@/components/home/FeatureCard'
import { PolicyCard } from '@/components/shared/PolicyCard'
import { Search, FileText, Bell } from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'Easy Search',
      description: 'Find scholarships that match your profile with our advanced search system.',
      icon: <Search className="w-10 h-10" />,
    },
    {
      title: 'Clear Guidelines',
      description: 'Access detailed and easy-to-understand application guidelines for each scholarship.',
      icon: <FileText className="w-10 h-10" />,
    },
    {
      title: 'Application Tracking',
      description: 'Stay updated on your application status with real-time notifications.',
      icon: <Bell className="w-10 h-10" />,
    },
  ]

  const policies = [
    {
      title: 'State Merit Scholarship',
      description: 'For high-achieving students from all states',
      eligibility: 'Students with 90% or above in 12th grade',
      deadline: 'August 31, 2023',
    },
    {
      title: 'STEM Excellence Scholarship',
      description: 'Supporting future scientists and engineers',
      eligibility: 'Students pursuing STEM fields',
      deadline: 'September 15, 2023',
    },
    {
      title: 'Arts and Humanities Grant',
      description: 'Fostering creativity and critical thinking',
      eligibility: 'Students in arts, literature, or humanities',
      deadline: 'October 1, 2023',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <PolicyCard key={index} {...policy} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}