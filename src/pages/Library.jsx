import React, { useState, useEffect, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import TabPanel from "../components/TabPanel";
import LibraryContext from "../context/library/LibraryContext";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Library({ currentUser, contract }) {
  const [value, setValue] = useState(0);

  const libraryContext = useContext(LibraryContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const { setLibrary } = libraryContext;
    if (currentUser) {
      contract
        .get_books({
          account_id: currentUser.accountId,
          skip: 0,
          limit: 30,
        })
        .then((books) => setLibrary(books));
    }
    return () => {
      setLibrary({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, contract]);

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Tab className="tab" label="List" {...a11yProps(0)} />
        <Tab className="tab" label="Read" {...a11yProps(1)} />
        <Tab className="tab" label="Finished" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
    </Container>
  );
}
const Container = styled("div")(({ theme }) => ({
  ".tab": {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));

export default Library;
