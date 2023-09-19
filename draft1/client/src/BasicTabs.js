import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import MyPage from "./components/MyPage";
import ContactPage from "./components/ContactPage";

import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import { Link } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Link to="/home">
            <Tab label="Home" {...a11yProps(0)} />
          </Link>
          <Link to="/about">
            <Tab label="About" {...a11yProps(1)} />
          </Link>
          <Link to="/course">
            <Tab label="Course" {...a11yProps(2)} />
          </Link>
          <Link to="/mypage">
            <Tab label="MyPage" {...a11yProps(3)} />
          </Link>
          <Link to="/contact">
            <Tab label="Contact" {...a11yProps(4)} />
          </Link>
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        <LandingPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AboutPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CoursePage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <MyPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ContactPage />
      </CustomTabPanel> */}
    </Box>
  );
}
export default BasicTabs;
