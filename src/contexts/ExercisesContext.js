import React from 'react';

const ExercisesContext = React.createContext();

function ExcercisesProvider(props) {
    const [exercises, setExercises ] = React.useState([]);
    
    return (
        <ExercisesContext.Provider value={[exercises, setExercises]} >
            {props.children}
        </ExercisesContext.Provider>
    )
}

export { ExercisesContext, ExcercisesProvider };