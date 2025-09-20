import { FeatureCard } from '../../components/Feature/FeatureCard';

export const FeaturesPage = () => {
    return (
        // 1. Reduced vertical padding on mobile (py-16) and larger on medium screens up (md:py-24)
        <section id='features' className="bg-brand-green py-16 md:py-24 px-4 text-center">
            <div className="container relative z-10 max-w-2xl mx-auto text-center">
                {/* 2. Made heading font sizes smaller on mobile */}
                <h6 className="font-600 text-xl md:text-2xl text-brand-bg">
                    OUR POS FEATURES
                </h6>
                <p className="font-400 text-3xl md:text-6xl text-brand-bg mt-4 font-besley leading-tight">
                    A restaurant pos made for all your needs
                </p>
                <p className="font-400 text-lg md:text-xl text-brand-bg max-w-2xl mx-auto mt-4">
                    A quick and easy-to-use restaurant billing software that makes managing high order volumes butter smooth
                </p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='grid mt-8 justify-center gap-8 md:gap-12 md:grid-cols-4'>
                    <FeatureCard
                        title='Streamline Orders & Billing'
                        features={[
                            "Fast Billing & KOT Printing",
                            "Multi-Device & Counter Sync",
                            "Split & Merge Bills",
                            "Customizable Invoices"
                        ]} />
                    <FeatureCard
                        title='Control Inventory & Menu'
                        features={[
                            "Smart Menu Management",
                            "Recipe-Level Inventory Tracking",
                            "Wastage Alerts",
                            "Multi-Outlet Menu Sync"
                        ]} />
                    <FeatureCard
                        title='Empower Your Staff'
                        features={[
                            "Role-Based Access",
                            "Performance Tracking",
                            "Shift Management"
                        ]} />
                    <FeatureCard
                        title=' Insights & Reporting'
                        features={[
                            "Daily Sales Summaries",
                            "Top Dishes & Peak Hours",
                            "Tax & Compliance Reports",
                            "Multi-Outlet Dashboard"
                        ]} />
                </div>
                <div className='mt-8 grid md:grid-cols-3 justify-center gap-8 md:gap-12'>
                    <FeatureCard
                        title='Online Ordering & Integrations'
                        features={[
                            "Zomato/Swiggy Integration",
                            "Self-Ordering QR Menus",
                            "Takeaway & Delivery Tracking",
                            "Third-Party Tools"
                        ]} />
                    <FeatureCard
                        title='Payments & Customer Loyalty'
                        features={[
                            "Multiple Payment Modes",
                            "Loyalty & Discounts",
                            "Feedback System"
                        ]} />
                    <FeatureCard
                        title='Cloud + Offline Ready'
                        features={[
                            "Works Without Internet.",
                            "Automatic Sync ",
                            "Anywhere Access"
                        ]} />
                </div>
            </div>
        </section>
    );
}