"use client";

export default function PicturesPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Our Coffee Cart in Action</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Outdoor coffee cart setup with espresso machine, grinder, coffee syrups, and umbrella.jpg" 
            alt="Coffee Cart Setup" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Our Coffee Cart Setup</h3>
            <p>Professional equipment ready to serve your guests</p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Two people standing behind a coffee bar setup with an espresso machine, coffee grinder, and cups, outdoors..jpg" 
            alt="Baristas at Work" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Our Baristas in Action</h3>
            <p>Skilled baristas preparing specialty coffee drinks</p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Person holding a coffee cup with Delightful Bean logo on a wooden bench..jpg" 
            alt="Delightful Bean Coffee" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Happy Customers</h3>
            <p>Enjoying our delicious coffee at events</p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Espresso machine with wooden trim, metal milk frothers, a small potted plant, and flavored syrup bottles on a counter.jpg" 
            alt="Espresso Machine Setup" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Quality Equipment</h3>
            <p>We use only premium coffee equipment</p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Family posing behind a mobile coffee bar in an outdoor setting with trees and large hanging moss.jpg" 
            alt="Outdoor Event" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Outdoor Events</h3>
            <p>Our coffee cart works perfectly in outdoor settings</p>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/Coffee cup with Delightful Bean logo on table, blurred background..jpg" 
            alt="Branded Coffee Cup" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold mb-2">Branded Experience</h3>
            <p>Custom cups for a professional presentation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
