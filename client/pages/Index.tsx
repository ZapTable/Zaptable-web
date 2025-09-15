import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Screenshots from "@/components/sections/Screenshots";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import LeadForm from "@/components/sections/LeadForm";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <LeadForm />
      <FinalCTA />
    </Layout>
  );
}
