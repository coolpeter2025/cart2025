"use client";

import Link from "next/link";

export default function PrivatePartiesPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Private Event Coffee Cart Service</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Elevate Your Private Event</h2>
        <p className="text-lg mb-6">
          Make your private event memorable with our premium coffee cart service. Whether it's a corporate event, holiday party, or family gathering, our professional baristas will create delicious coffee drinks that impress your guests.
        </p>
        
        <div className="bg-secondary-light p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">What We Offer:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Professional barista service</li>
            <li>Customizable menu options</li>
            <li>Premium coffee and equipment</li>
            <li>Flexible setup options for any venue</li>
            <li>Serving Tampa Bay and surrounding areas</li>
          </ul>
        </div>
        
        <p className="text-lg mb-8">
          Our coffee cart service adds a unique touch to any private event, creating a focal point and conversation starter while providing your guests with delicious specialty coffee drinks.
        </p>
        
        <Link href="/contact" className="btn btn-primary">
          Book Your Private Event Coffee Cart
        </Link>
      </div>
    </div>
  );
}
