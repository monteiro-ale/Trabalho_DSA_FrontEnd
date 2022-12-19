import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
     
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            isbnlivro="isbnlivro"
            label="Código ISBN"
            defaultValue={props.isbnlivro}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            titulolivro="titulolivro"
            label="Título"
            defaultValue={props.titulolivro}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            idautor="idautor"
            label="ID Autor"
            defaultValue={props.idautor}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            editoralivro="editoralivro"
            label="Editora"
            defaultValue={props.editoralivro}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            anolivro="anolivro"
            label="Data de Lançamento"
            defaultValue={props.anolivro}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            qtdelivrodisponivel="qtdelivrodisponivel"
            label="Quantidade Disponível"
            defaultValue={props.qtdelivrodisponivel}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Salvar</Button>
          <Button onClick={handleClose}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}