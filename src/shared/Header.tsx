import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


export const Header = () => {

    return (
        <nav className="flex justify-between items-center px-8 py-4  text-brand-dark font-aspekta">
            <div className="text-2xl font-aspekta text-brand-green">
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
                    backgroundColor: "#073127",
                    color: "#EBEDE8",
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    transition: 'background-color 0.2s ease-in-out',
                    '&:hover': {
                        backgroundColor: "#004838",
                        color:"#E2FB6C"
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