import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
function BookDetails() {
  const [categories, setCategories] = useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Container>
      <div>
        <h2>{categories}</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam error
        quia harum explicabo debitis, molestias laudantium voluptates ipsam
        possimus earum aliquid vitae! Nihil doloribus totam nam enim distinctio
        debitis voluptate, minima repellat nobis consectetur quod eveniet. Minus
        labore voluptas possimus consequuntur illum, dolores non omnis atque
        officiis modi voluptatem natus!
      </div>
      <div className="selectBar">
        <div className="add">
          <p>Add To</p>
        </div>
        <Select
          className="select"
          onChange={handleChange}
          variant="standard"
          defaultValue={"Reading-List"}
        >
          <MenuItem
            style={{
              width: "270px",
            }}
            value={"Reading-List"}
          >
            Reading List
          </MenuItem>
          <MenuItem value={"Read"}>Read</MenuItem>
          <MenuItem value={"Finished"}>Finished</MenuItem>
        </Select>
        <Button className="button" variant="contained" color="success">
          Smart Contract
        </Button>
      </div>
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "black",
  borderRadius: "35px",
  padding: "40px 20px",
  maxWidth: "85%",
  height: "370px",
  backgroundColor: "#ecf3f4",

  [theme.breakpoints.up("sm")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "45%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "30%",
  },
  ".button": {
    borderRadius: "15px",
    color: "white",
    width: "50%",
  },
  ".selectBar": {
    paddingLeft: "12px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    backgroundColor: "#465461",
    width: "100%",
    height: "30px",
    ".add": {
      width: "20%",
      paddingRight: "10px",
      height: "100%",
      borderRight: "1px solid white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".select": {
      fontSize: ".9rem",
      height: "70%",
      width: "50%",
      margin: "auto",
      marginLeft: "10px",
      color: "white",
      borderColor: "transparent",
      "&:before": {
        borderColor: "transparent",
      },
      "&:after": {
        borderColor: "transparent",
      },
      "&:not(.Mui-disabled):hover::before": {
        borderColor: "transparent",
      },
    },
    svg: {
      fill: "white",
    },
  },
}));
export default BookDetails;
