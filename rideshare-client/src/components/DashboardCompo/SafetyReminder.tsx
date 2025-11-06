import { ShieldCheck, Phone, UserCheck } from 'lucide-react';

const SafetyReminder = () => {
  const tips = [
    {
      icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
      title: 'Verified Drivers',
      description: 'All drivers are verified to ensure your safety during the ride.',
    },
    {
      icon: <Phone className="text-blue-600 w-6 h-6" />,
      title: 'Emergency Contact',
      description: 'Share your trip with someone you trust in case of emergency.',
    },
    {
      icon: <UserCheck className="text-blue-600 w-6 h-6" />,
      title: 'Profile Checks',
      description: 'Always check driver and rider profiles before confirming a ride.',
    },
  ];

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">🚨 Safety Reminders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-md hover:shadow-sm transition">
            <div>{tip.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyReminder;
