const pb = [
    {id:"1", patente:"Recruta", xp:"0-1000"},
    {id:"2", patente:"Soldado", xp:"1000-3000"},
    {id:"3", patente:"Cabo", xp:"3000-6000"},
    {id:"4", patente:"Terceiro-Sargento", xp:"6000-9000"},
    {id:"5", patente:"Segundo-Sargento", xp:"9000-12000"}
]

export default function MinhaLista2(){
    return(
        pb.map((item)=>{
            return(
                <div key={item.id}>
                    <p>{item.patente + " " + item.xp}</p>
                </div>
            )
        })
    )
}

// .map serve para utilizar em arrays que contenha varios MediaElementAudioSourceNode, assim realiza o papel de LAÇO DE REPETIÇÃO com a FUNÇÃO ANONIMA
// O Uso de arraylist no react, é necessario a utilização do paramentro Key