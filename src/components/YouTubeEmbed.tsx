"use client";

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YouTubeEmbedProps {
  videoId: string;
  width?: string;
  height?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, width = '100%', height = '200px' }) => {
  const opts: YouTubeProps['opts'] = {
    width,
    height,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeEmbed;
