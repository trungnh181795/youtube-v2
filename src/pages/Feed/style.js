import { Box, styled } from "@mui/material";

export const SidebarContainer = styled(Box)(({ theme }) => ({
  borderRight: "1px solid #3d3d3d",
  [theme.breakpoints.up("xs")]: {
    height: "auto",
    padding: 0,
  },
  [theme.breakpoints.up("md")]: {
    height: "92vh",
    padding: "0 2px",
  },
}));
