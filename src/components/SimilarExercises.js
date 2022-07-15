import React from 'react';

import ExercisesGrid from './ExercisesGrid.js';

function SimilarExercises({ similarTargetExercises, similarEquipmentExercises }) {
    const [currentTargetPage, setCurrentTargetPage] = React.useState(1),
        targetExercisePerPage = 4,
        indexOfLastTargetExercise = currentTargetPage * targetExercisePerPage,
        indexOfFirstTargetExercise = indexOfLastTargetExercise - targetExercisePerPage,
        currentTargetExercises = similarTargetExercises.slice(indexOfFirstTargetExercise, indexOfLastTargetExercise);

    const [currentEquipmentPage, setCurrentEquipmentPage] = React.useState(1),
        equipmentExercisePerPage = 4,
        indexOfLastEquipmentExercise = currentEquipmentPage * equipmentExercisePerPage,
        indexOfFirstEquipmentExercise = indexOfLastEquipmentExercise - equipmentExercisePerPage,
        currentEquipmentExercises = similarEquipmentExercises.slice(indexOfFirstEquipmentExercise, indexOfLastEquipmentExercise);

    return (
        <div className="exercises box-border">
            <h1 className="font-semibold font-josefin-sans text-xl my-8 lg:my-12 lg:text-2xl">Exercise which <span className="capitalize font-bold text-[#FF2625]">Targets</span> same muscle</h1>
            <ExercisesGrid
                exercises={similarTargetExercises}
                currentExercises={currentTargetExercises}
                exercisePerPage={targetExercisePerPage}
                setPage={setCurrentTargetPage}
            />

            <h1 className="font-semibold font-josefin-sans text-xl my-8 lg:my-12 lg:text-2xl">Exercises which use the same <span className="capitalize font-bold text-[#FF2625]">Equipment</span></h1>
            <ExercisesGrid
                exercises={similarEquipmentExercises}
                currentExercises={currentEquipmentExercises}
                exercisePerPage={equipmentExercisePerPage}
                setPage={setCurrentEquipmentPage}
            />
        </div>
    );
}

export default SimilarExercises;