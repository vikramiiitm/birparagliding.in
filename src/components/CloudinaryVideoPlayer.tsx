import React, { useLayoutEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface CloudinaryVideoPlayerProps {
  publicId: string;
  cloudName: string;
}

const CloudinaryVideoPlayer: React.FC<CloudinaryVideoPlayerProps> = ({
  publicId,
  cloudName,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

useLayoutEffect(() => {
  if (videoRef.current) {
    // Ensure the video element is part of the DOM
    document.body.appendChild(videoRef.current);

    playerRef.current = videojs(videoRef.current, {
      autoplay: true,
      controls: true,
      fluid: true,
      sources: [
        {
          src: `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.mp4`,
          type: "video/mp4",
        },
      ],
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }
}, [cloudName, publicId, videoRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        key={publicId}
        className="video-js vjs-default-skin"
      />
    </div>
  );
};

export default CloudinaryVideoPlayer;
