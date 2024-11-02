"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
}) => {
  const opts: YouTubeProps["opts"] = {
    width: '100%', 
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} style={{ width: '100%', height: '100%' }}  />;
};

export default YouTubeEmbed;

