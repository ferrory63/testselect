import React, { useState } from 'react'
import './option.css'

function Option({ content, onAddToValue, color, multiselect }) {
    const [isAdded, setIsAdded] = useState(false)

    const add = (content) => {
        if (multiselect) {
            onAddToValue(content)
            setIsAdded(!isAdded)
        } else if (!multiselect) {
            onAddToValue(content)
        }
    }

    return (
        <div
            onClick={() => {
                add(content)
            }}
            className={`option ${color} ${isAdded ? `added ` : null} `}
        >
            <img width={15} height={15} src={content.imageUrl} alt="" />
            <p>{content.text}</p>
        </div>
    )
}

export default Option
