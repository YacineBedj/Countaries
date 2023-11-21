import React from 'react'
import { Card, CardMedia, Typography, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import palatine from './utils/constant'

export default function CountryCard({country, style}) {
  if(country.name.common === "Israel"){
    country = palatine
  }
  return (
    <Link to={`/CountryDetail/${country.cca3}`} style={{textDecoration:"none"}}>
      <Card sx={{ backgroundColor:style.element, color:style.color}} >
      <CardMedia
        sx={{ height: 200}}
        image={country.flags.png}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
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
      </CardContent>
      </Card>
    </Link>
  )
}
