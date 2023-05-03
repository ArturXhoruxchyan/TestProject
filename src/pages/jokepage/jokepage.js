import "./jokepage.css"
import React, { useState } from "react"
import axios from "axios"

const Jokepage = () => {
    const [jok, setJok] = useState([])

    const onclick = () => {
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then((res) => {
                setJok((a) => {
                    const y = [...a, res.data.value]
                    return y
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div id="Joke">
            <button id="button"  onClick={onclick}>shaer</button>
            {jok.map((e, i) => (
                <div  id="joke" key={i}>
                    <h2 >{e}</h2>
                </div>
            ))}

        </div>
    )
}
export default Jokepage