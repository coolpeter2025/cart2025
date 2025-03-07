"use client";

import Link from "next/link";

export default function BirthdaysPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Birthday Coffee Cart Service</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Make Your Birthday Special</h2>
        <p className="text-lg mb-6">
          Celebrate your birthday in style with our premium coffee cart service. Our professional baristas will create delicious coffee drinks for you and your guests, adding a unique touch to your celebration.
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
          Whether you're celebrating a milestone birthday or just want to make your annual celebration more memorable, our coffee cart service adds a touch of elegance and fun to any birthday party.
        </p>
        
        <Link href="/contact" className="btn btn-primary">
          Book Your Birthday Coffee Cart
        </Link>
      </div>
    </div>
  );
}
