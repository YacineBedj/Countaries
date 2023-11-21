import React from 'react'
import SearchBar from './SearchBar'
import fetchFromApi from './components/utils/fetchFromApi'
import CountryCard from './components/CountryCard';
import Loading from './Loading';

export default function Countries({style}) {
  let [countries, setCountries] = React.useState([]);
  let [region, setRegion] = React.useState("All");
  let [search, setSearch] = React.useState("")
  //fetch data from api
  React.useEffect(()=>{
    fetchFromApi(region)
        .then(data=>{
            setCountries(data)
        })
  },[region])
  //loading
  if(!countries[0]){return <Loading/>}

  return (
    <div>
        <SearchBar 
            style={style} 
            changeRegion={(newRegion)=>{setRegion(newRegion)}}
            chageSearch = {(value)=>{setSearch(value)}}
            regoin={region}
        />
        <div className='countries-container'>
            {
            countries.map((country, index) =>{
                if(country.name.common.toUpperCase().includes(search.toUpperCase()))
                return <CountryCard key={index} country={country} style={style}/>
            })
            }
        </div>
    </div>
  )
}
