import React from 'react';
import { useParams } from 'react-router-dom';

import { apiOptions, fetchData, videoApiOptions } from '../utils/fetchData.js';

import '../index.css';

import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarExercises from '../components/SimilarExercises.js';

function ExerciseDetail() {
    const { id } = useParams(),
        [exerciseDetails, setExerciseDetails] = React.useState([]),
        [exerciseVideos, setExerciseVideos] = React.useState([]),
        [similarTargetExercises, setSimilarTargetExercises] = React.useState([]),
        [similarEquipmentExercises, setSimilarEquipmentExercises] = React.useState([]);

    React.useEffect(() => {
        const getDetails = async () => {
            const details = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, apiOptions);
            setExerciseDetails(details);
        };

        getDetails();
    }, [id]);

    React.useEffect(() => {
        const getVideos = async () => {
            if (exerciseDetails.name) {
                const videos = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetails.name}`, videoApiOptions);
                setExerciseVideos(videos.contents);
            }
        }

        getVideos();
    }, [exerciseDetails.name]);

    React.useEffect(() => {
        const getSimilarExercises = async () => {
            if (exerciseDetails.target) {
                const exercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetails.target}`, apiOptions);
                setSimilarTargetExercises(exercises);
            }
        }

        getSimilarExercises();
    }, [exerciseDetails.target]);

    React.useEffect(() => {
        const getSimilarExercises = async () => {
            if (exerciseDetails.equipment) {
                const exercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetails.equipment}`, apiOptions);
                setSimilarEquipmentExercises(exercises);
            }
        }

        getSimilarExercises();
    }, [exerciseDetails.equipment]);

    window.scrollTo({
        top: -1800,
        behavior: "smooth"
    });

    return (
        <div className="exercise-detail box-border px-4 mt-4 sm:px-8 sm:mt-6 md:mt-8 md:px-10 lg:px-12">
            <Detail exerciseDetails={exerciseDetails} />
            <ExerciseVideos
                name={exerciseDetails.name}
                exerciseVideos={exerciseVideos}
            />
            <SimilarExercises
                similarTargetExercises={similarTargetExercises}
                similarEquipmentExercises={similarEquipmentExercises}
            />
        </div>
    );
}

export default ExerciseDetail;