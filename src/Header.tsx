export const Header = () => {
    return <nav className="flex justify-between items-center px-8 py-4 bg-white">
        <div className="text-2xl font-bold">
            Zaptable
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700">
            <li><a href="features">Features</a></li>
            <li><a href="solutions">Solutions</a></li>
            <li><a href="pricing">Pricing</a></li>
            <li><a href="about">About</a></li>
        </ul>

        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Get Started
        </button>

        <div className="md:hidden text-3xl cursor-pointer">
            ☰
        </div>
    </nav>
}

export default Header;