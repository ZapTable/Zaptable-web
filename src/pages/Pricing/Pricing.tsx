import { PricingCard } from "../../components/Pricing/PricingCard";

export const PricingPage = () => {
  return (
    <section id="pricing-section" className="py-24">
      <div className="max-w-9xl mx-auto px-6">
        <div className="bg-gray-200 rounded-3xl shadow-xl p-12">
      <div className="container relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-600 text-4xl text-brand-green">Choose the right plan for your restaurant</h2>
        <p className="font-400 text-xl text-brand-gray max-w-2xl mx-auto mt-4">
          From small cafes to multi-outlet chains — we’ve got a plan that scales with your business.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {/* Starter Plan */}
        <PricingCard
          title="Starter"
          price="₹999"
          description="Perfect for small cafes or food trucks just starting out."
          buttonText="Get Started"
          features={[
            { label: "Third-party integrations", enabled: false },
            { label: "Advanced analytics", enabled: false },
            { label: "Billing & KOT printing", enabled: true },
            { label: "Basic menu management", enabled: true },
            { label: "Simple inventory tracking", enabled: true },
            { label: "Staff & role management (up to 5 users)", enabled: true },
            { label: "Basic support (chat/email)", enabled: true },
          ]}
        />

        {/* Growth Plan */}
        <PricingCard
          title="Growth"
          price="₹4999"
          description="For growing restaurants managing multiple orders and staff."
          buttonText="Get Started"
          features={[
            { label: "All Starter features", enabled: true },
            { label: "Multi-device & multi-counter support", enabled: true },
            { label: "Advanced inventory & wastage tracking", enabled: true },
            { label: "Loyalty programs & discounts", enabled: true },
            { label: "Online ordering integration (Zomato/Swiggy)", enabled: true },
            { label: "Detailed sales & staff performance reports", enabled: true },
            { label: "Priority support", enabled: true },
          ]}
        />

        {/* Enterprise Plan */}
        <PricingCard
          title="Enterprise"
          price="₹9999"
          description="For large chains and enterprise-level restaurants."
          buttonText="Get Started"
          features={[
            { label: "All Growth features", enabled: true },
            { label: "Multi-outlet management", enabled: true },
            { label: "Custom integrations (ERP, CRM, delivery partners)", enabled: true },
            { label: "Centralized menu & pricing control", enabled: true },
            { label: "Dedicated account manager", enabled: true },
            { label: "Unlimited users & devices", enabled: true },
            { label: "24/7 premium support", enabled: true },
          ]}
        />
      </div>
      </div>
      </div>
    </section>
  );
};

export default PricingPage;
