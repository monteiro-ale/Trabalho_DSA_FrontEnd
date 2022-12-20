import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";
import FormDialog from "./components/dialog/dialog";

function App() {

  const [values, setValues] = useState();
  const [listBooks, setListBooks] = useState();
  console.log(listBooks);

  const mudancaValores = (value) =>{
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value
    }));
  }

  const handleClickButton = () =>{
    Axios.post("http://localhost:3001/api/books/",
    {
      isbnlivro: values.isbnlivro,
      titulolivro: values.titulolivro,
      idautor: values.idautor,
      editoralivro: values.editoralivro,
      anolivro: values.anolivro,
      qtdelivrodisponivel: values.qtdelivrodisponivel
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
    document.location.reload();
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/books/").then((response)=>{
      setListBooks(response.data);
    });
  }, []);


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
     {typeof listBooks !== 'undefined' && listBooks.map((value)=>{
      return <Card 
      key={value.idlivro}
      listCard={listBooks} 
      setListCard={setListBooks}
      idlivro={value.idlivro}
      isbnlivro={value.isbnlivro}
      titulolivro={value.titulolivro}
      autor={value.autor}
      idautor={value.idautor}
      editoralivro={value.editoralivro}
      anolivro={value.anolivro}
      qtdelivrodisponivel={value.qtdelivrodisponivel}>
      </Card>
     })}
    </div>
  );
}

export default App;
