import React from 'react';

export default function AppComponent(props) {
  function excluirComentario(comentarioId) {
    console.log(comentarioId);
  }

  return (
    <>
      <h3>Lista de comentários</h3>
      <hr />
      <ul>
        {props.comentarios.map(comentario => (
          <li key={comentario.id}>
            <span>{comentario.name} - {comentario.message}</span>
            <button type="button" onClick={() => excluirComentario(comentario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  )
}