import React from "react";
import {Card,CardContent,Typography} from "@mui/material"
import { Home } from "./Components/Home";
import "./Components/Common.css";

function App() {
  return (
   <Card>
    <CardContent>
    <Typography className="jsx" variant="h3" component="h3">MATH FUN APP FOR KIDS</Typography>
    </CardContent>
    <Home/>
   </Card>
   
  )
} 

export default App;
