import { useState } from 'react'; // 1. Import useState
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import Button from '@mui/material/Button';

export const Header = () => {
    // 2. Add state to manage the menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex justify-between items-center px-8 py-4 text-brand-dark font-aspekta relative z-50 bg-brand-bg">
                <div className="text-2xl font-bold font-besley text-brand-green">
                    Zaptable
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center font-besley">
                    <li><a href="#about-section" className="hover:text-brand-green transition-colors">About</a></li>
                    <li><a href="#solutions-section" className="hover:text-brand-green transition-colors">Solutions</a></li>
                    <li><a href="#features" className="hover:text-brand-green transition-colors">Features</a></li>
                    <li><a href="#pricing-section" className="hover:text-brand-green transition-colors">Pricing</a></li>
                </ul>

                {/* Desktop Button */}
                <Button
                    variant="contained"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        backgroundColor: "#073127",
                        color: "#EBEDE8",
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        transition: 'background-color 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: "#004838",
                            color: "#E2FB6C"
                        },
                    }}
                >
                    Get Started
                </Button>

                {/* Mobile Menu Icon (Hamburger) */}
                <div className="md:hidden text-3xl cursor-pointer">

                    <button onClick={toggleMenu} aria-label="Open menu">
                        <MenuIcon fontSize='large' />
                    </button>
                </div>
            </nav>

            {/* 4. The Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-brand-bg flex flex-col items-center justify-center gap-8
                           transition-transform duration-300 ease-in-out md:hidden ${
                           isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                           }`}
            >
                {/* Close button inside the menu */}
                <button
                    onClick={toggleMenu}
                    aria-label="Close menu"
                    className="absolute top-5 right-8"
                >
                    <CloseIcon fontSize='large' />
                </button>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-8 text-2xl text-center font-besley">
                    {/* Add onClick to each link to close the menu upon navigation */}
                    <li><a href="#about-section" onClick={toggleMenu}>About</a></li>
                    <li><a href="#solutions-section" onClick={toggleMenu}>Solutions</a></li>
                    <li><a href="#features" onClick={toggleMenu}>Features</a></li>
                    <li><a href="#pricing-section" onClick={toggleMenu}>Pricing</a></li>
                </ul>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#073127",
                        color: "#EBEDE8",
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                            backgroundColor: "#004838",
                            color:"#E2FB6C"
                        },
                    }}
                >
                    Get Started
                </Button>
            </div>
        </>
    )
}

export default Header;