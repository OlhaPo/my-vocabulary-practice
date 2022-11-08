import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditWordForm() {
  const [openDeleteButton, setOpenDeleteButton] = React.useState(false);
  const [openCancelButton, setOpenCancelButton] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDeleteButton(true);
  };

  const handleCloseDelete = () => {
    setOpenDeleteButton(false);
  };

  const handleClickOpenCancel = () => {
    setOpenCancelButton(true);
  };

  const handleCloseCancel = () => {
    setOpenCancelButton(false);
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
          <div>
            <Button
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              onClick={handleClickOpenDelete}
            >
              Delete
            </Button>
            <Dialog
              open={openDeleteButton}
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
                {"Видалити слово зі словника?"}
              </DialogTitle>
              <DialogActions>
                <Button
                  component={Link}
                  to={"/vocabulary"}
                  onClick={handleCloseDelete}
                  autoFocus
                >
                  Так
                </Button>
                <Button onClick={handleCloseDelete}>Ні</Button>
              </DialogActions>
            </Dialog>
          </div>
          <Grid>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={handleClickOpenCancel}
            >
              Cancel
            </Button>
            <Dialog
              open={openCancelButton}
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
                {"Вилучити зміни?"}
              </DialogTitle>
              <DialogActions>
                <Button
                  component={Link}
                  to={"/word/:id"}
                  onClick={handleCloseCancel}
                  autoFocus
                >
                  Так
                </Button>
                <Button onClick={handleCloseCancel}>Ні</Button>
              </DialogActions>
            </Dialog>
            <Button
              component={Link}
              to={"/word/:id"}
              variant="outlined"
              sx={{
                ml: "20px",
              }}
              startIcon={<DoneIcon />}
            >
              Ok
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
