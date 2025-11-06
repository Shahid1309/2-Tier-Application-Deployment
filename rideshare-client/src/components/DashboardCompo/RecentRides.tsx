


'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, MapPin, Clock, Users, DollarSign, Calendar, ArrowRight } from 'lucide-react';

type Ride = {
  _id: string;
  from: string;
  to: string;
  date: string;
  timing: string;
  availableSeat: number;
  costPerSeat: number;
};

export default function RecentRides() {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      const token = localStorage.getItem("token"); // 🔑 Get token from localStorage
      if (!token) {
        console.warn("No token found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/getRides', {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token in Authorization header
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Failed to fetch rides:", errorData.message);
          return;
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Expected array but got:", data);
          return;
        }

        setRides(data.slice(0, 3)); // ✅ Now safe
      } catch (err) {
        console.error("Error fetching rides:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full translate-x-16 -translate-y-8 blur-2xl"></div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-green-100 p-8 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-50 to-green-100/30 rounded-full translate-x-20 -translate-y-20"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Recent Rides</h2>
                <p className="text-green-600 text-sm font-medium">Your latest ride activities</p>
              </div>
            </div>
            <Link
              href="/my-rides"
              className="group flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium text-sm bg-green-50 hover:bg-green-100 px-4 py-2 rounded-full transition-all duration-300 border border-green-200 hover:border-green-300"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-green-600 font-medium">Loading your rides...</p>
              </div>
            </div>
          ) : rides.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-gray-600 font-medium mb-2">No rides found</p>
              <p className="text-gray-500 text-sm">Start by posting your first ride!</p>
              <Link
                href="/postRide"
                className="inline-flex items-center space-x-2 mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="h-4 w-4" />
                <span>Post a Ride</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {rides.map((ride, index) => (
                <div
                  key={ride._id}
                  className="group relative bg-gradient-to-r from-green-50/50 to-white p-6 rounded-2xl hover:from-green-50 hover:to-green-50/50 transition-all duration-300 border border-green-100 hover:border-green-200 hover:shadow-lg transform hover:-translate-y-1"
                >
                  {/* Index number */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Left side - Route info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        {/* Route */}
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="font-bold text-gray-900 text-lg">{ride.from}</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-4 h-0.5 bg-green-300"></div>
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="font-bold text-gray-900 text-lg">{ride.to}</span>
                        </div>
                        
                        {/* Date and time */}
                        <div className="flex items-center space-x-4 text-green-700">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {new Date(ride.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{ride.timing}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Details and status */}
                    <div className="flex items-center space-x-6">
                      {/* Ride details */}
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{ride.availableSeat}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{ride.costPerSeat}</span>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300 shadow-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Upcoming
                        </span>
                        <p className="text-xs text-green-600 mt-2 font-medium uppercase tracking-wide">Posted</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full group-hover:w-20 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom stats */}
          {rides.length > 0 && (
            <div className="mt-8 pt-6 border-t border-green-100">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-800">{rides.length}</div>
                  <div className="text-green-600 text-sm font-medium">Recent Rides</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-800">
                    {rides.reduce((sum, ride) => sum + ride.availableSeat, 0)}
                  </div>
                  <div className="text-green-600 text-sm font-medium">Total Seats</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-800">
                    ${rides.reduce((sum, ride) => sum + ride.costPerSeat, 0)}
                  </div>
                  <div className="text-green-600 text-sm font-medium">Total Value</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}