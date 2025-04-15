import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import {HeroSection} from '../components/custom/Homepage/HeroSection'
import {HowItWorksSection} from '../components/custom/Homepage/HowItWorks'
import {KeyFeaturesSection} from '../components/custom/Homepage/KeyFeaturesSection'
import {PricingSection} from '../components/custom/Homepage/PricingSection'
import {TestimonialsSection} from '../components/custom/Homepage/TestemonialSections'
import { Footer } from "../components/custom/Homepage/Footer";

import { verify } from "node:crypto";
import { Toaster } from "react-hot-toast";

export default function Home() {
 
return (
  <main className="flex flex-col min-h-screen bg-white ">
    
  <HeroSection />
  <HowItWorksSection />
  <KeyFeaturesSection />
  <PricingSection />
  <TestimonialsSection />
  <Footer />
</main>
)
  
}
