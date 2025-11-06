"use client"
import BenefitsSection from "@/components/BenefitsSection";
import HeroComponent from "@/components/HomePages/HeroComponent";
import HowItWorks from "@/components/HomePages/HowItWorks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {


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
      
      <HeroComponent/>
     <HowItWorks/>
     <BenefitsSection/>
    </div>
  );
}
