// import {Car,Star} from 'lucide-react'
// import Link from "next/link";

// export default function HowItWorks(){
//     return(
//         <>
//         <div className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               How It Works
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="space-y-8">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#118a58] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
//                     1
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
//                     <p className="text-gray-600">Create your account and verify your phone number</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#118a58] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
//                     2
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Find or Post</h3>
//                     <p className="text-gray-600">Search for available rides or post your own ride</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#118a58] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
//                     3
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Connect</h3>
//                     <p className="text-gray-600">Book your seat and connect with your co-passengers</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#118a58] text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
//                     4
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-2">Travel</h3>
//                     <p className="text-gray-600">Enjoy your comfortable and affordable journey</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg">
//               <div className="text-center">
//                 <Car className="h-24 w-24 text-[#118a58] mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
//                 <p className="text-gray-600 mb-6">
//                   Join thousands of commuters who save money and make friends on their daily journey
//                 </p>
//                 <Link
//                   href="/signup"
//                   className="bg-[#1eab6e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0e6e4a] transition-colors inline-block"
//                 >
//                   Join Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//        <div className="py-20 bg-[#52cb93] text-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold mb-2">500+</div>
//               <div className="">Active Users</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">1000+</div>
//               <div className="">Rides Completed</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">4.8</div>
//               <div className=" flex items-center justify-center">
//                 <Star className="h-5 w-5 mr-1" />
//                 Average Rating
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold mb-2">₹50</div>
//               <div className="">Average Savings</div>
//             </div>
//           </div>
//         </div>
//       </div>


//         </>
//     )
// }



// components/HowItWorks.tsx
// import Image from 'next/image';
// import img1 from "../../../public/Images/Ride.png"
// import img2 from "../../../public/Images/verified Drivers.png"
// import img3 from "../../../public/Images/safeRide.png"

// const steps = [
//   {
//     title: "Post or Search a Ride",
//     image: img1
//   },
//   {
//     title: "Connect Instantly",
//     image: img2,
//   },
//   {
//     title: "Travel Together",
//     image: img3,
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="py-20 bg-white px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
//       <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto">
//         {steps.map((step, i) => (
//           <div key={i} className="text-center max-w-sm">
//             <Image
//               src={step.image}
//               alt={step.title}
//               width={200}
//               height={200}
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-green-700">{step.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import Image from 'next/image';
import img1 from "../../../public/Images/Ride.png"
import img2 from "../../../public/Images/verified Drivers.png"
import img3 from "../../../public/Images/safeRide.png"

const steps = [
  {
    title: "Post or Search a Ride",
    image: img1,
    description: "Easily create a ride request or browse available rides in your area with our intuitive search system."
  },
  {
    title: "Connect Instantly",
    image: img2,
    description: "Get matched with verified drivers instantly through our smart algorithm and secure messaging system."
  },
  {
    title: "Travel Together",
    image: img3,
    description: "Enjoy a safe, comfortable journey with trusted drivers and real-time trip tracking for peace of mind."
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-100/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Simple Process
          </div>
          <h2 className="text-5xl font-black text-gray-800 mb-6 leading-tight">
            How It <span className="text-green-700">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our ride-sharing platform in just three simple steps. 
            It's fast, secure, and designed with your convenience in mind.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
              </div>

              {/* Connecting Line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-green-200 z-10 transform translate-x-6">
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 pt-12 text-center border border-gray-100 group-hover:border-green-200 group-hover:scale-105 transform">
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-md">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={160}
                      height={160}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Floating icon */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center text-green-600 font-medium text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-green-50 px-6 py-4 rounded-2xl border border-green-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-200 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-300 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-green-800 font-medium">
              Join thousands of satisfied users today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;