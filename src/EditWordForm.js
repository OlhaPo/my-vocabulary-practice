import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import {
  deleteWordAction,
  getWordById,
  updateWord,
} from "./store/vocabularySlice";

export default function EditWordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dialogState, setDialogState] = React.useState({ isOpen: false });
  const { id } = useParams();
  const word = useSelector(getWordById(+id));

  const closeDialog = () => {
    setDialogState({ isOpen: false });
  };

  const saveWord = () => {
    console.log("To be implemented");
    // @TODO: implement
    // dispatch(updateWord(....))
    navigate("/word/" + id);
  };

  const deleteWord = () => {
    dispatch(deleteWordAction(word.id));
    navigate("/vocabulary");
  };

  const cancelWord = () => {
    console.log("To be implemented");
    // @TODO: implement
    // 1. Cancel changes
    navigate("/vocabulary");
  };

  const confirmDelete = () => {
    setDialogState({
      isOpen: true,
      title: "Видалити слово зі словника?",
      onYes: deleteWord,
      onNo: closeDialog,
    });
  };

  const confirmCancel = () => {
    setDialogState({
      isOpen: true,
      title: "Вилучити зміни?",
      onYes: cancelWord,
      onNo: closeDialog,
    });
  };

  return (
    <Container className="EditWordForm">
      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: "100%",
          m: "100px 0",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Cлово UA"
            fullWidth
            margin="normal"
          />
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Слово PL"
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="outlined-helperText"
            label="Приклад вживання"
            fullWidth
            margin="normal"
          />
        </div>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            startIcon={<DeleteForeverIcon />}
            onClick={confirmDelete}
          >
            Delete
          </Button>

          <Grid>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={confirmCancel}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: "20px",
              }}
              startIcon={<DoneIcon />}
              onClick={saveWord}
            >
              Ok
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Dialog
        open={dialogState.isOpen}
        onClose={dialogState.onNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontWeight: "400",
            fontSize: "17px",
          }}
        >
          {dialogState.title}
        </DialogTitle>
        <DialogActions>
          <Button onClick={dialogState.onYes} autoFocus>
            Так
          </Button>
          <Button onClick={dialogState.onNo}>Ні</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
