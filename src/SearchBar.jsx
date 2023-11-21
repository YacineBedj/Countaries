import React from 'react'
import { Stack, Box, Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function SearchBar({style, changeRegion, chageSearch, regoin}) {

  const [displayList, setDisplayList] = React.useState(false)

  return (
    <Stack direction={"row"} justifyContent={"space-between"} sx={{margin:"50px 0"}}>
        <Paper 
            variant='elevation' 
            elevation={3}
            sx={{width:{xs:"250px", md:"40%"},height:"50px", overflow:"hidden",borderRadius:'10px',
                display:"flex", justifyContent:"flex-start", alignItems:"center", 
                backgroundColor:style.element, padding:"0 15px"
            }}
        >
            <SearchIcon
                sx={{color:style.color, backgroundColor:style.element, height:"100%"}}
            />
            <input 
                type="text" 
                placeholder='search' 
                style={{width:"100%", border:"none",height:"100%",
                         marginLeft:"15px",fontSize:"18px",
                          backgroundColor: style.element,
                          color:style.color, outline:"none"
                        }}
                onChange={(e)=>{chageSearch(e.target.value)}}
            />
        </Paper>
        <Paper 
            variant='elevation' 
            elevation={3}
            sx={{borderRadius:'10px',
                display:"flex", justifyContent:"flex-start", alignItems:"center", 
                backgroundColor:style.element, padding:"0 15px", cursor:"pointer",
                position:"relative"
            }}
            onClick={()=>{setDisplayList((old)=>!old)}}
        >
            <Typography 
                variant="p"
                sx={{color:style.color, marginRight:"6px", display:{xs:"none", md:"block"}}}
            >{regoin}</Typography>
            <ArrowDropDownCircleIcon
                sx={{color:style.color, backgroundColor:style.element, height:"100%"}}
            />
            <List sx={{backgroundColor:style.element, width:{xs:"168px", md:"170px"},
                        position:"absolute",color:style.color, display:displayList? "" : "none",
                        top:"120%", right:"5px"
                }}>
                {
                    ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map((region, index)=>
                        <ListItem key={index} onClick={()=>{changeRegion(region)}}>
                            <ListItemText primary={region} variant="h6"/>
                        </ListItem>
                    )
                }
            </List>
        </Paper>

    </Stack>
  )
}
