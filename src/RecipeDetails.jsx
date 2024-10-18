import { useParams } from 'react-router-dom';  // Import useParams
import { useEffect, useState } from 'react';
import ImageStyle from './ImageStyle';

function RecipeDetails() {
  const { id } = useParams();  
  const [information, setInformation] = useState(null);

 

    
    


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
        setInformation(data);  // Set the detailed recipe information
        console.log(information.winePairing);
      } catch (error) {
        console.error("Failed to fetch recipe information:", error);
      }
    };

    getRecipeInstructions();  // Fetch the recipe instructions on component mount
  }, [id]);

  if (!information) {
    return <p>Loading recipe details...</p>;  // Loading state
  }
  
  const cleanedString = information.instructions
        .replace(/<\/?(ul|ol)>/g, '')    // Remove <ul> and <ol> tags
        .replace(/<\/?li>/g, '\n');      // Replace <li> and </li> with newlines

    // Split the string into an array of instructions based on newlines, removing empty items
    const instructionArray = cleanedString.split('\n').filter(item => item.trim() !== '');
  
    const removeLinksFromSummary = (summary) => {
        // Option 1: Completely remove <a> tags and replace them with plain text
        return summary.replace(/<a[^>]*>([^<]+)<\/a>/g, '$1'); 
    
        // Option 2: Alternatively, if you want to keep the text but disable the links,
        // return summary.replace(/<a\b[^>]*>(.*?)<\/a>/g, '<span>$1</span>');
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
          </ul>
        </div>
      </div>

      <h3>Instructions</h3> 
      <ol>
            {instructionArray.map((instruction, index) => (
                <li key={index}>{instruction}</li>  // Render each instruction as an ordered list item
            ))}
        </ol>

    </div>
    
  );
}

export default RecipeDetails;
