import bodyPartIcon from '../assets/icons/body-part.png';
import targetIcon from '../assets/icons/target.png';
import equipmentIcon from '../assets/icons/equipment.png';

import MescInfoFlag from './MescInfoFlag.js';

function Detail({ exerciseDetails }) {
    const infoFlags = [
        {
            id: 1,
            icon: bodyPartIcon,
            text: exerciseDetails.bodyPart
        },
        {
            id: 2,
            icon: targetIcon,
            text: exerciseDetails.target
        },
        {
            id: 3,
            icon: equipmentIcon,
            text: exerciseDetails.equipment
        }
    ].map((info) => {
        return (
            <MescInfoFlag
                key={info.id}
                icon={info.icon}
                text={info.text}
            />
        );
    });
    
    return (
        <div className="details-container box-border md:flex md:items-center">
            <img src={exerciseDetails.gifUrl} className="w-full md:w-3/4"></img>

            <div className="exercise-detail-body box-border md:ml-8 lg:ml-14">
                <h2 className="exercise-name font-josefin-sans font-bold text-2xl capitalize my-4 md:mt-0 xl:text-4xl">{exerciseDetails.name}</h2>
                <p>Exercises keep you strong. {exerciseDetails.name} is one of the best exercises to target your {exerciseDetails.target}. It will help you to improve your mood and gain energy.</p>

                <div className="info-flag-container box-border mt-6 mb-8 md:mb-0">
                    { infoFlags }
                </div>
            </div>
        </div>
    );
}

export default Detail; 