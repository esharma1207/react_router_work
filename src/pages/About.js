import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){
    const [user, setUser] = useState('eshaan')

    if(!user){
        return <Navigate to = "/" replace = {true}/>
    }
    return(
        <div className = "about">
            <h2>About us</h2>
            <p>What is everyone up to?</p>

            <button onClick= {() => setUser(null)}>Logout</button>

        </div>

    )
}