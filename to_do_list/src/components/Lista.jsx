import estilos from "./ListaTarefas.module.css";

export function Lista(props) {
  return (
    <ul className={estilos.lista}>
      {props.tarefas.map(function(tarefa, i) {
        return (
          <li className={estilos.item}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={function() {
                props.marcarConcluida(i);
              }}
            />

            <span
              className={
                tarefa.concluida
                  ? estilos.textoConcluido
                  : estilos.texto
              }
            >
              {tarefa.texto}
            </span>

            <button
              className={estilos.botaoExcluir}
              onClick={function() {
                props.excluirTarefa(i);
              }}
            >
              Excluir
            </button>
          </li>
        );
      })}
    </ul>
  );
}