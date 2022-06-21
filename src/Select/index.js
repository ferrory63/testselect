import React from 'react';
import Option from '../Option';
import './select.css'

function Select ({content, prompt, onSelectClick, value, setValue}) {
   const [isopen, setIsOpen] = React.useState(false);
   const [searchValue, setSearchValue] = React.useState("");

    const ref = React.useRef(null);


   React.useEffect(()=> {
    let close = (event) => {
        if (!ref.current.contains(event.target)) {
        setIsOpen(false);}
        }
    document.addEventListener("click", close); 
    return () => {
        document.removeEventListener("click", close)
    }
    }, []); 

   const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
   }

   const onAddToValue = (content) =>{
    if (value.find((item) => Number(content.id) === Number(item.id))) {
                setValue((prev) => prev.filter(item => Number(content.id) !== Number(item.id)))
                //setIsAdded(false)
            } else {
                //onSelectClick(content); 
                setValue((prev) => [...prev,content])
            }
   }

    return (
        <div ref={ref} className="select" >
            <div  className="control" onClick={() => setIsOpen(true)}>
                <div  className="selected-value">
                    {isopen ? <input onChange={onChangeSearchInput} value={searchValue} placeholder='Search...' type="text" /> : prompt}
                </div>
                <div className={isopen ? null : "arrow" }/>
            </div>
            <div className={`options ${isopen ? "open" : null }`}>
                {content.filter((obj) => obj.text.toLowerCase().includes(searchValue)).map((obj) => (
                    <Option
                        value = {value}
                        setValue = {setValue}
                        content={obj}
                        key = {obj.id}
                        //onSelectClick= {onSelectClick}
                        onAddToValue= {onAddToValue}
                        
                    />
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