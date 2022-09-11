import { EastRounded } from "@mui/icons-material";
import { Stack, styled } from "@mui/material";

export const ContainerStack = styled(Stack)(({ theme }) => ({
  overflowY: "auto",
  [theme.breakpoints.up("xs")]: {
    height: "auto",
  },
  [theme.breakpoints.up("md")]: {
    height: "95%",
    flexDirection: "column",
  },
}));

export const CategoryButton = styled("button")(
  ({ theme, category, selectedCategory }) => ({
    background: category.name === selectedCategory ? "#FC1503" : "transparent",
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    cursor: "pointer",
    outline: "none",
    border: "none",
    padding: "7px 15px",
    margin: "10px 0px",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    [theme.breakpoints.up("md")]: {
      margin: "10px",
    },
    "&:hover": {
      backgroundColor: "#FC1503",
      color: "#FFFFFF",
    },
    "&:hover span": {
      color: "#FFFFFF",
    },
  })
);

export const CategoryIcon = styled("span")(
  ({ theme, category, selectedCategory }) => ({
    color: category?.name === selectedCategory ? "#FFFFFF" : "red",
    marginRight: "15px",
  })
);

export const CategoryName = styled("span")(
  ({ theme, category, selectedCategory }) => ({
    opacity: category?.name === selectedCategory ? "1" : "0.8",
  })
);
