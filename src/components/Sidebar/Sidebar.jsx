import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const handleOnClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#FFFFFF",
          }}
          key={category.name}
          onClick={() => handleOnClick(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#FFFFFF" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
