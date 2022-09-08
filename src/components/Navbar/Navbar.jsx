import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { logo } from "../../utils/constants";

import SearchBar from '../SearchBar'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 10
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography px={2} variant="h6" color="#FFFFFF">Youtube V2</Typography>
      </Link> 

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
