import React from 'react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Unlock Your Potential with ScholarConnect
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Simplifying scholarship applications for students across states.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}