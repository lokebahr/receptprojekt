import { useParams } from 'react-router-dom';  
import { useEffect, useState } from 'react';
import ImageStyle from './ImageStyle';
import { useOutletContext } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();  
  const [information, setInformation] = useState(null);
  const {addToCart} = useOutletContext(); 

 

    
    


  useEffect(() => {
    const getRecipeInstructions = async () => {
      const API_KEY = "819ed5d062a148c1a9e29bc625e8346d";
      const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setInformation(data);  
        console.log(information.winePairing);
      } catch (error) {
        console.error("Failed to fetch recipe information:", error);
      }
    };

    getRecipeInstructions();  
  }, [id]);

  if (!information) {
    return <p>Loading recipe details...</p>;  
  }
  
  const cleanedString = information.instructions
        .replace(/<\/?(ul|ol)>/g, '')    
        .replace(/<\/?li>/g, '\n');      

    
    const instructionArray = cleanedString.split('\n').filter(item => item.trim() !== '');
  
    const removeLinksFromSummary = (summary) => {
        
        return summary.replace(/<a[^>]*>([^<]+)<\/a>/g, '$1'); 
    
        
      };


  return (
    <div>
      <h2>{information.title}</h2>
      <ImageStyle url={information.image} />
      <div>
        <h3>Summary:</h3>
        <p dangerouslySetInnerHTML={{ __html: removeLinksFromSummary(information.summary) }} />
      </div>

      <div className="ingredients-container">
        <div className="ingredients-box">
          <h3>Ingredients:</h3>
          <ul>
            {information.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name}: {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}
              </li>
            ))}
            <button onClick = {() => addToCart(information)}>Add to cart</button>
          </ul>
        </div>
      </div>

      <h3>Instructions</h3> 
      <ol>
            {instructionArray.map((instruction, index) => (
                <li key={index}>{instruction}</li>  
            ))}
        </ol>

    </div>
    
  );
}

export default RecipeDetails;
