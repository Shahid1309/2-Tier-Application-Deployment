
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Clock, Users, DollarSign, Car, Shield, Star, ArrowRight ,IndianRupee } from 'lucide-react';

export default function AddRide() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    availableSeat: 1,
    costPerSeat: '',
  });

  const [loading, setLoading] = useState(false);

  ;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'availableSeat' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const res = await fetch('POST → http://localhost:5050//api/rides/postRide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          name: user.name, // Inject name from localStorage
        }),
      });

      if (!res.ok) throw new Error('Failed to post ride');

      router.push('/dashboard?success=Ride posted successfully!');
    } catch (error) {
      console.error('Error posting ride:', error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const benefits = [
    { icon: Shield, text: "Safe & Verified Drivers" },
    { icon: DollarSign, text: "Earn Money Sharing Rides" },
    { icon: Users, text: "Meet New People" },
    { icon: Star, text: "Build Your Reputation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content & Image - Hidden on mobile */}
          <div className="hidden lg:block space-y-8">
            {/* Header */}
            <div>
              
              <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                Post Your <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Ride</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Share your ride with fellow travelers and make your journey more economical and social. 
                Help others reach their destination while earning some extra income.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Post Your Ride?</h3>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 hover:bg-white/80 transition-all duration-300">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium text-lg">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side - Form - Full width on mobile */}
          <div className="lg:sticky lg:top-8 lg:col-span-1 col-span-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full translate-x-20 -translate-y-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Post Your Ride</h2>
                  <p className="text-green-600">Fill in the details below</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FROM */}
                  <div className="group">
                    <label htmlFor="from" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>From</span>
                    </label>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter starting point"
                    />
                  </div>


                  <div className="group">
                    <label htmlFor="from" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>To</span>
                    </label>
                    <input
                      type="text"
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter starting point"
                    />
                  </div>

                  
                  

                  {/* DATE & TIME */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="date" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="time" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Time</span>
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900"
                      />
                    </div>
                  </div>

                  {/* SEATS & COST */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="availableSeat" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span>Available Seats</span>
                      </label>
                      <select
                        id="availableSeat"
                        name="availableSeat"
                        value={formData.availableSeat}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900"
                      >
                        {[1, 2, 3, 4].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="costPerSeat" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <IndianRupee  className="h-4 w-4 text-green-600" />
                        <span>Cost per Seat</span>
                      </label>
                      <input
                        type="number"
                        id="costPerSeat"
                        name="costPerSeat"
                        value={formData.costPerSeat}
                        onChange={handleChange}
                        min="50"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="e.g., 300"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => router.push('/dashboard')}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 group bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Post Ride</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}