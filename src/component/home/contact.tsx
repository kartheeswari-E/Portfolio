"use client";

import Link from "next/link";
import { CallIcon, ClockIcon, EmailIcon, GitIcon, LocationIcon } from "../icons";

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="info-box bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center space-x-4 mb-4">
              <LocationIcon className="text-indigo-500 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Address</h3>
            </div>
            <p className="text-gray-400">Ramanathapuram</p>
          </div>

          {/* Call Us */}
          <div className="info-box bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center space-x-4 mb-4">
              <CallIcon className="text-indigo-500 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
            </div>
            <p className="text-gray-400">+91 6381121689</p>
          </div>

          {/* Email Us */}
          <div className="info-box bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center space-x-4 mb-4">
              <EmailIcon className="text-indigo-500 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
            </div>
            <p className="text-gray-400">
              <Link
                href="mailto:karthiieeswari@gmail.com"
                className=""
              >
                karthiieeswari@gmail.com
              </Link>
            </p>
          </div>

          {/* Contact Hours */}
          <div className="info-box bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center space-x-4 mb-4">
              <ClockIcon className="text-indigo-500 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Contact Hours</h3>
            </div>
            <p className="text-gray-400">9:00AM - 08:00PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
