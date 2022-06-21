import React from 'react';
import Option from '../Option';
import './select.css'

function Select ({content, prompt, value, setValue, color, width}) {
   const [isopen, setIsOpen] = React.useState(false);
   const [searchValue, setSearchValue] = React.useState("");
   const ref = React.useRef(null);



    

   React.useEffect(()=> {
    let close = (event) => {
        if (!ref.current.contains(event.target)) {
        setIsOpen(false)
        //setSearchValue("");
    }
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
                
            } else {
                
                setValue((prev) => [...prev,content])
            }
   }

    return (
        <div style={{width:width}}>
            <div ref={ref} className={`select ${color}`} >
            <div  className={`control ${color}`} onClick={() => setIsOpen(true)}>
                <div  className={`search ${color}`}>
                    {isopen ? <input className={`search-block ${color}`} onChange={onChangeSearchInput} value={searchValue} placeholder='Search...' type="text" /> : prompt}
                </div>
                <div className={isopen ? null : "arrow" }/>
            </div>
            <div className={`options ${isopen ? "open" : null } ${color}`}>
                {content.filter((obj) => obj.text.toLowerCase().includes(searchValue)).map((obj) => (
                    <Option
                        value = {value}
                        setValue = {setValue}
                        content={obj}
                        key = {obj.id}
                        onAddToValue= {onAddToValue}
                        color = {color}
                    />
                ))}
            </div>
        </div>
        </div>

    )
    

}

export default Select;