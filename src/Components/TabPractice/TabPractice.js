import { AppBar, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import About from "./About";
import Contract from "./Contract";
import Home from "./Home";

const TabPractice = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contract" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Home />}
      {selectedTab === 1 && <About />}
      {selectedTab === 2 && <Contract />}
    </>
  );
};

export default TabPractice;
