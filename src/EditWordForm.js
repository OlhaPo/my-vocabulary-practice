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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              onClick={handleClickOpen}
            >
              Delete
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
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
                  onClick={handleClose}
                  autoFocus
                >
                  Так
                </Button>
                <Button onClick={handleClose}>Ні</Button>
              </DialogActions>
            </Dialog>
          </div>
          <Grid>
            <Button
              component={Link}
              to={"/vocabulary"}
              variant="outlined"
              startIcon={<ClearIcon />}
            >
              Cancel
            </Button>
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
