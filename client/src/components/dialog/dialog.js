import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios";

export default function FormDialog(props) {
//   const [open, setOpen] = React.useState(false);

const [editValues, setEditValues] = React.useState({
    id: props.idlivro,
    isbnlivro: props.isbnlivro, 
    titulolivro: props.titulolivro,
    idautor: props.idautor,
    editoralivro: props.editoralivro, 
    anolivro: props.anolivro, 
    qtdelivrodisponivel: props.qtdelivrodisponivel,
    listCard: props.listCard,
    setListCard: props.setListCard
})

    const handleEditBook = () => {
        Axios.put(`http://localhost:3001/api/books/${props.idlivro}`,{
        isbnlivro: editValues.isbnlivro, 
        titulolivro: editValues.titulolivro,
        idautor: editValues.idautor,
        editoralivro: editValues.editoralivro, 
        anolivro: editValues.anolivro, 
        qtdelivrodisponivel: editValues.qtdelivrodisponivel
        })
        handleClose();
        document.location.reload();
    };

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = values =>{
    setEditValues(prevValues =>({
        ...prevValues,
        [values.target.id] : values.target.value
    }));
  }

  const handleDeleteBook = () =>{
    Axios.delete(`http://localhost:3001/api/books/${editValues.id}`);
    handleClose();
    document.location.reload();
  };


  return (
    <div>
     
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="isbnlivro"
            label="Código ISBN"
            defaultValue={props.isbnlivro}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="titulolivro"
            label="Título"
            defaultValue={props.titulolivro}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="idautor"
            label="ID Autor"
            defaultValue={props.idautor}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="editoralivro"
            label="Editora"
            defaultValue={props.editoralivro}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="anolivro"
            label="Data de Lançamento"
            defaultValue={props.anolivro}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="qtdelivrodisponivel"
            label="Quantidade Disponível"
            defaultValue={props.qtdelivrodisponivel}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleEditBook}>Salvar</Button>
          <Button onClick={handleDeleteBook}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}