import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { fetchFromAPI } from "../../utils/fetchFromAPI"

import { Sidebar, Videos } from "../../components"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  const handleOnCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const data = fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} onCategoryChange={handleOnCategoryChange} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#ffffff' }}>
          Copyright: 2022 
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#ffffff' }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos video={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;