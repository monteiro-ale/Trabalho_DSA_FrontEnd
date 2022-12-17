import React, {useState} from "react";
import './App.css';

function App() {

  const [values, setValues] = useState();
  // console.log(values);

  const mudancaValores = (value) =>{
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value
    }));
  }
  const handleClickButton = () =>{
    console.log(values);
  };

  return (
    <div className="app-container">
     <div className="register-container">
      <h1 className="titulo-livraria">Livraria</h1>
      <input type="text" name="isbnlivro" placeholder="International Standard Book Number" className="cadastrolivros" onChange={mudancaValores} />

      <input type="text" name="titulolivro" placeholder="Título do Livro" className="cadastrolivros" onChange={mudancaValores} />

      <input type="text" name="idautor" placeholder="Id Autor" className="cadastrolivros" onChange={mudancaValores} />

      <input type="text" name="editoralivro" placeholder="Editora" className="cadastrolivros" onChange={mudancaValores} />

      <input type="text" name="anolivro" placeholder="Data de Lançamento" className="cadastrolivros" onChange={mudancaValores} />

      <input type="text" name="qtdelivrodisponivel" placeholder="Quantidade disponível" className="cadastrolivros" onChange={mudancaValores} />

      <button className="button" onClick={() => handleClickButton()}>Cadastrar Livro</button>

     </div>
    </div>
  );
}

export default App;
