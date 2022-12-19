import React from "react"
import "./card.css"
import FormDialog from "../dialog/dialog"


export default function Card(props){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleClickCard = () =>{
        setOpen(true);
    }

    return (
    <>
    <FormDialog 
    open={open} 
    setOpen={setOpen} 
    isbnlivro={props.isbnlivro} 
    titulolivro={props.titulolivro} 
    idautor={props.idautor} 
    editoralivro={props.editoralivro} 
    anolivro={props.anolivro} 
    qtdelivrodisponivel={props.qtdelivrodisponivel}
    listCard={props.listCard}
    setListCard={props.setListCard} />
        <div className="card-container" onClick={() => handleClickCard()}>
        <h1 className="book-title">{props.titulolivro}</h1>
        <p className="book-id">Id: {props.idlivro}</p>
        <p className="isbn"> ISBN: {props.isbnlivro}</p>
        <p className="autor">Autor: {props.autor}</p>
        <p className="data-lancamento">Data Lançamento: {props.anolivro}</p>
        <p className="qtde-disponivel">Quantidade Disponível: {props.qtdelivrodisponivel}</p>
        <p className="editora-livro">Editora: {props.editoralivro}</p>
        </div>
    </>
    );
}