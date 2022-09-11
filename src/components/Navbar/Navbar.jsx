import { ContainerStack, Logo } from "./style";
import { Typography } from "@mui/material";
import { logo } from "../../utils";

import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <ContainerStack direction="row" alignItems="center" p={2}>
      <Logo to="/">
        <img src={logo} alt="logo" height={45} />
        <Typography px={2} variant="h6" color="#FFFFFF">
          Youtube V2
        </Typography>
      </Logo>

      <SearchBar />
    </ContainerStack>
  );
};

export default Navbar;
