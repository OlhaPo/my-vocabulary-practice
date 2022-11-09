import React from "react";
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
import { useNavigate } from "react-router-dom";

export default function EditWordForm() {
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    React.useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] =
    React.useState(false);

  const confirmDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCloseDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const confirmCancel = () => {
    setShowCancelConfirmation(true);
  };

  const handleCloseCancel = () => {
    setShowCancelConfirmation(false);
  };

  const saveWord = () => {
    console.log("To be implemented");
    // @TODO: implement
    // 1. Save changes
    // 2. Close modal
    navigate("/word/:id");
  };

  const deleteWord = () => {
    console.log("To be implemented");
    // @TODO: implement
    // 1. Delete Word
    navigate("/vocabulary");
  };

  const cancelWord = () => {
    console.log("To be implemented");
    // @TODO: implement
    // 1. Cancel changes
    navigate("/vocabulary");
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
          <Dialog
            open={showDeleteConfirmation}
            onClose={handleCloseDelete}
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
              Видалити слово зі словника?
            </DialogTitle>
            <DialogActions>
              <Button onClick={deleteWord} autoFocus>
                Так
              </Button>
              <Button onClick={handleCloseDelete}>Ні</Button>
            </DialogActions>
          </Dialog>
          <Grid>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={confirmCancel}
            >
              Cancel
            </Button>
            <Dialog
              open={showCancelConfirmation}
              onClose={handleCloseCancel}
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
                Вилучити зміни?
              </DialogTitle>
              <DialogActions>
                <Button onClick={cancelWord} autoFocus>
                  Так
                </Button>
                <Button onClick={handleCloseCancel}>Ні</Button>
              </DialogActions>
            </Dialog>
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
    </Container>
  );
}
