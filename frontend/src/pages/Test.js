import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
export default function Test(){
  const [name,setName]=useState("")
  const [role,setRole]=useState("")
  const [username,setUsername]=useState("")
  function handleSubmit(event){
    event.preventDefault();
    const newUser = {
      name:name,
      role:role,
      username:username
    }
    axios.post("http://localhost:3001/create",newUser)
  }
    return <>
        <p>TEST PAGE</p>
        <p>{name} </p>
        <p>{role} </p>
        <p>{username}</p>
        <form onSubmit={handleSubmit}>
                <label>Enter name:</label>
                <input type="text" value={name } name="name" onChange={e=>setName(e.target.value)} />
                <br/>
                <label>Enter role:</label>
                <input type="text" value={role } name="role" onChange={e=>setRole(e.target.value)} />
                <br/>
                <label>Enter username:</label>
                <input type="text" value= {username } name="username" onChange={e=>setUsername(e.target.value)} />
                <input type="submit" />
        </form>
    </>
}