import { useState } from "react";
import { Entrada } from "./components/Tarefas";
import { Lista } from "./components/Lista";
import estilos from "./App.module.css";

export function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    let novaLista = tarefas.slice();
    novaLista.push({
      texto: texto,
      concluida: false
    });
    setTarefas(novaLista);
  }

  function marcarConcluida(indice) {
    let novaLista = tarefas.slice();
    if (novaLista[indice].concluida === false) {
      novaLista[indice].concluida = true;
    } else {
      novaLista[indice].concluida = false;
    }
    setTarefas(novaLista);
  }

  function excluirTarefa(indice) {
    let novaLista = tarefas.slice();
    novaLista.splice(indice, 1);
    setTarefas(novaLista);
  }

  let total = tarefas.length;

let concluidas = 0;

for (let i = 0; i < tarefas.length; i++) {
  if (tarefas[i].concluida === true) {
    concluidas = concluidas + 1;
  }
}

  return (

    
    <div className={estilos.container}>
      <h1 className={estilos.titulo}>To do List</h1>
      <p className={estilos.contador}>
        Total: {total} | Concluídas: {concluidas}
      </p>

      <div className={estilos.caixa}>
        <Entrada adicionarTarefa={adicionarTarefa} />
        <Lista
          tarefas={tarefas}
          marcarConcluida={marcarConcluida}
          excluirTarefa={excluirTarefa}
        />
      </div>
    </div>
  );
}