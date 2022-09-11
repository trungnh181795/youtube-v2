import { styled } from "@mui/material";

export const ChannelBackground = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
  zIndex: 10,
  height: "300px",
}));
