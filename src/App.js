import React, {useState, useEffect} from 'react';
import './App.scss';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const[input, setInput] = useState('')
  const[output, setOutput] = useState([])

  useEffect(() => {
    async function getdata() {
      const res = await Axios.get("https://disease.sh/v3/covid-19/countries")
      setData(res.data)
    }
    getdata()
  }, [])

  useEffect(() => {
    setOutput([])
    data.filter(val => {
      if(val.country.toLowerCase().includes(input.toLowerCase()))
{
  setOutput(output => [...output,val])
}
    })
  }, [input])

  return ( 
    <div className = "container">

      {/* search bar */}

      <div className='search bar'>
      <h1>Search For Countries</h1>
  <input onChange = {e=> setInput(e.target.value)} type= "text" placeholder ='Search'/>
      </div>

      {/* OUTPUT */}

      <div className='output'>
        {output.map(item => (
          <p>{item.country}</p>
        ))}
      </div>

    </div>
)


}

export default App;