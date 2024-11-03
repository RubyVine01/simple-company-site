"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { useInView } from "react-intersection-observer";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  // Set up Intersection Observer for lazy-loading the video
  const { ref, inView } = useInView({
    triggerOnce: true, // Loads only once when first in view
    threshold: 0.5, // 50% of the element must be in view to trigger loading
  });

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const placeholderImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {inView ? (
        <YouTube
          videoId={videoId}
          opts={opts}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${placeholderImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
};

export default YouTubeEmbed;
