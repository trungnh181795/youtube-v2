import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const ContainerStack = styled(Stack)(({ theme }) => ({
  position: "sticky",
  background: "#000000",
  top: 0,
  justifyContent: "space-between",
  zIndex: 10,
}));

export const Logo = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
