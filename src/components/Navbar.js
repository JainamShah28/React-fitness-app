import { Link } from 'react-router-dom';

import '../index.css';
import websiteLogo from '../assets/images/Logo.png';

function Navbar() {
    return (
        <header className="website-header box-border font-josefin-sans font-semibold flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-12 lg:justify-start">
            <Link to='/' className="website-logo w-fit md:mr-20 xl:mr-24">
                <img className="logo w-8" src={websiteLogo} alt="logo"></img>
            </Link>

            <nav className="navbar box-border">
                <Link to='/' className="text-[#3A1212] border-b-4 border-[#FF2625]">Home</Link>
                <a href="#exercises" className="text-[#3A1212] ml-6 md:ml-8">Exercises</a>
            </nav>
        </header>
    )
}

export default Navbar;