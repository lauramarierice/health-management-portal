import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import useStyles from "./AdminPortalStyles";

const UpdateMedicine = () => {
  const classes = useStyles();

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:9000/medicine/all");
    const result = await response.json();
    setProducts(result);
  };

  const handleDeleteProduct = async (medicineid) => {
    axios
      .delete(
        "http://localhost:9000/delete/medicine/" + medicineid,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
        {
          params: {
            medicineid: medicineid,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        fetchProducts();
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { field: "medicineId", width: 10, headerAlign: "left", headerName: "ID" },
    {
      field: "name",
      width: 150,
      headerAlign: "left",
      headerName: "Product Name",
    },
    {
      field: "brand",
      width: 150,
      headerAlign: "left",
      headerName: "Product Brand",
      editable: true,
    },
    {
      field: "description",
      width: 450,
      headerAlign: "left",
      headerName: "Product Description",
    },
    {
      field: "treatableDiseases",
      width: 200,
      headerAlign: "left",
      headerName: "Treatable Diseases",
    },
    {
      field: "price",
      width: 75,
      type: "number",
      headerAlign: "left",
      headerName: "Price",
      editable: true,
    },
    {
      field: "dicountedPrice",
      width: 150,
      type: "number",
      headerAlign: "left",
      headerName: "Discounted Price",
      editable: true,
    },
    {
      field: "quantityAvailable",
      width: 150,
      type: "number",
      headerAlign: "left",
      headerName: "Quantity Available",
      editable: true,
    },
    {
      field: "expirationDate",
      width: 150,
      headerAlign: "left",
      headerName: "Expiration Date",
    },
  ];

  return (
    <div>
      <Box
        className={classes.box}
        sx={{
          ml: -20,
          height: 600,
          width: 1700,
          bgcolor: "background.paper",
        }}
      >
        <DataGrid
          getRowId={(row) => row.medicineId}
          rowHeight={50}
          headerAlign="left"
          rows={products}
          columns={columns}
          pageSize={10}
          pagination
          disableMultipleSelection="true"
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
            console.log(newSelectionModel);
          }}
          selectionModel={selectionModel}
        ></DataGrid>
      </Box>
      <Button
        variant="contained"
        type="button"
        size="small"
        color="secondary"
        onClick={() => handleDeleteProduct(selectionModel)}
        className={classes.Button}
      >
        Delete
      </Button>
    </div>
  );
};

export default UpdateMedicine;
