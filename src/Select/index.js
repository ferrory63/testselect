import React from 'react';
import Option from '../Option';
import './select.css'

function Select ({content, prompt, value, setValue}) {
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
        <div ref={ref} className="select" >
            <div  className="control" onClick={() => setIsOpen(true)}>
                <div  className="search">
                    {isopen ? <input className='search-block' onChange={onChangeSearchInput} value={searchValue} placeholder='Search...' type="text" /> : prompt}
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
                        onAddToValue= {onAddToValue}
                        
                    />
                ))}
            </div>
        </div>

    )
    

}

export default Select;