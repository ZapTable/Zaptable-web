import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    // Using an array for links makes them easier to manage
    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About', href: '#about' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, href: '#', 'aria-label': 'Facebook' },
        { icon: <TwitterIcon />, href: '#', 'aria-label': 'Twitter' },
        { icon: <LinkedInIcon />, href: '#', 'aria-label': 'LinkedIn' },
    ];

    return (
        <footer className="bg-brand-green text-brand-light font-aspekta">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold font-besley text-brand-lime">Zaptable</h2>
                        <p className="mt-2 text-gray-300">Simplifying your workflow.</p>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((link) => (
                                <a key={link['aria-label']} href={link.href} aria-label={link['aria-label']} className="text-gray-300 hover:text-brand-lime transition-colors duration-200">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-bold tracking-wider uppercase ">Product</h3>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-brand-lime transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-brand-lime transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-12 border-t border-brand-gray pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zaptable. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;