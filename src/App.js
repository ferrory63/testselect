import React from "react";
import Select from './Select'

function App() {
  
  const array = [
    {id:1,text : '1', imageUrl : "/icons/photo.svg", added:false},
    {id:2,text : '5', imageUrl : "asdsda", added:false},
    {id:3,text : '3', imageUrl : "asdsda", added:false},
   ];
  
  const [value, setValue] = React.useState([])
  

  return (
    <div style={{width:200}}>
    
    <Select 
      content={array} 
      prompt={'Select smth'}
      onSelectClick={val => setValue((prev) => [...prev,val])}>
    </Select>
    </div>
  );
}

export default App;
