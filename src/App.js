import React from "react";
import Select from './Select'

function App() {
  


  const array = [
    {id:1,text : 'Сергей', imageUrl : "/icons/photo.svg"},
    {id:2,text : 'Иван', imageUrl : ""},
    {id:3,text : 'Геннадий', imageUrl : ""},
   ];
  
  const [value, setValue] = React.useState([])
  

  return (
    
    
    <Select 
      content={array} 
      prompt={'Select smth'}
      value = {value}
      setValue = {(val) => setValue(val)}
      color = {'dark'}
      width = {300}
    />

    
   
  );
}

export default App;
