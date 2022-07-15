import React from "react";

import arrowLeft from '../assets/icons/left-arrow.png';
import arrowRight from '../assets/icons/right-arrow.png';

import BodyPartCard from "./BodyPartCard.js";

import { BodyPartContext } from '../contexts/BodyPartContext.js';

function HorizontalScrollBar({ bodyparts }) {
    const [bodyPart, setBodyPart] = React.useContext(BodyPartContext),
        handleClick = (partName) => {
            setBodyPart(partName);
        },
        len = bodyparts.length,
        bodyPartsList = bodyparts.map((bodypart, index) => {
            return (
                <BodyPartCard
                    key={index}
                    partName={bodypart}
                    id={index}
                    handleClick={() => handleClick(bodypart)}
                    isActive={bodyPart === bodypart}
                    length={len}
                />
            )
        });

    function slideLeft() {
        const slider = document.querySelector(".slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    function slideRight() {
        const slider = document.querySelector(".slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div className="bodyparts-list-container mt-14 box-border flex flex-col justify-center relative w-full px-4 sm:px-8 md:px-10 lg:px-12">
            <div className="box-border slider overflow-x-scroll scroll w-full scrollbar-hide whitespace-nowrap scroll-smooth h-[160px] md:h-[230px]">
                {bodyPartsList}
            </div>

            <div className="scroll-buttons box-border self-end flex mt-4">
                <button className="arrow-left" onClick={slideLeft}>
                    <img src={arrowLeft} alt="arrow-left"></img>
                </button>

                <button className="arrow-right ml-2 xl:ml-4" onClick={slideRight}>
                    <img src={arrowRight} alt="arrow-right"></img>
                </button>
            </div>
        </div>
    )
}

export default HorizontalScrollBar;