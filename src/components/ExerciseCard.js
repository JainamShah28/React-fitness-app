import '../index.css';

import { Link } from 'react-router-dom';

function ExerciseCard({ exercise }) {
    return (
        <div className="exercise-card box-border bg-white w-full max-w-300px hover:border-t-4 hover:border-black rounded-md p-4 transition-all duration-300 ease-linear hover:scale-105">
            <Link to={`/exercise/${exercise.id}`} className="box-border w-full">
                <img src={exercise.gifUrl} alt={exercise.name} className="exercise-img"></img>

                <p>
                    <span className="body-part bg-[#ffa9a9] text-white px-3 py-[0.18rem] capitalize rounded-xl text-xs">{exercise.bodyPart}</span>
                    <span className="target-muscle bg-[#fcc757] text-white px-3 py-[0.18rem] capitalize rounded-xl text-xs ml-2">{exercise.target}</span>
                </p>

                <h3 className="name mt-4 font-semibold capitalize">{exercise.name}</h3>
            </Link>
        </div>
    );
}

export default ExerciseCard;