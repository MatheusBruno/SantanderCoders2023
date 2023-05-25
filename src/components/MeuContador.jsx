import { useState } from "react"

export default function MeuContador(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }

    return(
        <>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={aumentar}>aumentar</button>
        </>
    )
}