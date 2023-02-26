import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{width:"100%", padding:"10px 80px", background:"blue"}}>
        <div style={{ display:"flex", maxWidth:"800px",margin:"auto", color:"#fff", justifyContent:"space-between"}}>
           <Link to="/"><h2>Home</h2></Link>
           <Link to="/login"> <h2 style={{cursor:"pointer"}}>Login</h2></Link>
        </div>
    </nav>
  )
}
