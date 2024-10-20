import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Välkommen till recpet AB</h1>
            <p>På denna sidan kan du hitta recept till din nästa matlagning!</p>
            <h4>Börja sök!! 
                <button onClick = {() => {navigate(`/search-recipe`)}}>
                🔍 
                </button>
            </h4>
        </div>
    );
}

export default Home;