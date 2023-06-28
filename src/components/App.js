import React, { useState } from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {

  console.log(data);
  const years = Object.keys(data);
  console.log(years)

  const [year, setYear] = useState('');
  const [list, setList] = useState([]);

  const selectYear = (e) => {
    console.log('Year', e.target.value);
    setYear(e.target.value);
    const templist = data[e.target.value];
    console.log(templist);
    setList([...templist]);
  }


  return (
    <div id="main">
        <select onChange={selectYear}>

          <option value={null}></option>
          {years && years.map((item, index) => (
            <option key={index+item} value={item}>{item}</option>
          ))}

        </select>
        <br></br>

        <div id="selected-year">{list.length > 0 ? 'Selected Year-' + year : 'No year selected'}</div>
        <ul>
        {
          list && list.map((item, index) => (
            <li key={index+item}>{item}</li>
          ))
        }
        </ul>
    </div>
  )
}


export default App;
