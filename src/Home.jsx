import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [joke, setJoke] = useState('');
    const getJoke = async () => {
        const API_KEY = "819ed5d062a148c1a9e29bc625e8346d";
        const baseUrl = `https://api.spoonacular.com/food/trivia/random?apiKey=${API_KEY}`;
        try {
          const response = await fetch(baseUrl);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setJoke(data.text);
          console.log(data.text);
        } catch (error) {
          console.error("Failed to fetch Joke:", error);
        }
      };
    const navigate = useNavigate();

    useEffect(() => {
        getJoke();
      }, []);

    return (
        
        <div>
            <h1>Welcome to FlavorBox</h1>
            <p>FlavorBox is a website for you to find and plan your next meal!</p>
            <h4>Begin looking for recipes!!! 
                <button onClick = {() => {navigate(`/search-recipe`)}}>
                🔍 
                </button>
            </h4>
            <p>Fun fact:</p>
            <h5>{joke}</h5>
        </div>
    );
}

export default Home;