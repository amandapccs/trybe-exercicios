import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

//   const createLi = (content) => <li>{content}</li>

class Content extends React.Component {
    render() {
      return(
        <div className="content">
          {conteudos.map((elem) => (
            <div key={elem.conteudo} className="card">
              <h4>{`O conteúdo é: ${elem.conteudo}`}</h4>
              <p>{`Status: ${elem.status}`}</p>
              <p>{`Bloco: ${elem.bloco}`}</p>
            </div>
          ))}
        </div>
      );
    }
  }

// class Content extends React.Component {
//     render() {
//         return (
//             <ul>{conteudos.map(conteudo => createLi(`O conteúdo é: ${conteudo.conteudo}
//             Status: ${conteudo.status}
//             Bloco: ${conteudo.bloco}`))}</ul>
//         )
//     }
// }

export default Content