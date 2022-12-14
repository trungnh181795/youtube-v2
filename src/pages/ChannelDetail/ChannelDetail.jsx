import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../../components";
import { ChannelBackground } from "./style";
import { fetchFromAPI } from "../../utils";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channel, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <ChannelBackground />
        <ChannelCard channel={channel} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
