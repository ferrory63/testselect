import React from "react";
import Select from './Select'

function App() {
  
  const array = [
    {id:1,text : 'Сергей', imageUrl : "/icons/photo.svg"},
    {id:2,text : 'Иван', imageUrl : "asdsda"},
    {id:3,text : 'Геннадий', imageUrl : "asdsda"},
   ];
  
  const [value, setValue] = React.useState([])
  

  return (
    <div style={{width:200}}>
    
    <Select 
      content={array} 
      prompt={'Select smth'}
      //onSelectClick={val => setValue((prev) => [...prev,val])} 
      value = {value}
      setValue = {(val) => setValue(val)}

      /> 
    
    </div>
  );
}

export default App;
