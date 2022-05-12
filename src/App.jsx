import React, { useState, useEffect } from "react";
import {
  Navbar,
  Login,
  Register,
  Products,
  Cart,
  AdminPortal,
  Inventory,
  AddMedicine,
  UserLogin,
  AdminLogin,
  UpdateMedicine,
  Product,
  Reports,
  OrderReports,
  UserReports,
  UserAccount,
  Checkout,
  OrderCheckoutSuccess,
  AccountPortal,
  UserOrderStatus,
  UserFunds,
  ProductView,
  Logout,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUserId } from "./Common.js";

const App = () => {
  const [currentUserId, setCurrentUserId] = useState("");

  const fetchUserDetails = () => {
    setCurrentUserId(getUserId);
    console.log(currentUserId);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/logout"
            element={
              <>
                <Logout />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Products currentUserId />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <ProductView medicineId />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
              </>
            }
          />
          <Route
            path="/cart/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/checkout/order-success"
            element={
              <>
                <OrderCheckoutSuccess />
              </>
            }
          />
          <Route
            path="/user-account"
            element={
              <>
                <UserAccount />
              </>
            }
          />
          <Route
            path="/users/order-status"
            element={
              <>
                <UserOrderStatus />
              </>
            }
          />
          <Route
            path="/account-portal"
            element={
              <>
                <AccountPortal />
              </>
            }
          />
          <Route
            path="/admin-portal"
            element={
              <>
                <AdminPortal />
              </>
            }
          />
          <Route
            path="/admin/inventory"
            element={
              <>
                <Inventory />
              </>
            }
          />
          <Route
            path="/admin/add-medicine"
            element={
              <>
                <AddMedicine />
              </>
            }
          />
          <Route
            path="/user-login"
            element={
              <>
                <UserLogin />
              </>
            }
          />
          <Route
            path="/user-funds"
            element={
              <>
                <UserFunds />
              </>
            }
          />
          <Route
            path="/admin-login"
            element={
              <>
                <AdminLogin />
              </>
            }
          />
          <Route
            path="/admin/update-products"
            element={
              <>
                <UpdateMedicine />
              </>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <>
                <Reports />
              </>
            }
          />
          <Route
            path="/admin/reports/orders"
            element={
              <>
                <OrderReports />
              </>
            }
          />
          <Route
            path="/admin/reports/users"
            element={
              <>
                <UserReports />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
