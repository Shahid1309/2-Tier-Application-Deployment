


import React from 'react';
import { Plus, Search, Car, Users, Clock, TrendingUp, MapPin, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { icon: Car, label: "Total Rides", value: "24", color: "from-green-500 to-green-600" },
    { icon: Users, label: "Connections", value: "18", color: "from-green-600 to-green-700" },
    { icon: Star, label: "Rating", value: "4.9", color: "from-green-500 to-green-600" },
    { icon: Shield, label: "Trust Score", value: "95%", color: "from-green-600 to-green-700" }
  ];

  

  return (
    <div className=" bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                {user ? (
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-800 text-sm font-medium mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Online Now
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2">
                      Welcome back, <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">{user.name}</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Ready for your next journey? Let's get you connected with fellow travelers and make every trip count.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2">
                      Welcome to <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">MyApp</span>
                    </h1>
                    <p className="text-gray-500">Please log in to access your dashboard</p>
                  </div>
                )}
              </div>
              
              {/* Profile Avatar */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/postRide"
            className="group relative bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10 flex items-center space-x-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 transform">
                <Plus className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Post a Ride</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  Share your ride and help fellow commuters reach their destination
                </p>
                <div className="flex items-center mt-4 text-green-200">
                  <span className="text-sm font-medium">Start sharing</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/findRide"
            className="group relative bg-gradient-to-br from-green-700 to-green-800 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10 flex items-center space-x-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 transform">
                <Search className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Find a Ride</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  Search for available rides to your destination quickly and easily
                </p>
                <div className="flex items-center mt-4 text-green-200">
                  <span className="text-sm font-medium">Start searching</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-green-700 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

       
        
      </div>
    </div>
  );
};

export default Dashboard;