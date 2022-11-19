import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Add_To_Cart, Remove_To_Cart } from "../../redux/action/AuthActions";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const cartData = useSelector((state) => state?.AuthReducer?.carts);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const columns = [
    {
      id: "id",
      label: "id",
      minWidth: 170,
      format: (value) => value.toFixed(2),
    },
    { id: "title", label: "title", minWidth: 100 },
    { id: "price", label: "price", minWidth: 60 },
    {
      id: "description",
      label: "description",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "image",
      label: "image",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "category",
      label: "category",
      minWidth: 170,
      format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "Add_Cart",
        label: "Add_Cart",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
      },
  ];

  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRemoveToCart = (column) => {
      console.log("column", column);
      dispatch(Remove_To_Cart(column))
  }

  const GoTOList = () => {
    navigate("/")
  }
  return cartData && cartData.length > 0 ? (
      <>
    <Button variant="contained" style={{width: "200px", float: "right", margin: "10px"}} fullWidth onClick={() => GoTOList()}>Go To Main Page</Button>
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
    <TableContainer sx={{ maxHeight: 1200 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
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
          {cartData &&
            cartData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                              {column.id == "Add_Cart"? <Button variant="contained" onClick={() => handleRemoveToCart(row)}>Remove From Cart</Button>: ""}
                              
                          </TableCell>
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={cartData.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  </>
  ): <>
    <Button variant="contained" style={{width: "200px", float: "right", margin: "10px"}} fullWidth onClick={() => GoTOList()}>Go To Main Page</Button>
  <Stack spacing={2} sx={{ maxWidth: 600 }}>
  <div style={{margin: "25px"}}>
      <SnackbarContent
        message={"No Data Found !"}
        />
        </div>
    </Stack>
  </>;
};
