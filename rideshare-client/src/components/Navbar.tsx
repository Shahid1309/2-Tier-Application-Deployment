
// 'use client';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useAuth } from '@/app/context/AuthContext';
// import logo from "../../public/Images/newlogsvg.svg"
// import Image from 'next/image';

// export default function Navbar() {
//   const router = useRouter();
//   const { user, setUser } = useAuth();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setUser(null);
//     router.push('/');
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className=" shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link 
//               href="/home" 
//               className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 tracking-tight drop-shadow-sm"
//               onClick={closeMobileMenu}
//             >
//               <Image src={logo} alt='CoRide' className='w-28 h-20' ></Image>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             {user ? (
//               <>
//                 {/* Navigation Links */}
//                 <div className="flex items-center space-x-1">
//                   <Link 
//                     href="/postRide"
//                     className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
//                   >
//                     Share Ride
                    
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
//                   </Link>
//                   <Link 
//                     href="/findRide"
//                     className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
//                   >
//                     Book Ride
                    
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
//                   </Link>
//                   <Link 
//                     href="/profile"
//                     className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
//                   >
//                     Profile
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
//                   </Link>
//                   <button 
//                     onClick={handleLogout}
//                     className="ml-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="flex items-center space-x-2">
//                 <Link 
//                   href="/login"
//                   className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
//                 >
//                   Login
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
//                 </Link>
//                 <Link 
//                   href="/register"
//                   className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105 transform"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Hamburger icon */}
//               <div className="relative w-6 h-6">
//                 <span 
//                   className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
//                     isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
//                   }`}
//                 ></span>
//                 <span 
//                   className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2 ${
//                     isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
//                   }`}
//                 ></span>
//                 <span 
//                   className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
//                     isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className={`md:hidden transition-all duration-300 ease-in-out ${
//         isMobileMenuOpen 
//           ? 'max-h-96 opacity-100 border-t border-gray-200' 
//           : 'max-h-0 opacity-0 overflow-hidden'
//       }`}>
//         <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm">
//           {user ? (
//             <>
//               <Link 
//                 href="/postRide"
//                 className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
//                 onClick={closeMobileMenu}
//               >
//                 Share Ride
//               </Link>
//               <Link 
//                 href="/findRide"
//                 className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
//                 onClick={closeMobileMenu}
//               >
//                 Book Ride
//               </Link>
//               <Link 
//                 href="/profile"
//                 className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
//                 onClick={closeMobileMenu}
//               >
//                 Profile
//               </Link>
//               <button 
//                 onClick={() => {
//                   handleLogout();
//                   closeMobileMenu();
//                 }}
//                 className="w-full  px-5 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg mt-3 text-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link 
//                 href="/login"
//                 className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
//                 onClick={closeMobileMenu}
//               >
//                 Login
//               </Link>
//               <Link 
//                 href="/register"
//                 className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg mt-2 text-center"
//                 onClick={closeMobileMenu}
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';
import logo from "../../public/Images/newlogsvg.svg"
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/home" 
              className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 tracking-tight drop-shadow-sm"
              onClick={closeMobileMenu}
            >
              <Image src={logo} alt='CoRide' className='w-28 h-20' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {/* Navigation Links */}
                <div className="flex items-center space-x-1">
                  <Link 
                    href="/postRide"
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
                  >
                    Share Ride
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/findRide"
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
                  >
                    Book Ride
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/profile"
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
                  >
                    Profile
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="ml-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium relative group"
                >
                  Login
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/register"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105 transform"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Enhanced Hamburger Animation */}
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span 
                  className={`absolute block h-0.5 w-6 bg-current rounded-full transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current rounded-full transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span 
                  className={`absolute block h-0.5 w-6 bg-current rounded-full transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      <div className={`md:hidden transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'translate-y-0 opacity-100 visible' 
          : '-translate-y-4 opacity-0 invisible'
      }`}>
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-1">
            {user ? (
              <>
                <Link 
                  href="/postRide"
                  className="group flex items-center px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-[1.02]"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600"></div>
                    <span className="text-base">Share Ride</span>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link 
                  href="/findRide"
                  className="group flex items-center px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-[1.02]"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-green-600"></div>
                    <span className="text-base">Book Ride</span>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link 
                  href="/profile"
                  className="group flex items-center px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-[1.02]"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-600"></div>
                    <span className="text-base">Profile</span>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="w-full flex items-center justify-center px-5 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  href="/login"
                  className="group flex items-center px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-blue-200 hover:shadow-md transform hover:scale-[1.02]"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600"></div>
                    <span className="text-base">Login</span>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link 
                  href="/register"
                  className="flex items-center justify-center px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] mt-3"
                  onClick={closeMobileMenu}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}