import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


export const Header = () => {

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-brand-green text-brand-light font-aspekta">
            <div className="text-2xl font-aspekta text-brand-lime">
                Zaptable
            </div>

            <ul className="hidden md:flex gap-6">
                <li><a href="features">Features</a></li>
                <li><a href="solutions">Solutions</a></li>
                <li><a href="pricing">Pricing</a></li>
                <li><a href="about">About</a></li>
            </ul>
            <Button
                variant="contained"
                sx={{
                    display: { xs: 'none', md: 'inline-flex' },
                    backgroundColor: "#E2FB6C",
                    color: "#073127",
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    transition: 'background-color 0.2s ease-in-out',
                    '&:hover': {
                        backgroundColor: "#004838",
                        color:"#EBEDE8"
                    },
                }}
            >
                Get Started
            </Button>


            <div className="md:hidden text-3xl cursor-pointer">
                <div>
                    <MenuIcon fontSize='large' />
                </div>
            </div>
        </nav>
    )
}

export default Header;