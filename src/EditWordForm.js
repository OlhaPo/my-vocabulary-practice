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
  addWord,
  deleteWordAction,
  getWordById,
  updateWord,
  getLastCreatedId,
  resetLastId,
} from "./store/vocabularySlice";

export default function EditWordForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dialogState, setDialogState] = React.useState({ isOpen: false });
  const [formErrors, setFormErrors] = React.useState({
    value_ua: "",
    value_pl: "",
  });
  const [changedWord, setChangedWord] = React.useState({
    value_ua: "",
    value_pl: "",
    description: "",
  });
  const [hasChanges, setHasChanges] = React.useState(false);
  const lastId = useSelector(getLastCreatedId);

  const { id } = useParams();
  const isCreateMode = !id;
  const word = useSelector(getWordById(+id));

  React.useEffect(() => {
    if (!isCreateMode) {
      setChangedWord(word);
    }
  }, [word, isCreateMode]);

  React.useEffect(() => {
    if (lastId !== null) {
      navigate("/word/" + lastId);
      dispatch(resetLastId());
    }
  }, [lastId, navigate, dispatch]);

  React.useEffect(() => {
    if (word === undefined && !isCreateMode) {
      navigate("/not-found");
    }
  }, [word, navigate, isCreateMode]);

  const closeDialog = () => {
    setDialogState({ isOpen: false });
  };

  const saveWord = () => {
    if (isCreateMode) {
      dispatch(addWord(changedWord));
    } else {
      dispatch(updateWord(changedWord));
      navigate("/word/" + id);
    }
  };

  const deleteWord = () => {
    dispatch(deleteWordAction(word.id));
    navigate("/vocabulary");
  };

  const cancelWord = () => {
    navigate("/vocabulary");
  };

  const confirmDelete = () => {
    setDialogState({
      isOpen: true,
      title: "???????????????? ?????????? ???? ?????????????????",
      onYes: deleteWord,
      onNo: closeDialog,
    });
  };

  const confirmCancel = () => {
    if (hasChanges) {
      setDialogState({
        isOpen: true,
        title: "?????????????????? ?????????? ?? ?????????????????????? ???? ?????????????????",
        onYes: cancelWord,
        onNo: closeDialog,
      });
    } else {
      cancelWord();
    }
  };

  const validateField = (fieldName, value) => {
    let formErrorMsg = "";
    if ((fieldName === "value_ua" || fieldName === "value_pl") && !value) {
      formErrorMsg = "???????? ???? ???????? ???????? ????????????????";
    }
    setFormErrors({ ...formErrors, [fieldName]: formErrorMsg });
  };

  const handleUserInput = (e) => {
    setHasChanges(true);
    const fieldName = e.target.name;
    const newValue = e.target.value;
    setChangedWord({ ...changedWord, [fieldName]: newValue });
    validateField(fieldName, newValue);
  };

  const isOkDisabled = () => {
    return formErrors.value_pl !== "" || formErrors.value_ua !== "";
  };

  return (
    <Container className="EditWordForm">
      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: "100%",
          m: "50px 0",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="C???????? UA"
            fullWidth
            margin="normal"
            name="value_ua"
            value={changedWord.value_ua}
            onChange={handleUserInput}
            error={formErrors.value_ua !== ""}
            helperText={formErrors.value_ua}
          />
          {formErrors.value_ua}
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="?????????? PL"
            fullWidth
            margin="normal"
            name="value_pl"
            value={changedWord.value_pl}
            onChange={handleUserInput}
            error={formErrors.value_pl !== ""}
            helperText={formErrors.value_pl}
          />
        </div>
        <div>
          <TextField
            id="outlined-helperText"
            label="?????????????? ????????????????"
            fullWidth
            margin="normal"
            name="description"
            value={changedWord.description}
            onChange={handleUserInput}
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
          {isCreateMode ? (
            <span></span>
          ) : (
            <Button
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              onClick={confirmDelete}
            >
              Delete
            </Button>
          )}

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
              disabled={isOkDisabled()}
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
            ??????
          </Button>
          <Button onClick={dialogState.onNo}>????</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
