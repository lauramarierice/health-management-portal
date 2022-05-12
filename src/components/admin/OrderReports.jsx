import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Button } from "@material-ui/core";

import useStyles from "./AdminPortalStyles";

const OrderReports = () => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const fetchOrders = () => {
    axios
      .get("http://localhost:9000/reports/orders", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setOrders(response.data);
      });
  };

  const fetchFilteredOrders = () => {
    axios
      .get("http://localhost:9000/reports/filtered-orders", {
        params: {
          filterby: filterBy,
          value: filterValue,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setOrders(response.data);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const columns = [
    {
      field: "orderId",
      width: 200,
      headerAlign: "left",
      headerName: "Order Id",
    },
    {
      field: "orderDate",
      width: 200,
      headerAlign: "left",
      headerName: "Order Date",
      editable: true,
    },
    {
      field: "userId",
      width: 200,
      headerAlign: "left",
      headerName: "User Id",
    },
    {
      field: "orderStatus",
      width: 200,
      headerAlign: "left",
      headerName: "Order Status",
    },
  ];

  return (
    <div>
      <div className={classes.SearchForm}>
        <div>
          <div className={classes.SearchLabel}>
            Filter:
            <input
              className={classes.SearchText}
              type="number"
              defaultValue={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <select
              className={classes.SearchText}
              defaultValue={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option>days</option>
              <option>weeks</option>
              <option>months</option>
              <option>years</option>
            </select>
            <Button
              variant="button"
              type="submit"
              className={classes.FilterButton}
              onClick={() => fetchFilteredOrders()}
            >
              <Typography>Filter</Typography>
            </Button>
          </div>
        </div>
      </div>
      <Box
        className={classes.box}
        sx={{
          ml: 30,
          mt: 2,
          height: 600,
          width: 800,
          bgcolor: "background.paper",
        }}
      >
        <DataGrid
          getRowId={(row) => row.orderId}
          rowHeight={50}
          headerAlign="left"
          rows={orders}
          columns={columns}
          pageSize={4}
          pagination
        ></DataGrid>
      </Box>
    </div>
  );
};

export default OrderReports;
