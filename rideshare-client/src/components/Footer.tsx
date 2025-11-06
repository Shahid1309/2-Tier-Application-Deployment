// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-900 text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

//         {/* Newsletter Signup */}
//         <div className="mt-12 pt-8 border-t border-green-700">
//           <div className="max-w-md mx-auto text-center">
//             <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
//             <p className="text-green-200 mb-4">Get the latest security updates and feature announcements.</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
//               />
//               <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg font-medium transition-colors duration-200">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-green-900/50 border-t border-green-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col sm:flex-row justify-between items-center">
//             <div className="text-green-200 text-sm">
//               © 2025 SecureAuth. All rights reserved.
//             </div>
//             <div className="flex items-center space-x-6 mt-2 sm:mt-0">
//               <div className="flex items-center text-green-200 text-sm">
//                 <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//                 SSL Secured
//               </div>
//               <div className="flex items-center text-green-200 text-sm">
//                 <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 99.9% Uptime
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Image from 'next/image';
// import logo from "../../public/Images/newlogsvg.svg"
// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8 mt-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
//           <div>
//             <div className="flex-shrink-0">
//             <Link 
//               href="/home" 
//               className="text-2xl font-black bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 bg-clip-text text-transparent hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 tracking-tight drop-shadow-sm"
              
//             >
//               <Image src={logo} alt='CoRide' className='w-28 h-20 text-red-700 fill-current' ></Image>
//             </Link>
//           </div>
//             <p className="text-sm text-gray-400 mt-2">Making shared rides safer, cheaper, and smarter.</p>
//           </div>
//           <div className="flex space-x-6">
//             <Link href="/about" className="text-gray-300 hover:text-emerald-400 text-sm">About</Link>
//             <Link href="/contact" className="text-gray-300 hover:text-emerald-400 text-sm">Contact</Link>
//             <Link href="/terms" className="text-gray-300 hover:text-emerald-400 text-sm">Terms</Link>
//             <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 text-sm">Privacy</Link>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-500 text-center">
//           © {new Date().getFullYear()} CoRider. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }



import Image from 'next/image';
import logo from "../../public/Images/newlogsvg.svg"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        

        {/* Social Media & Newsletter */}
        

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-6 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} CoRider. All rights reserved. | Made with ❤️ for better commuting</p>
        </div>
      </div>
    </footer>
  );
}