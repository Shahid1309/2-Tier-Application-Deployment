

'use client';
import { useEffect, useState } from 'react';
import { MapPin, Calendar, Clock, Users,ChevronDown, User, ArrowRight, Star, Phone, Shield, CheckCircle, Heart, Lightbulb, Filter } from 'lucide-react';
import axios from 'axios';

export default function AllRides() {
  const [rides, setRides] = useState<any[]>([]);
  const [filteredRides, setFilteredRides] = useState<any[]>([]);

  const [showTips, setShowTips] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    leavingFrom: '',
    goingTo: '',
    date: '',
    passengers: 1
  });

  // Sample data for development - replace with your API call
  useEffect(() => {
     const fetchRides = async () => {
       try {
         const res = await axios.get("GET → https://rideshare-server-2jmo.onrender.com/api/rides/getAllRides");
         setRides(res.data);
         setFilteredRides(res.data);
       } catch (error) {
         console.error("Error fetching all rides:", error);
       }
     };
     fetchRides();
   }, []);

  // Apply filters
  useEffect(() => {
    let filtered = rides;

    // Apply filters
    if (filters.leavingFrom) {
      filtered = filtered.filter(ride => 
        ride.from?.toLowerCase().includes(filters.leavingFrom.toLowerCase())
      );
    }

    if (filters.goingTo) {
      filtered = filtered.filter(ride => 
        ride.to?.toLowerCase().includes(filters.goingTo.toLowerCase())
      );
    }

    if (filters.date) {
      filtered = filtered.filter(ride => ride.date === filters.date);
    }

    if (filters.passengers > 1) {
      filtered = filtered.filter(ride => ride.availableSeat >= filters.passengers);
    }

    setFilteredRides(filtered);
  }, [filters, rides]);



  const clearFilters = () => {
    setFilters({
      leavingFrom: '',
      goingTo: '',
      date: '',
      passengers: 1
    });
  };

  const hasActiveFilters = filters.leavingFrom || filters.goingTo || filters.date || filters.passengers > 1;

  const safetyTips = [
    {
      icon: Shield,
      title: "Verify Driver Identity",
      description: "Always check the driver's profile and ratings before booking a ride."
    },
    {
      icon: CheckCircle,
      title: "Share Your Trip Details",
      description: "Let friends or family know your travel plans and expected arrival time."
    },
    {
      icon: Star,
      title: "Rate Your Experience",
      description: "Help build a trustworthy community by rating drivers after your trip."
    },
    {
      icon: Phone,
      title: "Keep Emergency Contacts",
      description: "Always have emergency numbers saved and accessible during your journey."
    }
  ];

  const friendlyTips = [
    "💡 Book rides in advance for better availability",
    "🚗 Carpooling reduces traffic and helps environment",
    "⭐ Higher rated drivers often provide better experience",
    "💰 Split costs make travel more affordable for everyone"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Mobile Tips Toggle Button */}
          <div className="lg:hidden mb-4 order-1">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-green-200/50 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-md">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Safety & Tips</span>
              </div>
              <div className="text-green-600">
                {showTips ? '−' : '+'}
              </div>
            </button>
          </div>

          {/* Sidebar - Tips Section */}
          <div className={`lg:col-span-1 order-2 lg:order-1 ${showTips ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-6 space-y-4">
              
              {/* Header - Hidden on mobile when collapsed */}
              <div className="hidden lg:block bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-green-200/50">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-md">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Helpful Tips</h2>
                </div>
                <p className="text-green-700 text-sm">Stay safe and make the most of your ride-sharing experience</p>
              </div>

              {/* Safety Tips */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-lg border border-green-200/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                  <h3 className="text-base lg:text-lg font-bold text-gray-900">Safety First</h3>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  {safetyTips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                      <div key={index} className="group p-2 lg:p-3 bg-green-50/70 rounded-lg lg:rounded-xl hover:bg-green-100/70 transition-all duration-300 border border-green-200/30">
                        <div className="flex items-start space-x-2 lg:space-x-3">
                          <div className="p-1 lg:p-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md lg:rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                            <IconComponent className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-xs mb-1">{tip.title}</h4>
                            <p className="text-gray-600 text-xs leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Friendly Tips */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-lg border border-green-200/50">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
                  <h3 className="text-base lg:text-lg font-bold text-gray-900">Quick Tips</h3>
                </div>
                <div className="space-y-2">
                  {friendlyTips.map((tip, index) => (
                    <div key={index} className="p-2 lg:p-3 bg-gradient-to-r from-green-50/80 to-emerald-50/80 rounded-lg lg:rounded-xl border border-green-200/30">
                      <p className="text-gray-700 text-xs leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Main Content - Rides List */}
          <div className="lg:col-span-3 order-3 lg:order-2">
            
            {/* Page Header */}
            <div className="mb-4 lg:mb-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border border-green-200/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Available <span className="text-green-600">Rides</span>
                    </h1>
                    <p className="text-gray-600 mt-1 lg:mt-2 text-sm lg:text-base">Find and book your next ride with trusted drivers</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg sm:ml-4">
                    <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>

                {/* Advanced Filters */}
                <div className="bg-green-50/50 rounded-xl p-4 mb-4 border border-green-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Filter Rides</h3>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      
                      {/* Leaving From */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Leaving From
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Any city"
                            value={filters.leavingFrom}
                            onChange={(e) => setFilters({...filters, leavingFrom: e.target.value})}
                            className="w-full pl-10 pr-3 py-2.5 border border-green-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      {/* Going To */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Going To
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Any destination"
                            value={filters.goingTo}
                            onChange={(e) => setFilters({...filters, goingTo: e.target.value})}
                            className="w-full pl-10 pr-3 py-2.5 border border-green-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="date"
                            value={filters.date}
                            onChange={(e) => setFilters({...filters, date: e.target.value})}
                            className="w-full pl-10 pr-3 py-2.5 border border-green-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          />
                        </div>
                      </div>

                      {/* Passengers */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Passengers
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <select
                            value={filters.passengers}
                            onChange={(e) => setFilters({...filters, passengers: parseInt(e.target.value)})}
                            className="w-full pl-10 pr-8 py-2.5 border border-green-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none"
                          >
                            <option value={1}>1 passenger</option>
                            <option value={2}>2 passengers</option>
                            <option value={3}>3 passengers</option>
                            <option value={4}>4 passengers</option>
                            <option value={5}>5 passengers</option>
                            <option value={6}>6 passengers</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                    </div>
                  </div>
                
                
                
                {/* Stats */}
                <div className="pt-3 lg:pt-4 border-t border-green-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-xs lg:text-sm space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">{filteredRides.length} rides found</span>
                    </div>
                    {hasActiveFilters && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Filters applied</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Updated just now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rides Grid */}
            <div className="space-y-3 lg:space-y-4">
              {filteredRides.map((ride, index) => (
                <div 
                  key={ride.id || index} 
                  className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:border-green-300/70 group"
                >
                  <div className="p-4 lg:p-6">
                    {/* Route Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-3 sm:space-y-0">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="text-lg lg:text-xl font-bold text-gray-900 truncate">{ride.from}</div>
                        <div className="flex items-center mx-3 lg:mx-4 flex-1 min-w-0">
                          <div className="flex-1 border-t-2 border-dashed border-green-300"></div>
                          <div className="p-1.5 lg:p-2 bg-green-100 rounded-full mx-2 lg:mx-3 group-hover:bg-green-200 transition-colors duration-300">
                            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
                          </div>
                          <div className="flex-1 border-t-2 border-dashed border-green-300"></div>
                        </div>
                        <div className="text-lg lg:text-xl font-bold text-gray-900 truncate">{ride.to}</div>
                      </div>
                      <div className="text-right sm:ml-4">
                        <div className="text-xl lg:text-2xl font-bold text-green-600">₹{ride.costPerSeat}</div>
                        <div className="text-xs text-gray-500">per seat</div>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
                      <div className="flex items-center p-2.5 lg:p-3 bg-green-50/70 rounded-lg lg:rounded-xl">
                        <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 mr-2 lg:mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs text-gray-500 uppercase tracking-wide">Date</div>
                          <div className="text-xs lg:text-sm font-semibold text-gray-900 truncate">{ride.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center p-2.5 lg:p-3 bg-blue-50/70 rounded-lg lg:rounded-xl">
                        <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 mr-2 lg:mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs text-gray-500 uppercase tracking-wide">Time</div>
                          <div className="text-xs lg:text-sm font-semibold text-gray-900 truncate">{ride.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center p-2.5 lg:p-3 bg-purple-50/70 rounded-lg lg:rounded-xl sm:col-span-2 lg:col-span-1">
                        <Users className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 mr-2 lg:mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs text-gray-500 uppercase tracking-wide">Available</div>
                          <div className="text-xs lg:text-sm font-semibold text-gray-900 truncate">{ride.availableSeat} seats</div>
                        </div>
                      </div>
                    </div>

                    {/* Driver Info & Action */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 lg:pt-4 border-t border-green-100 space-y-3 sm:space-y-0">
                      <div className="flex items-center">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 lg:mr-4 shadow-md flex-shrink-0">
                          <User className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">{ride.name || "Anonymous User"}</p>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 ml-2">4.8 (24 rides)</span>
                          </div>
                        </div>
                      </div>
                      
                      <a href={`tel:${ride.userId?.phoneNumber}`} className="sm:ml-4">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg lg:rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group">
                          <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          <span>Call Driver</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results State */}
            {filteredRides.length === 0 && hasActiveFilters && (
              <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-8 lg:p-12 shadow-lg border border-green-200/50 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Filter className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">No rides found</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  No rides match your filter criteria. Try adjusting your filters.
                </p>
                <button 
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg lg:rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Empty State */}
            {rides.length === 0 && (
              <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl p-8 lg:p-12 shadow-lg border border-green-200/50 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">No rides available</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">Check back later for new ride postings or try adjusting your search criteria</p>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg lg:rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm">
                  Refresh Page
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}