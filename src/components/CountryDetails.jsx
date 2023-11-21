import React from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchCountry from './utils/fetchCountry';
import { Stack, Box, Typography,Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Loading from '../Loading';


export default function CountryDetails({style}) {
  let {id} = useParams();
  let [country, setCountry] = React.useState([])
  React.useEffect(()=>{
    fetchCountry(id).then(data=>{setCountry(data[0])})
  },[id])
  if(!country.flags){return <Loading/>}

  return (
    <div style={{padding:"50px 0 0"}}>
    <Box sx={{marginBottom:"50px", }}>
      <Link to="/">
        <Button startIcon={<ArrowBackIosIcon/>} sx={{color:style.color}}>Home</Button>
      </Link>
    </Box>
      <Stack 
          flexWrap={"wrap"} 
          direction={"row"}
          justifyContent={"space-around"}
          
        >
        <Box sx={{width:{xs:"90%", md:"500px"}, backgroundColor:style.element, p:"20px"}}>
          <img src={country.flags.png} alt="" style={{width:"100%"}} />
        </Box>
        <Box sx={{width:{xs:"90%", md:"500px"}, backgroundColor:style.element, color: style.color, p:"20px"}}>
          <Typography gutterBottom variant="h4" component="div" m={"0 0 20px 0"}>
              {country.name.official}
            </Typography>
            <Typography variant="body2">
              Population : {country.population}
            </Typography>
            <Typography variant="body2">
              Capital : {country.capital}
            </Typography>
            <Typography variant="body2">
              Region : {country.region}
            </Typography>
            <Typography variant="body2">
                Domain : {country.tld}
            </Typography>
            <Typography variant="body2">
                Sub Region : {country.subregion}
            </Typography>
            <Typography variant="body2">
                Languages : {country.languages.name}
            </Typography>
            <Stack direction={"row"} m={"10px 0 0 0"} flexWrap={"wrap"}>
              <Typography variant="body1">
                  Border Countries: {country.languages.name}
              </Typography>
              {
                country.borders?.map((border,index)=>{
                  if(border === "ISR"){border = "PSE"}
                  return (
                    <div key={index}>
                      <Link to={`/CountryDetail/${border}` }>
                          <Button variant="contained"
                                  sx={{margin:"0 5px 0 ",color:style.color, backgroundColor:style.element, height:"20px"}}
                          >{border}</Button>
                      </Link>
                    </div>
                  )
                })
              }
            </Stack>
        </Box>
      </Stack>
      </div>
  )
}
