import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to FlavorBox</h1>
            <p>FlavorBox is a website for you to find and plan your next meal!</p>
            <h4>Begin looking for recipes!!! 
                <button onClick = {() => {navigate(`/search-recipe`)}}>
                🔍 
                </button>
            </h4>
        </div>
    );
}

export default Home;