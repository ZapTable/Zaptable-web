// src/pages/About/AboutPage.tsx

import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Button from '@mui/material/Button';

export const AboutPage = () => {
    return (
        <div className="bg-brand-bg">
            {/* 1. Hero Section */}
            {/* Adjusted vertical padding and hero font size for smaller screens */}
            <section id="about-section" className="text-center py-16 md:py-20 px-4">
                <h1 className="font-besley text-4xl sm:text-5xl md:text-7xl font-bold text-brand-dark leading-tight">
                    Powering the Heart of India's Hospitality.
                </h1>
                <p className="font-aspekta text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mt-6 leading-tight">
                    We built Zaptable to give restaurant owners the control, insight, and freedom to not just run their business, but to grow it.
                </p>
            </section>

            {/* 2. Our Story Section */}
            {/* Adjusted padding and heading size. The grid stacks to a single column on mobile automatically. */}
            <section className="bg-brand-green text-brand-light py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-besley text-3xl md:text-4xl font-bold">Born from the Kitchen, Not the Boardroom.</h2>
                        <p className="font-aspekta mt-4 text-gray-300 leading-8">
                            Our journey began in the bustling chaos of a family-run restaurant. We saw firsthand the challenges of legacy software—clunky, expensive, and restrictive. We knew there had to be a better way. Zaptable is that way—a flexible, powerful platform built by people who understand the restaurant business inside and out.
                        </p>
                    </div>
                    {/* On mobile, the image will appear below the text, which is a good flow */}
                    <div>
                        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" alt="Interior of a modern restaurant" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* 3. Our Values Section */}
            {/* Adjusted padding and heading size. The three values will stack vertically on mobile. */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-besley text-3xl md:text-4xl font-bold text-brand-dark">What We Stand For</h2>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12 text-left">
                        {/* Value 1 */}
                        <div className="p-6">
                            <HandshakeIcon sx={{ fontSize: 40, color: '#004838' }} />
                            <h3 className="font-aspekta text-2xl font-bold mt-4 text-brand-dark">Partnership</h3>
                            <p className="mt-2 text-brand-gray">Your success is our success. We provide unlimited support and act as an extension of your team.</p>
                        </div>
                        {/* Value 2 */}
                        <div className="p-6">
                            <LightbulbIcon sx={{ fontSize: 40, color: '#004838' }} />
                            <h3 className="font-aspekta text-2xl font-bold mt-4 text-brand-dark">Radical Simplicity</h3>
                            <p className="mt-2 text-brand-gray">Powerful technology shouldn't be complicated. Our tools are intuitive and a joy to use.</p>
                        </div>
                        {/* Value 3 */}
                        <div className="p-6">
                            <TrendingUpIcon sx={{ fontSize: 40, color: '#004838' }} />
                            <h3 className="font-aspekta text-2xl font-bold mt-4 text-brand-dark">Innovation for Growth</h3>
                            <p className="mt-2 text-brand-gray">We are constantly building features that help you adapt, thrive, and increase your bottom line.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA Section */}
            {/* Adjusted padding and heading size for mobile */}
            <section className="bg-brand-dark py-16 md:py-20 px-4 text-center">
                 <h2 className="font-besley text-3xl md:text-4xl font-bold text-brand-light">Ready to Transform Your Restaurant?</h2>
                 <p className="font-aspekta text-lg text-gray-300 max-w-2xl mx-auto mt-4">See how Zaptable can reduce your costs, streamline your operations, and delight your customers.</p>
                 <Button
                    variant="contained"
                    sx={{
                        marginTop: '2rem',
                        backgroundColor: "#EBEDE8",
                        color: "#073127",
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: "#000000",
                            color:"#ffffff"
                        },
                    }}
                >
                    View a Demo
                </Button>
            </section>
        </div>
    );
};