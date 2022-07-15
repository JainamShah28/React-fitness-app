import React from 'react';

import '../index.css';

import ExercisesGrid from './ExercisesGrid.js';

import { ExercisesContext } from '../contexts/ExercisesContext.js';
import { BodyPartContext } from '../contexts/BodyPartContext.js';

import { apiOptions, fetchData } from '../utils/fetchData.js';

function Exercises() {
    const [exercises, setExercises] = React.useContext(ExercisesContext),
        [bodyPart, setBodyPart] = React.useContext(BodyPartContext);

    React.useEffect(() => {
        const getData = async () => {
            let result;

            if (bodyPart == 'all') {
                result = await fetchData('https://exercisedb.p.rapidapi.com/exercises', apiOptions);
            } else {
                result = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, apiOptions);
            }

            setExercises(result);
        };

        getData();
    }, [bodyPart]);

    const [currentPage, setCurrentPage] = React.useState(1),
        exercisePerPage = 8,
        indexOfLastExercise = currentPage * exercisePerPage,
        indexOfFirstExercise = indexOfLastExercise - exercisePerPage,
        currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    return (
        <div className="exercises box-border px-4 sm:px-8 md:px-10 lg:px-12">
            <h1 className="text-xl xl:text-4xl font-bold my-6 font-josefin-sans lg:my-12">Showing Results</h1>
            <ExercisesGrid
                exercises={exercises}
                currentExercises={currentExercises}
                exercisePerPage={exercisePerPage}
                setPage={setCurrentPage}
            />
        </div>
    );
}

export default Exercises;