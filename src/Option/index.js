import React from "react";
import './option.css'

function Option ({content, onAddToValue})  {
    const [isAdded, setIsAdded] = React.useState(false);

    const add = (content) => {
        onAddToValue(content);
        setIsAdded(!isAdded);
    }
    

    return (
        <div 
                        
                        onClick={() => {
                            add(content)
                            
                        }}
                        
                        
                        className={`option ${isAdded ? "added" : null}`}
        >
                            <img width={15} height={15} src={content.imageUrl} alt=''/>
                            <p>{content.text}</p>
                    </div>
    )
}

export default Option