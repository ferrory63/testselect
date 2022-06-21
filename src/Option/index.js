import React from "react";
import './option.css'

function Option ({content, onAddToValue, color})  {
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
                        
                        
                        className={`option ${color} ${isAdded ? `added ` : null} `}
        >
                            <img width={15} height={15} src={content.imageUrl} alt=''/>
                            <p>{content.text}</p>
                    </div>
    )
}

export default Option