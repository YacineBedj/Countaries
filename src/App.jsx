import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import "./style.css"
import Navbar from "./components/Navbar";
import Countries from "./Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [theme, setTheme] = React.useState(false)
  const style = {
    color: theme ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)" ,
    bg: theme ? "hsl(0, 0%, 89%)" : "hsl(207, 26%, 17%)",
    element : theme ? "hsl(0, 0%, 100%)" : 'hsl(209, 23%, 22%)',
  }
  return (
    <BrowserRouter>
      <Navbar toggelTheme={()=>{setTheme((oldTheme)=>{return !oldTheme})}} style={style}/>
      <Box sx={{padding:{xs:"15px 20px",
                md:"15px 50px"},
                minHeight: "100vh",
                 p:" 10px 50px"}}
                bgcolor={style.bg}
        >
        <Routes>
          <Route path="/" element={<Countries style={style}/>}/>
          <Route path="/CountryDetail/:id" element={<CountryDetails style={style}/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
