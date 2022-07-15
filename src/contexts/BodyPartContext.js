import React from 'react';

const BodyPartContext = React.createContext();

function BodyPartProvider(props) {
    const [bodyPart, setBodyPart] = React.useState('all');

    return (
        <BodyPartContext.Provider value={[bodyPart, setBodyPart]}>
            {props.children}
        </BodyPartContext.Provider>
    );
}

export { BodyPartContext, BodyPartProvider };