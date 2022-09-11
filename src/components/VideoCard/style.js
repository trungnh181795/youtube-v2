import {
  Card,
  CardContent,
  CardMedia,
  styled,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export const VideoCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 0,
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "358px",
  },
  [theme.breakpoints.up("md")]: {
    width: "320px",
  },
}));

export const VideoCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "180px",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "358px",
  },
  [theme.breakpoints.up("md")]: {
    width: "320px",
  },
}));

export const VideoCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  height: "106px",
}));

export const VerifiedIcon = styled(CheckCircle)(({ theme }) => ({
  fontSize: 12,
  color: "gray",
  marginLeft: "5px",
}));
