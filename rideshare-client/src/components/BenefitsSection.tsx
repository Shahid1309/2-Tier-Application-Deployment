// // components/BenefitsSection.tsx
// import Image from 'next/image';
// import img1 from "../../public/Images/Ride.png"
// import img2 from "../../public/Images/Connect.png"
// import img3 from "../../public/Images/safeRide.png"
// const benefits = [
 
//   {
//     title: "Save Money",
//     description: "Split ride costs with fellow passengers.",
//     icon: img1,
//   },
//   {
//     title: "Meet New People",
//     description: "Enjoy shared rides and make new connections.",
//     icon: img2,
//   },
//   {
//     title: "Safe & Verified",
//     description: "All drivers are verified for your safety.",
//     icon: img3,
//   },

// ];

// const BenefitsSection = () => {
//   return (
//     <section className="bg-green-100 py-20 px-4">
//       <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Why Choose Us</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <div key={index} className="bg-white rounded-xl p-6 shadow text-center">
//             <Image src={benefit.icon} alt={benefit.title} width={80} height={80} className="mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//             <p className="text-gray-600">{benefit.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

// components/BenefitsSection.tsx
import Image from 'next/image';
import img1 from "../../public/Images/Ride.png"
import img2 from "../../public/Images/Connect.png"
import img3 from "../../public/Images/safeRide.png"

const benefits = [
  {
    title: "Save Money",
    description: "Split ride costs with fellow passengers and enjoy affordable transportation without compromising on comfort.",
    icon: img1,
    highlight: "Up to 60% savings"
  },
  {
    title: "Meet New People",
    description: "Enjoy shared rides and make new connections with like-minded travelers in your community.",
    icon: img2,
    highlight: "Build connections"
  },
  {
    title: "Safe & Verified",
    description: "All drivers are verified for your safety with background checks and real-time tracking for peace of mind.",
    icon: img3,
    highlight: "100% verified"
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 via-green-100 to-green-200 py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-800 text-sm font-medium mb-6 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Premium Benefits
          </div>
          <h2 className="text-5xl font-black text-green-800 mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of affordability, safety, and community. 
            Join thousands who have already discovered a better way to travel.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/50 group-hover:border-green-200 group-hover:scale-105 transform relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-100/0 group-hover:from-green-50/50 group-hover:to-green-100/30 transition-all duration-500 rounded-2xl"></div>
                
                {/* Highlight badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                  {benefit.highlight}
                </div>

                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 scale-110"></div>
                  <div className="relative bg-white rounded-3xl p-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image 
                      src={benefit.icon} 
                      alt={benefit.title} 
                      width={100} 
                      height={100} 
                      className="mx-auto group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-300 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-150 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-green-900 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>

              {/* Index number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-black text-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-green-700 font-medium">Happy Users</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                1M+
              </div>
              <div className="text-green-700 font-medium">Rides Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-green-700 font-medium">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-green-700 font-medium">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;