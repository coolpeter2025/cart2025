"use client";

export default function MenuPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">Our Coffee Menu</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Specialty Coffee Drinks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Espresso Classics</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Espresso</span>
                </div>
                <p className="text-sm text-gray-600">A concentrated shot of coffee with a rich crema</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Americano</span>
                </div>
                <p className="text-sm text-gray-600">Espresso with hot water</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Cappuccino</span>
                </div>
                <p className="text-sm text-gray-600">Espresso with equal parts steamed milk and milk foam</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Latte</span>
                </div>
                <p className="text-sm text-gray-600">Espresso with steamed milk and a light layer of foam</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Flat White</span>
                </div>
                <p className="text-sm text-gray-600">Espresso with velvety steamed milk</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Specialty Drinks</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Mocha</span>
                </div>
                <p className="text-sm text-gray-600">Espresso with chocolate and steamed milk</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Caramel Macchiato</span>
                </div>
                <p className="text-sm text-gray-600">Vanilla, steamed milk, espresso, and caramel drizzle</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Vanilla Latte</span>
                </div>
                <p className="text-sm text-gray-600">Latte with vanilla syrup</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Iced Coffee</span>
                </div>
                <p className="text-sm text-gray-600">Cold brew or espresso over ice</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Cold Brew</span>
                </div>
                <p className="text-sm text-gray-600">Smooth, low-acidity coffee brewed with cold water</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-secondary-light p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-3">Customizations Available:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Alternative Milks</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Flavor Syrups</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Decaf Options</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Extra Shots</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Whipped Cream</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Hot or Iced Options</span>
            </li>
          </ul>
        </div>
        
        <p className="text-center italic">
          Custom menu options available to suit your event's needs. Contact us to discuss special requests!
        </p>
      </div>
    </div>
  );
}
