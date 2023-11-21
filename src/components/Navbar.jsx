import React from 'react'
import {Stack , Button, Typography} from '@mui/material';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Link } from 'react-router-dom';

export default function Navbar({toggelTheme, style}) {
  return (
    <Stack 
        direction={"row"} 
        justifyContent={"space-between"} 
        alignItems={"center"}
        sx={{padding:{xs:"15px 20px", md:"15px 50px"}}}
        bgcolor={style.element}
    >
        <Link to="/" style={{textDecoration:"none",color:style.color}}>
            <Typography sx={{textTransform:"capitalize",}} variant="h6">where in the world?</Typography>
        </Link>
        <Button 
            onClick={()=>{toggelTheme()}}
            startIcon={<Brightness6Icon/>} 
            sx={{color: style.color}}
        >
            <Typography 
                sx={{display:{xs:"none", md:"block"},
                    textTransform:"capitalize",
                    fontSize:"12px",
                    fontWeight:"900",
                }} 
                variant="p"
            >
                mode
            </Typography>
        </Button>
    </Stack>
  )
}
