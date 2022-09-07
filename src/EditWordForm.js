import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";

export default function EditWordForm() {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<DeleteForeverIcon />}
          sx={{
            mr: "45px",
          }}
        >
          Delete
        </Button>
        <Button variant="outlined" startIcon={<ClearIcon />}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          startIcon={<DoneIcon />}
          sx={{
            ml: "15px",
          }}
        >
          Ok
        </Button>
      </Box>
    </Container>
  );
}
