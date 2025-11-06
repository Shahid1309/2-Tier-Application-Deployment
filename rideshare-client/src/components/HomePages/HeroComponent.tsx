

// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import img1 from "../../../public/Images/Connect.png"

// // // const HeroSection = () => {
// // //   return (
// // //     <section className="bg-gradient-to-br from-green-50 via-green-50 to-green-100 py-16 px-4 text-center relative overflow-hidden">
// // //       {/* Background decorative elements */}
// // //       <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
// // //       <div className="max-w-6xl mx-auto relative z-10">
// // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //           {/* Content Section */}
// // //           <div className="lg:text-left text-center space-y-8">
// // //             {/* Badge */}
// // //             <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-800 text-sm font-medium mb-6">
// // //               <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
// // //                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // //               </svg>
// // //               Trusted by 10,000+ Users
// // //             </div>

// // //             {/* Main Heading */}
// // //             <h1 className="text-3xl lg:text-4xl font-black text-green-800 leading-tight">
// // //               Affordable & Easy{' '}
// // //               <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
// // //                 Ride Sharing
// // //               </span>
// // //             </h1>

// // //             {/* Description */}
// // //             <p className="text-xl text-green-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
// // //               Connect with verified drivers for your next trip. Experience the perfect blend of{' '}
// // //               <span className="font-semibold text-green-800">safety, speed, and affordability</span> in every journey.
// // //             </p>

// // //             {/* Features List */}
// // //             <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-700">
// // //               <div className="flex items-center space-x-2">
// // //                 <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
// // //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                 </svg>
// // //                 <span className="font-medium">Verified Drivers</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
// // //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                 </svg>
// // //                 <span className="font-medium">24/7 Support</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
// // //                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                 </svg>
// // //                 <span className="font-medium">Best Prices</span>
// // //               </div>
// // //             </div>

// // //             {/* CTA Buttons */}
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// // //               <Link href="/search">
// // //                 <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
// // //                   <span>Find a Ride</span>
// // //                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// // //                   </svg>
// // //                 </button>
// // //               </Link>
// // //               <Link href="/how-it-works">
// // //                 <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-lg hover:border-green-700 hover:text-green-800">
// // //                   How It Works
// // //                 </button>
// // //               </Link>
// // //             </div>

// // //             {/* Stats */}
// // //             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200">
// // //               <div>
// // //                 <div className="text-3xl font-bold text-green-800">50K+</div>
// // //                 <div className="text-green-600 font-medium">Happy Riders</div>
// // //               </div>
// // //               <div>
// // //                 <div className="text-3xl font-bold text-green-800">1000+</div>
// // //                 <div className="text-green-600 font-medium">Verified Drivers</div>
// // //               </div>
// // //               <div>
// // //                 <div className="text-3xl font-bold text-green-800">25+</div>
// // //                 <div className="text-green-600 font-medium">Cities</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Image Section */}
// // //           <div className="lg:order-last order-first">
// // //             <div className="relative">
// // //               {/* Decorative background for image */}
// // //               <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-green-300/30 rounded-3xl transform rotate-3"></div>
// // //               <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
// // //                 <Image
// // //                   src={img1}
// // //                   alt="Hero Driver"
// // //                   width={500}
// // //                   height={400}
// // //                   className="mx-auto rounded-2xl"
// // //                   priority
// // //                 />
// // //                 {/* Floating elements */}
// // //                 <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
// // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
// // //                     <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
// // //                   </svg>
// // //                 </div>
// // //                 <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-full shadow-lg">
// // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
// // //                     <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;


// // import Link from 'next/link';
// // import React from 'react';

// // const HeroSection = () => {
// //   return (
// //     <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-12">
// //       <div className="max-w-4xl mx-auto text-center">
// //         {/* Hero Image */}
        

// //         {/* Hero Text */}
// //         <div className="space-y-8">
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
// //             Your Ride,{' '}
// //             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
// //               Your Way
// //             </span>
// //           </h1>
          
// //           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
// //             Connect instantly with trusted drivers or share your journey. 
// //             <span className="font-semibold text-gray-800"> Safe, fast, and affordable rides</span> at your fingertips.
// //           </p>

// //           {/* Action Buttons */}
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
// //             <Link href="/findRide" >
// //             <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3">
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //               </svg>
// //               <span>Find a Ride</span>
// //               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// //               </svg>
// //             </button>
// //             </Link>
            
// //             <Link href="/postRide">
// //             <button className="group w-full sm:w-auto bg-white text-gray-800 px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg flex items-center justify-center space-x-3">
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //               </svg>
// //               <span>Post a Ride</span>
// //             </button>
// //             </Link>
// //           </div>

// //           {/* Quick Stats */}
// //           <div className="flex justify-center items-center space-x-8 pt-12 text-sm text-gray-500">
// //             <div className="flex items-center space-x-2">
// //               <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               <span>50K+ Users</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
// //               <span>24/7 Available</span>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
// //               <span>Safe & Secure</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import img1 from "../../../public/Images/home2.png";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-12 overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={img1}
//           alt="People connecting for rides"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className="opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-indigo-50/50"></div>
//       </div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         {/* Hero Text */}
//         <div className="space-y-8">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//             Your Ride,{' '}
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Your Way
//             </span>
//           </h1>
          
//           <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
//             Connect instantly with trusted drivers or share your journey. 
//             <span className="font-semibold text-gray-800"> Safe, fast, and affordable rides</span> at your fingertips.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
//             <Link href="/findRide">
//               <button className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <span className="relative z-10">Find a Ride</span>
//                 <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
//             </Link>
            
//             <Link href="/postRide">
//               <button className="group relative w-full sm:w-auto bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg flex items-center justify-center space-x-3">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 <span>Post a Ride</span>
//               </button>
//             </Link>
//           </div>

//           {/* Quick Stats */}
//           <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-12 text-sm text-gray-600">
//             <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span>50K+ Happy Users</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
//               <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//               <span>24/7 Availability</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
//               <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
//               <span>Verified & Safe</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img1 from "../../../public/Images/home2.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img1}
          alt="People connecting for rides"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-emerald-50/60 to-green-50/70"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Hero Text */}
        <div className="space-y-10">
          {/* Floating Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 px-6 py-3 rounded-full text-emerald-800 font-medium text-sm shadow-lg backdrop-blur-sm animate-bounce">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>🚗 Eco-Friendly Ride Sharing</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Your Ride,{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
              Your Way
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect instantly with trusted drivers or share your journey. 
            <span className="font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent"> Safe, fast, and eco-friendly rides</span> at your fingertips.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Link href="/findRide">
              <button className="group relative w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-10 py-5 rounded-2xl hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all duration-500 font-bold text-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center space-x-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <svg className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="relative z-10">Find a Ride</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            
            <Link href="/postRide">
              <button className="group relative w-full sm:w-auto bg-white/95 backdrop-blur-md text-emerald-800 px-10 py-5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-900 transition-all duration-500 font-bold text-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <svg className="w-7 h-7 relative z-10 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="relative z-10">Post a Ride</span>
              </button>
            </Link>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-16">
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">🚗 50K+ Happy Users</span>
            </div>
            
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping delay-200"></div>
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-green-700 transition-colors">⏰ 24/7 Availability</span>
            </div>
            
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse delay-500"></div>
                <div className="absolute inset-0 w-3 h-3 bg-teal-400 rounded-full animate-ping delay-500"></div>
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-teal-700 transition-colors">🛡️ Verified & Safe</span>
            </div>
            
            <div className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse delay-700"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping delay-700"></div>
              </div>
              <span className="font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">🌱 Carbon Neutral</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex justify-center">
            <div className="flex items-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Certified Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;