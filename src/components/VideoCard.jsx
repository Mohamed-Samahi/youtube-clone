import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { CheckCircle, PlayCircleOutline, VolumeOff, VolumeUp } from "@mui/icons-material";
import ReactPlayer from "react-player";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "310px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: "relative" }}
      >
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
        >
          {!isHovered ?
            <CardMedia
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx={{ width: { xs: "100%", sm: "358px", md: "310px" }, height: 180 }}
            />
            :
            <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                className="react-player"
                playing={true}
                muted={isMuted}
                width="100%"
                height="100%"
                controls={false}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      showinfo: 0,
                      controls: 0,
                      autoplay: 1
                    },
                  },
                }}
                wrapper="div"
                style={{ objectFit: "cover", position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}
              />
            </div>
          }
        </Link>
        {isHovered && (
          <IconButton
            onClick={() => setIsMuted(prev => !prev)}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
        )}
      </div>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "90px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
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
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;