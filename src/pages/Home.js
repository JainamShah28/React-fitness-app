import '../index.css';

import { BodyPartProvider } from '../contexts/BodyPartContext';
import { ExcercisesProvider } from '../contexts/ExercisesContext.js';

import Hero from '../components/Hero.js';
import SearchExercises from '../components/SearchExercises.js';
import Exercises from '../components/Exercises.js';

function Home() {
    return (
        <div className="home-section box-border">
            <Hero />
            <ExcercisesProvider>
                <BodyPartProvider >
                    <SearchExercises />
                    <Exercises />
                </BodyPartProvider>
            </ExcercisesProvider>
        </div>
    );
}

export default Home;