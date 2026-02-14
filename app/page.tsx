'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Animated Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle with animation */}
                <defs>
                  <style>{`
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-20px); }
                    }
                    @keyframes rotate {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    .floating { animation: float 4s ease-in-out infinite; }
                    .rotating { animation: rotate 20s linear infinite; }
                  `}</style>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#d8bfd8', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#dda0dd', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>

                {/* Rotating background elements */}
                <circle className="rotating" cx="200" cy="200" r="180" fill="url(#purpleGrad)" opacity="0.2" />
                
                {/* Main floating shape */}
                <g className="floating">
                  {/* Head */}
                  <circle cx="200" cy="120" r="45" fill="#a78bfa" />
                  
                  {/* Body */}
                  <rect x="165" y="170" width="70" height="80" rx="10" fill="#c4b5fd" />
                  
                  {/* Arms */}
                  <rect x="110" y="185" width="55" height="20" rx="10" fill="#a78bfa" />
                  <rect x="235" y="185" width="55" height="20" rx="10" fill="#a78bfa" />
                  
                  {/* Legs */}
                  <rect x="175" y="260" width="15" height="50" rx="8" fill="#c4b5fd" />
                  <rect x="210" y="260" width="15" height="50" rx="8" fill="#c4b5fd" />
                  
                  {/* Eyes */}
                  <circle cx="185" cy="110" r="5" fill="#ffffff" />
                  <circle cx="215" cy="110" r="5" fill="#ffffff" />
                  
                  {/* Smile */}
                  <path d="M 190 125 Q 200 132 210 125" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Floating accent circles */}
                <g className="floating" style={{ animationDelay: '1s' }}>
                  <circle cx="100" cy="150" r="15" fill="#dda0dd" opacity="0.6" />
                </g>
                <g className="floating" style={{ animationDelay: '2s' }}>
                  <circle cx="320" cy="280" r="20" fill="#d8bfd8" opacity="0.5" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Find Your Next Opportunity
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Discover meaningful volunteer positions and job opportunities that align with your skills and passion. Join a community making a real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/landing/job-list/desktop">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 rounded-lg flex items-center gap-2 w-full sm:w-auto">
                  Browse Opportunities
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-gray-300 text-slate-700 hover:bg-gray-50 px-8 py-6 rounded-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div>
                <p className="text-2xl font-bold text-purple-600">100+</p>
                <p className="text-sm text-slate-600">Active Opportunities</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">5K+</p>
                <p className="text-sm text-slate-600">Community Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

