



// 'use client';
// import { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/navigation';



// export default function ProfilePage() {
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => {
//       if (!user) {
//         router.push('/login');
//       } else {
//         setLoading(false);
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
//           <p className="mt-4 text-gray-600 font-medium">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
        

//         {user ? (
//           <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
//             {/* Profile Header */}
//             <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-8 py-8 relative overflow-hidden">
//               <div className="absolute inset-0 bg-black/10"></div>
//               <div className="relative flex items-center space-x-6">
//                 <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold ring-4 ring-white/30 shadow-lg">
//                   {user.name?.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold text-white mb-1">Welcome, {user.name}</h2>
//                   <p className="text-emerald-100 text-lg">Member since registration</p>
//                 </div>
//               </div>
//               {/* Decorative elements */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
//             </div>

//             {/* Profile Information */}
//             <div className="p-8">
//               <div className="flex items-center mb-8">
//                 <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full mr-4"></div>
//                 <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {/* Name Card */}
//                 <div className="group bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-emerald-200">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-semibold text-emerald-600 mb-1">Full Name</p>
//                       <p className="text-xl font-bold text-gray-900">{user.name}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email Card */}
//                 <div className="group bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-green-200">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-semibold text-green-600 mb-1">Email Address</p>
//                       <p className="text-xl font-bold text-gray-900 truncate">{user.email}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone Card */}
//                 <div className="group bg-gradient-to-br from-white to-teal-50 rounded-xl p-6 border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-teal-200">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-semibold text-teal-600 mb-1">Phone Number</p>
//                       <p className="text-xl font-bold text-gray-900">{user.phoneNumber}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* City Card */}
//                 <div className="group bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-emerald-200">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-semibold text-emerald-600 mb-1">City</p>
//                       <p className="text-xl font-bold text-gray-900">{user.city}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-10 pt-8 border-t border-gray-200">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-[0.98] shadow-lg">
//                     <div className="flex items-center justify-center space-x-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                       <span>Edit Profile</span>
//                     </div>
//                   </button>
//                   <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-200 hover:shadow-lg active:scale-[0.98]">
//                     <div className="flex items-center justify-center space-x-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                       </svg>
//                       <span>Change Password</span>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
//               <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>
//             <p className="text-gray-500 text-lg">No user information available</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      if (!user) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
          <p className="mt-3 text-gray-600 font-medium text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {user ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Compact Profile Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-4 sm:px-8 py-6 sm:py-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative flex items-center space-x-3 sm:space-x-6">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold ring-2 sm:ring-4 ring-white/30 shadow-lg flex-shrink-0">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 truncate">Welcome, {user.name}</h2>
                  <p className="text-emerald-100 text-sm sm:text-lg">Member since registration</p>
                </div>
              </div>
              {/* Smaller decorative elements for mobile */}
              <div className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
            </div>

            {/* Compact Profile Information */}
            <div className="p-4 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-8">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full mr-3 sm:mr-4"></div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Personal Information</h3>
              </div>
              
              {/* Mobile-First Grid Layout */}
              <div className="space-y-3 sm:space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                {/* Compact Name Card */}
                <div className="group bg-gradient-to-br from-white to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-emerald-100 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:transform sm:hover:scale-[1.02] hover:border-emerald-200">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-emerald-600 mb-1">Full Name</p>
                      <p className="text-base sm:text-xl font-bold text-gray-900 truncate">{user.name}</p>
                    </div>
                  </div>
                </div>

                {/* Compact Email Card */}
                <div className="group bg-gradient-to-br from-white to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-100 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:transform sm:hover:scale-[1.02] hover:border-green-200">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-green-600 mb-1">Email Address</p>
                      <p className="text-base sm:text-xl font-bold text-gray-900 truncate">{user.email}</p>
                    </div>
                  </div>
                </div>

                {/* Compact Phone Card */}
                <div className="group bg-gradient-to-br from-white to-teal-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-teal-100 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:transform sm:hover:scale-[1.02] hover:border-teal-200">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-teal-600 mb-1">Phone Number</p>
                      <p className="text-base sm:text-xl font-bold text-gray-900 truncate">{user.phoneNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Compact City Card */}
                <div className="group bg-gradient-to-br from-white to-emerald-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-emerald-100 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 sm:transform sm:hover:scale-[1.02] hover:border-emerald-200">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-emerald-600 mb-1">City</p>
                      <p className="text-base sm:text-xl font-bold text-gray-900 truncate">{user.city}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Action Buttons */}
              <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:gap-4">
                  <button className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 sm:transform sm:hover:scale-[1.02] hover:shadow-lg sm:hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-200 active:scale-[0.98] shadow-md">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span className="text-sm sm:text-base">Edit Profile</span>
                    </div>
                  </button>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-emerald-200 hover:shadow-md sm:hover:shadow-lg active:scale-[0.98]">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-sm sm:text-base">Change Password</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-gray-500 text-base sm:text-lg">No user information available</p>
          </div>
        )}
      </div>
    </div>
  );
}