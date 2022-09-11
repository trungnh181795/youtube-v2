import { Paper, IconButton, styled } from "@mui/material";

export const Background = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',
  border: "1px solid #e3e3e3",
  paddingLeft: '2px',
  boxShadow: "none",
  [theme.breakpoints.up('sm')]: {
      marginRight: '5px',
  }
}));

export const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: "10px",
  color: "red",
}));
