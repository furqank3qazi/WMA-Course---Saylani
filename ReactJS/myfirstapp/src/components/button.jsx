import { useState } from "react"

function Button({title, fathername}){

const [name, setName] = useState(fathername)

const [string, setString] = useState("25 Feb Ko Treat Milegi")

const updateName =()=>{
    setString("Milegi lekin Safeer bhai ki taraf se")
}
    return (
        <>
        <button>{name}</button>
        <button onClick={()=>setString("Milegi lekin Furqan bhai ki taraf se")}>Treat Milegi</button>

        <h1>{string}</h1>

        <button onClick={()=>updateName()}>Check</button>





        </>

    )
}




export default Button