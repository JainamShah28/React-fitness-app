import ExerciseCard from "./ExerciseCard.js";
import Pagination from "./Pagination.js";

function ExercisesGrid({ currentExercises, exercises, exercisePerPage, setPage }) {
    return (
        <div className="exercises-grid box-border">
            <div className="exercises-grid box-border grid grid-cols-2 gap-3 md:gap-8 xl:grid-cols-4">
                {
                    currentExercises && currentExercises.map((exercise, index) => {
                        return (
                            <ExerciseCard
                                key={index}
                                exercise={exercise}
                            />
                        );
                    })
                }
            </div>

            {
                exercises.length > exercisePerPage &&
                <Pagination
                    exercisePerPage={exercisePerPage}
                    totalExercises={exercises.length}
                    setPage={setPage}
                />
            }
        </div>
    )
}

export default ExercisesGrid;