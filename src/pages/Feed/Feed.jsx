import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SidebarContainer } from "./style"

import { fetchFromAPI } from "../../utils/";

import { Sidebar, Videos } from "../../components";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const handleOnCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items.filter((item) => item.id.kind.includes("video")))
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <SidebarContainer
      >
        <Sidebar
          selectedCategory={selectedCategory}
          onCategoryChange={handleOnCategoryChange}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#ffffff" }}
        >
          Copyright: 2022
        </Typography>
      </SidebarContainer>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#ffffff" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
