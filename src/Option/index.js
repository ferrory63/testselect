import React from "react";
import './option.css'

function Option ({content, onSelectClick, value, setValue})  {
    const [isAdded, setIsAdded] = React.useState(false);

    

    return (
        <div 
                        
                        onClick={() => {
                            if (value.find((item) => Number(content.id) === Number(item.id))) {
                                setValue(prev => prev.filter(item => Number(content.id) !==Number(item.id)))
                                setIsAdded(false)
                            } else {
                                onSelectClick(content); 
                                setIsAdded(!isAdded)
                            }
                            
                            
                            
                            
                        }} 
                        className={`option ${isAdded ? "added" : null}`}
        >
                            <img width={10} height={10} src={content.imageUrl} alt=''/>
                            <p>{content.text}</p>
                    </div>
    )
}

export default Option