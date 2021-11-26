import React, { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";
import { styled } from "@mui/material/styles";

import BookItem from "./BookItem";
function TabPanel(props) {
  const { library } = useContext(LibraryContext);
  const { children, value, index, ...other } = props;

  let object = library.filter(
    (v) =>
      v.status === (index === 0 ? "List" : index === 1 ? "Read" : "Finished")
  );
  console.log(object);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          <Container>
            {object &&
              object.map((item) => {
                return (
                  <BookItem
                    list_name_encoded={props.list_name_encoded}
                    key={object.book_id}
                    object={object}
                  />
                );
              })}
          </Container>
        </div>
      )}
    </div>
  );
}
const Container = styled("div")(({ theme }) => ({
  display: "flex",
}));
export default TabPanel;
