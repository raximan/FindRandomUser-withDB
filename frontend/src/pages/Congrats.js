import "../css/Success.css"
import { useNavigate } from "react-router-dom";
import { Button,Typography,Rating,FormControlLabel,Switch,TextField,Grid } from "@mui/material"
import { useState } from "react";
import axios from "axios";
export default function Congrats(){
    let navigate=useNavigate()
    const [Isemployer,setIsemployer]=useState(false)
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [company,setCompany] =useState("-")
    const [ideas,setIdeas] = useState("")
    const [ratingvalue,setRatingValue]=useState(3)
    

    const handleSubmit = ()=>{
        const newFeedback ={
            fırstName:name,
            lastName:surname,
            company: company,
            ideas:ideas,
            ratingValue:ratingvalue
        }
        console.log(name,surname,company,ideas,ratingvalue)
        axios.post("http://localhost:3001/create",newFeedback)
        alert("Thanks For Sharing Your Thoughts")
        setIsemployer(false)
        setName("")
        setSurname("")
        setCompany("")
        setIdeas("")
        setRatingValue(3)
        
    }

    return <div className="Success">
            <Typography className="h2S" variant="h2" >Great Job</Typography>
            <Typography className="h4S" variant="h4">You succesfully guessed all of the images</Typography>
            <Typography className="WhatDYT" variant="h4" >What Do You Think About My Work ?</Typography>
        <div style={{"margin":"4%"}}>

            <Grid container spacing={2} className="containerGrid">
                 <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <TextField id="standard-basic" label="First Name" value={name} variant="standard" className="InputFıeld" onChange={(event)=>setName(event.target.value)} />
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel control={<Switch size="large" onChange={event=>setIsemployer(event.target.checked)}  />} label="I'm an employer" />
                </Grid>
            </Grid>

            <Grid container spacing={2} className="containerGrid">
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <TextField id="standard-basic" label="Last Name" variant="standard" value={surname} className="InputFıeld" onChange={(event)=>setSurname(event.target.value)} />
                </Grid>
                <Grid item xs={4}>
                    { Isemployer && (<TextField id="standard-basic" label="Company Name" className="InputFıeld" value={company} variant="standard" onChange={(event)=>setCompany(event.target.value)} />)}
                </Grid>
            </Grid>

            <Grid container spacing={2} className="containerGrid">
                    <Grid item xs={5}></Grid>
                    <Grid item xs={4}>
                        <TextField className="InputFıeld"
                            id="outlined-multiline-static"
                            label="Your Thoughts"
                            multiline
                            rows={5}
                            value={ideas}
                            onChange={(event)=>setIdeas(event.target.value)}
                        />
                    </Grid>
            </Grid>

            <Grid container spacing={2}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={4}>
                        <Typography id="rateExp" component="legend">Rate Your Experience </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
            </Grid>

            <Grid container spacing={2}>
                    <Grid item xs={5}></Grid>                  
                    <Grid item xs={4}>
                            <Rating
                                name="simple-controlled"
                                value={ratingvalue}
                                onChange={(event, newValue) => {
                                setRatingValue(newValue);
                                }}
                            />
                    </Grid>
            </Grid>
                                
            <Button className="SubmitButtonForm" onClick={handleSubmit}><Typography>Submit</Typography></Button>

            
        </div>
            


           
           

            

            <Button className="Successbutton" onClick={()=>navigate("/")}>Back to Home</Button>
        
    </div>
}