import React from 'react';

function ImageStyle({ url }) {
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center',
            overflow: 'hidden', // This ensures the image gets rounded
            borderRadius: '20px', // Applied to the container to affect the image
        }}>
            <img
                style={{
                    objectFit: 'contain',
                    height: '200px',
                    width: '200px',
                    borderRadius: '20px', // Make sure to apply here
                }}
                src={url} 
                alt="Recipe"
            />
        </div>
        
    );
    
}

export default ImageStyle;
