import logo from '../assets/images/Logo-1.png';

function Footer() {
    return (
        <footer className="website-footer bg-[#fff3f4] box-border flex flex-col justify-center items-center py-4 md:py-8 lg:py-12">
            <img src={logo} alt="Logo" className="w-36"></img>
            <small className="mt-2 font-bold">{`< / > by`} <span className="text-[#FF2625]">Jainam Shah</span></small>
        </footer>
    )
}

export default Footer;