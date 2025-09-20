import { FeatureCard } from '../../components/Feature/FeatureCard';

export const FeaturesPage = () => {
    return (
        <section id='features' className="bg-brand-light py-30 px-4 text-center">
            <div className="container relative z-10 max-w-2xl mx-auto text-center">
                <h6 className="font-600 text-2xl text-brand-dark">
                    OUR POS FEATURES
                </h6>
                <p className="font-400 text-6xl text-brand-green max-w-2xl mx-auto mt-4">
                    A restaurant pos made for all your needs
                </p>
                <p className="font-400 text-xl text-brand-gray max-w-2xl mx-auto mt-4">
                    A quick and easy-to-use restaurant billing software that makes managing high order volumes butter smooth
                </p>
            </div>
                    <div className='mt-8 flex justify-center gap-10'>
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
                    <div className='mt-8 flex justify-center gap-10'>
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
        </section>
    );
}
