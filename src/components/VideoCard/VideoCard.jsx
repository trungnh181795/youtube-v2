import { Link } from "react-router-dom";
import { Typography } from "@mui/material"
import { VideoCard as Card, VideoCardMedia, VideoCardContent, VerifiedIcon } from './style'

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <VideoCardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>
      <VideoCardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFFFFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <VerifiedIcon />
          </Typography>
        </Link>
      </VideoCardContent>
    </Card>
  );
};

export default VideoCard;
