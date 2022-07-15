import '../index.css';
import heroImage from '../assets/images/banner.png';

function Hero() {
    return (
        <div className="hero-section box-border font-josefin-sans relative mt-4 px-4 sm:px-8 sm:mt-6 md:mt-8 md:px-10 lg:px-12 lg:flex lg:flex-row-reverse lg:justify-between">
            <img className="hero-image block mx-auto md:w-4/5 lg:w-[45%] lg:mx-0 lg:-mt-[100px]" src={heroImage} alt="Hero image"></img>

            <div className="hero-content box-border flex flex-col items-center justify-center py-8 lg:items-start">
                <p className="text-[#FF2625] font-semibold text-sm xl:text-lg text-center">Fitness Club</p>
                <h1 className="text-center font-bold text-xl leading-8 mt-4 xl:text-4xl xl:mt-8">Sweat, Smile</h1>
                <h1 className="text-center font-bold text-xl leading-8 mb-4 xl:text-4xl xl:mt-3 xl:mb-8">And Repeat</h1>
                <p className="text-center">Checkout the most effective exercises personalized to you.</p>
                <a href="#exercises" className="btnExplore box-border bg-[#FF2625] hover:bg-[#d11b1b] text-white font-medium py-2 text-center px-3 text-sm rounded-sm mt-6 xl:mt-10 xl:text-base xl:px-5 xl:py-3 xl:rounded-md">Explore Exercises</a>
            </div>
        </div>
    )
}

export default Hero;