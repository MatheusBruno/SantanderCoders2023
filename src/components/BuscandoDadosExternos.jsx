import { useState, useEffect } from "react";

const tarefas = [
  { id: "1", title: "Jogar Bola", completed: true },
  { id: "2", title: "Estudar", completed: false },
  { id: "3", title: "Comprar tenis", completed: true },
  { id: "4", title: "Viajar", completed: false },
];

export default function BuscandoDadosExternos() {
  const [tarefa, setTarefas] = useState([]);

  useEffect(() => {
    async function buscaritens() {
      const lista2 = await fetch("http://jsonplaceholder.typicode.com/todos");
      const resultado = await lista2.json();
      return resultado;
    }

    buscaritens().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      {tarefa.map((tarefa) => {
        return (
          <div key={tarefa.id}>
            {tarefa.completed ? <p>{tarefa.title} - Completa</p> : <p>{tarefa.title} - Incompleta</p>}
          </div>
        );
      })}
    </div>
  );
}
