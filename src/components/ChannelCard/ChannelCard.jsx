import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ContainerBox,
  StyledCardMedia,
  StyledCardContent,
  CheckCircleIcon,
  SubscriberCount,
} from "./style";

import { demoProfilePicture } from "../../utils";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <ContainerBox marginTop={marginTop}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <StyledCardContent>
          <StyledCardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircleIcon />
            {channel?.statistics?.subscriberCount && (
              <SubscriberCount variant="subtitle2">
                {parseInt(
                  channel?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </SubscriberCount>
            )}
          </Typography>
        </StyledCardContent>
      </Link>
    </ContainerBox>
  );
};

export default ChannelCard;
