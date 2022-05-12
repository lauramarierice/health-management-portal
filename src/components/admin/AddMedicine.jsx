import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import useStyles from "./AdminPortalStyles";

const AddMedicine = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [treatableDiseases, setTreatableDiseases] = useState("");
  const [price, setPrice] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleAddMedicine = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/add/medicine", {
        name: name,
        brand: brand,
        description: description,
        treatableDiseases: treatableDiseases,
        price: price,
        quantityAvailable: quantityAvailable,
        expirationDate: expirationDate,
        discountedPrice: discountedPrice,
      })
      .then((response) => {
        console.log(response);
        navigate("/products");
      });
  };

  function validateForm() {
    return name.length > 0 && brand.length > 0 && description.length > 0;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <Typography variant="h5" className={classes.PageHeader} component="h2">
        Add new product
      </Typography>
      <Form className={classes.AddMedicineForm} onSubmit={handleAddMedicine}>
        <FormGroup controlId="formMedicineName">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Product Name:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="text"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBrand">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Brand:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="text"
            defaultValue={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formDescription">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Description:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="text"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formTreatableDiseases">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Treatable Diseases:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="text"
            defaultValue={treatableDiseases}
            onChange={(e) => setTreatableDiseases(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formPrice">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Price:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="number"
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formQuantityAvailable">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Quantity Available:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="number"
            min="0"
            defaultValue={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formExpirationDate">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Expiration Date:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="date"
            defaultValue={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formDiscountedPrice">
          <FormLabel className={classes.FormLabel}>
            <Typography component="h2">Discounted Price:</Typography>
          </FormLabel>
          <input
            className={classes.FormText}
            type="text"
            defaultValue={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
          />
        </FormGroup>
        <Button
          variant="button"
          disabled={!validateForm()}
          type="submit"
          className={classes.SubmitButton}
          onClick={handleAddMedicine}
        >
          <Typography>Submit</Typography>
        </Button>
      </Form>
    </div>
  );
};

export default AddMedicine;
