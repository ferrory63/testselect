import React from 'react';
import './select.css'

function Select ({content, prompt, onSelectClick,}) {
   const [isopen, setIsOpen] = React.useState(false);

   const [isAdded, setIsAdded] = React.useState(false);

   const [searchValue, setSearchValue] = React.useState("")

   const onAddClick = () => {
        setIsAdded(!isAdded);
   }

   const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
   }


   
    return (
        <div className="select">
            <div className="control" onClick={() => setIsOpen(true)}>
                <div className="selected-value">
                    {isopen ? <input onChange={onChangeSearchInput} value={searchValue} placeholder='Search...' type="text" /> : prompt}
                </div>
                <div className={isopen ? null : "arrow" }/>
            </div>
            <div className={`options ${isopen ? "open" : null }`}>
                {content.filter((obj) => obj.text.toLowerCase().includes(searchValue)).map((obj) => (
                    <div 
                        key={obj.id}
                        onClick={() => {
                            onSelectClick(obj); 
                            onAddClick();
                            
                        }} 
                        className={`option ${isAdded ? "added" : null}`}
                    >
                            <img width={10} height={10} src={obj.imageUrl} alt=''/>
                            <p>{obj.text}</p>
                    </div>
                ))}
            </div>
        </div>

    )
    
//   <select>
//    {props.array.map((obj) => (
//        <option> <img height={15} width={15} alt="asd" src='/icons/photo.svg'/></option>
//    )) }
 //  </select>)
}

export default Select;