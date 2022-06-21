import React from "react";
import './option.css'

function Option ({content, onSelectClick})  {
    const [isAdded, setIsAdded] = React.useState(false);

    

    return (
        <div 
                        
                        onClick={() => {
                            onSelectClick(content); 
                            setIsAdded(!isAdded)
                            
                            
                        }} 
                        className={`option ${isAdded ? "added" : null}`}
        >
                            <img width={10} height={10} src={content.imageUrl} alt=''/>
                            <p>{content.text}</p>
                    </div>
    )
}

export default Option