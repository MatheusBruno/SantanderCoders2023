import { useState } from "react"

export default function MeuContador(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }

    function zerar(){
        setContador(contador - contador)
    }

    if(contador > 9 || contador < -9){
        return(
            <>
                {contador < -9 ? <h1>Valor Muito Baixo {contador}</h1> : <h1>Valor Muito Alto {contador}</h1>}
                <button onClick={aumentar}>Aumentar</button>
                {contador > 9 || contador < -9 ? <button onClick={zerar}>Zerar</button> : null}
            </>
        )
    }

    return(
        <>
            <h1>Contador</h1>
            
            <p>{contador}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )
}