import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useStyles from "./UserAccountStyles";
import axios from "axios";
import { getUserId } from "../../Common";

const UserOrderStatus = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [orders, setOrders] = useState([]);

  const fetchUserDetails = () => {
    let userId = getUserId();
    setUserId(userId);
    console.log(userId);
  };

  const fetchOrders = () => {
    let userId = getUserId();

    axios
      .get("http://localhost:9000/users/" + userId + "/orders")
      .then((response) => {
        console.log(response);
        setOrders(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetchUserDetails();
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
    <Box
      className={classes.box}
      sx={{
        ml: 30,
        mt: 10,
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
  );
};

export default UserOrderStatus;
