import React from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

import { addWord } from "./store/vocabularySlice";

const columns = [
  { id: "word", label: "Слово", minWidth: 170 },
  { id: "translation", label: "Переклад", minWidth: 100 },
  { id: "edit", label: "", minWidth: 50, align: "right" },
];

function createRow(row) {
  return {
    word: (
      <Link
        style={{ textDecoration: "none", color: "#000000" }}
        to={"/word/" + row.id}
      >
        {row.value_ua}
      </Link>
    ),
    translation: (
      <Link
        style={{ textDecoration: "none", color: "#000000" }}
        to={"/word/" + row.id}
      >
        {row.value_pl}
      </Link>
    ),
    edit: (
      <Button component={Link} to={"/edit/" + row.id}>
        <EditIcon />
      </Button>
    ),
  };
}

export default function Vocabulary() {
  const rows = useSelector((state) => {
    return state.vocabulary.data.map((row) => {
      return createRow(row);
    });
  });

  const dispatch = useDispatch();

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container className="Vocabulary">
      <Div sx={{ p: "20px", fontSize: 18, mt: "100px", textAlign: "center" }}>
        Словник
      </Div>
      <Paper
        sx={{
          width: "100%",
          border: " 1px solid #3D82D3",
        }}
      >
        <TableContainer sx={{ maxHeight: 440, borderRadius: "4px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={i}
                      sx={{ borderColor: "red" }}
                    >
                      <TableCell>{i + 1}</TableCell>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ borderTop: " 1px solid #3D82D3" }}
          rowsPerPageOptions={[3, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Рядків на сторінці"
          labelDisplayedRows={function defaultLabelDisplayedRows({
            from,
            to,
            count,
          }) {
            return `${from}–${to} з ${
              count !== -1 ? count : `більш ніж ${to}`
            }`;
          }}
        />
      </Paper>
      <Box sx={{ fontSize: "60px", textAlign: "right" }}>
        <Button component={Link} to={"/create"} variant="text">
          <AddIcon sx={{ fontSize: "30px" }} />
        </Button>
        <Button
          variant="text"
          onClick={() =>
            dispatch(
              addWord({
                value_ua: "drzewo",
                value_pl: "дерево",
                description: "",
              })
            )
          }
        >
          TEST
        </Button>
      </Box>
    </Container>
  );
}
