'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-white pt-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-sm font-medium text-gray-600 tracking-wide">
                Premium Lithium Battery Pack
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-tight">
                Energy is Everywhere.
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-400 leading-tight">
                We make it accessible.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Transforming energy storage with cutting-edge lithium technology for a sustainable future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="#products"
                className="px-8 py-3 bg-black text-white rounded-lg font-medium text-center hover:bg-gray-900 transition-colors duration-200"
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border border-gray-300 text-black rounded-lg font-medium text-center hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
