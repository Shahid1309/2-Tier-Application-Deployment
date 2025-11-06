'use client';
import Dashboard from '@/components/DashboardCompo/Dashboard';
import RecentRides from '@/components/DashboardCompo/RecentRides';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); // 🔁 Redirect if no token
    } else {
      setLoading(false); // Allow render
    }
  }, []);

  if (loading) return <p className="p-4">Checking Auth...</p>;

  return (
    <div className="">
      
      <Dashboard/>
      
      <RecentRides/>
    </div>
  );
}
