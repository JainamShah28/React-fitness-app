import React from 'react';

import '../index.css';

import { apiOptions, fetchData } from '../utils/fetchData.js';

import HorizontalScrollBar from './HorizontalScrollBar.js';

import { ExercisesContext } from '../contexts/ExercisesContext.js';

function SearchExercises() {
    const [searchValue, setSearchValue] = React.useState(''),
        [bodyParts, setBodyParts] = React.useState([]),
        [exercises, setExercises] = React.useContext(ExercisesContext);

    React.useEffect(() => {
        const getBodyParts = async () => {
            const bodyPartsList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', apiOptions);
            setBodyParts(['all', ...bodyPartsList]);
        }

        getBodyParts();
    }, []);

    function handleSearchValue(event) {
        setSearchValue(event.target.value.toLowerCase());
    }

    async function search() {
        if (searchValue) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', apiOptions),
                filteredExercises = exercisesData.filter((exercise) => {
                    return exercise.bodyPart.toLowerCase().includes(searchValue) ||
                        exercise.equipment.toLowerCase().includes(searchValue) ||
                        exercise.name.toLowerCase().includes(searchValue) ||
                        exercise.target.toLowerCase().includes(searchValue);
                });


            setSearchValue('');
            setExercises(filteredExercises);
        }
    }

    return (
        <div className="search-exercises box-border font-josefin-sans mt-10 lg:mt-16 xl:mt-36">
            <h1 className="text-center text-2xl font-bold xl:text-4xl">Awesome Exercises You</h1>
            <h1 className="text-center text-2xl font-bold xl:text-4xl mt-2">Should Know</h1>

            <div className="search-box box-border flex flex-col items-center justify-center mt-8 px-4 sm:px-8 md:px-10 md:mt-14 md:flex-row lg:px-12">
                <input type="text" value={searchValue} onChange={handleSearchValue} className="w-full box-border border-2 border-[#f3ebeb] rounded-sm px-3 py-2 focus:outline-none focus:border-2 focus:border-[#ded2d2] md:px-8 xl:text-base xl:py-3 xl:rounded-md" placeholder="Search Exercises"></input>
                <button className="btnSearch box-border bg-[#FF2625] hover:bg-[#d11b1b] text-white mt-6 font-medium py-2 px-3 text-sm rounded-sm md:mt-0 md:px-8 xl:text-base xl:px-12 xl:py-3 xl:rounded-md" onClick={search}>Search</button>
            </div>

            <HorizontalScrollBar bodyparts={bodyParts} />
        </div>
    )
}

export default SearchExercises;