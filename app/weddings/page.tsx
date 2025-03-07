"use client";

import Link from "next/link";

export default function WeddingsPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Wedding Coffee Cart Service</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Elegant Coffee Service for Your Special Day</h2>
        <p className="text-lg mb-6">
          Add a touch of elegance to your wedding day with our premium coffee cart service. Our professional baristas will create delicious coffee drinks for you and your guests, providing a unique experience that will be remembered for years to come.
        </p>
        
        <div className="bg-secondary-light p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">What We Offer:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Professional barista service</li>
            <li>Customizable menu options</li>
            <li>Premium coffee and equipment</li>
            <li>Elegant setup that complements your wedding decor</li>
            <li>Serving Tampa Bay and surrounding areas</li>
          </ul>
        </div>
        
        <p className="text-lg mb-8">
          Our wedding coffee cart service is perfect for cocktail hours, receptions, or as a special treat for your guests during late-night celebrations. We work with you to ensure everything matches your vision for your special day.
        </p>
        
        <Link href="/contact" className="btn btn-primary">
          Book Your Wedding Coffee Cart
        </Link>
      </div>
    </div>
  );
}
