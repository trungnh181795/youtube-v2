import { Box, CardContent, CardMedia, Typography, styled } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export const ContainerBox = styled(Box)(({ theme, marginTop }) => ({
  boxShadow: "none",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "326px",
  margin: "auto",
  marginTop,
  [theme.breakpoints.up('xs')]: {
    width: '356px'
  },
  [theme.breakpoints.up('md')]: {
    width: '320px'
  }
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: "50%",
  height: "180px",
  width: "180px",
  marginBottom: '2px',
  border: "1px solid #e3e3e3",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  color: "#ffffff",
}));

export const CheckCircleIcon = styled(CheckCircle)(({ theme }) => ({
  fontSize: '14px',
  color: "gray",
  marginLeft: "5px",
}));

export const SubscriberCount = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: "gray",
  marginLeft: "5px",
}));
