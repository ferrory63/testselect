import React from 'react';
import Option from '../Option';
import './select.css'

function Select ({content, prompt, onSelectClick,}) {
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
                        content={obj}
                        key = {obj.id}
                        onSelectClick= {onSelectClick}
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