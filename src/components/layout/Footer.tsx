import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">ScholarConnect</h2>
            <p className="text-sm text-gray-600">
              Bridging the gap between students and scholarship opportunities.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/policies">Policies</Link></li>
              <li><Link href="/track-status">Track Status</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <ul className="text-sm">
              <li>Email: info@scholarconnect.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Scholar St, Education City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2023 ScholarConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}