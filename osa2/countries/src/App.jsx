import { useEffect, useState } from 'react'
import axios from  'axios'

const Countries = ({countries, setSearch}) => {
  if (countries.length > 10) {
    return <div> Too many countries to show</div>
  }

  if (countries.length <= 10 && countries.length > 1) {
    return countries.map(country => <div key={country.name.common}> {country.name.common} <button onClick={() => setSearch(country.name.common)}>show</button></div>)
  }
  if (countries.length == 1) {
    const country = countries[0]
    return <Country country={country}/>
  }
  else return <div>No country name matches your search</div>
}

const Country = ({country}) => {
  const flagUrl = country.flags.png
  return (<div> 
    <h1>{country.name.common} </h1>
    <p>Capital: {country.capital} <br/>
       Area: {country.area}
    </p>
    <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
      </ul>

    <img src={flagUrl} />
    </div>)
}


const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => setCountries(res.data))
  }, [])

  return (
    <div>
      <div> Search for countries <input value={search} onChange={e => setSearch(e.target.value)}/> </div>
      <Countries countries={countriesToShow} setSearch={setSearch}/>
    </div>
  )
}

export default App