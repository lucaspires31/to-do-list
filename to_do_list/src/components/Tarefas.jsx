import { useState } from "react";
import estilos from "./EntradaTarefa.module.css";

export function Entrada(props) {
  const [texto, setTexto] = useState("");

  function mudarTexto(e) {
    setTexto(e.target.value);
  }

  function adicionar() {
    if (texto !== "") {
      props.adicionarTarefa(texto);
      setTexto("");
    }
  }

  return (
    <div className={estilos.container}>
      <input
        className={estilos.input}
        type="text"
        value={texto}
        onChange={mudarTexto}
      />
      <button className={estilos.botao} onClick={adicionar}>
        Adicionar
      </button>
    </div>
  );
}