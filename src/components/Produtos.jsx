import { useEffect, useState } from "react"

let listaCasaNova =[
    {id:'1', produto:"Geladeira", valor:"2500.0"},
    {id:'2', produto:"Fogão", valor:"500.0"},
    {id:'3', produto:"Balcao", valor:"1500.0"},
    {id:'4', produto:"Mesa", valor:"300.0"},
    {id:'5', produto:"TV", valor:"150.0"}
]

export default function Produto(){
    
    const [produtos, setProdutos] = useState(listaCasaNova)
    const [pesquisar, setPesquisar] = useState("")

    useEffect(
        () => {
            if(pesquisar){
                const novaLista = listaCasaNova.filter(
                    (item) => {
                        return item.produto.toLowerCase().includes(pesquisar.toLowerCase())
                    }
                )
                setProdutos(novaLista)
            }else{
                setProdutos(listaCasaNova)
            }
        }, [pesquisar]
    )

    return(
        <div>
            <input placeholder="Busque Aqui" value={pesquisar} onChange={ (e) => {
                setPesquisar(e.target.value)
            }}/>
            {produtos.map((item) => {
                return(
                    <div key={item.id}>
                        <p>{item.produto}</p>
                    </div>
                )
            })}
        </div>  
    )
}