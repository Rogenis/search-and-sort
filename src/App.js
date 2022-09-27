import './App.css';
import DATA from './MOCK_DATA.json';
import React, { useEffect, useState } from 'react';


function App() {
  const [searchItem, setSearchItem] = useState('');
  const [sampleData, setSampleData] = useState(DATA);

  useEffect(() => {
    setSampleData(sampleData);
  }, [])

  function sortByName(){
    const sortedData = [...sampleData].sort((a, b) => {
      return a.product > b.product ? 1 : -1;
    })
    console.log(sortedData);
    setSampleData(sortedData);
  }

  return (
    <div className="App">
      <input 
        type="text"
        placeholder="Search..." 
        onChange={event => { setSearchItem(event.target.value)}} />
        <button>
          <span onClick={sortByName}>Ordenar por Nome</span>
        </button>
      {
        sampleData.filter((val) => {
          if(searchItem === "") {
            return val
          } else if (val.product.toLowerCase().includes(searchItem.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
        return (
          <div className='product' key={key}>
            <p>{val.product}</p>
          </div>
      )})
    }
    </div>
  );
}

export default App;
