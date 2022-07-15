import gymImg from '../assets/icons/gym.png'

function BodyPartCard({ partName, id, isActive, handleClick, len }) {
    return (
        <button className={`bodypart-card box-border w-[150px] h-[150px] bg-white rounded-sm md:w-[200px] md:h-[200px] transition-all duration-300 ease-in-out rounded-bl-md ${isActive ? "border-t-4 border-[#FF2625] cursor-default " : "hover:scale-[1.07] focus:scale-100 active:scale-100 cursor-pointer"} ${id !== 0 ? "ml-4 sm:ml-8 md:ml-10 lg:ml-12" : ""}`} onClick={handleClick}>
            <img className="gymImg w-8 block mx-auto" src={gymImg} alt="Gym"></img>
            <p className="text-center mt-4 font-josefin-sans text-sm xl:text-lg">{partName}</p>
        </button>
    )
}

export default BodyPartCard;