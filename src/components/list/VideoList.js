import React from "react";
import VideoItem from "../item/VideoItem";
import styles from "./VideoList.module.css";

const VideoList = ({ videos, onVideoClick, size }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          size={size}
          // display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
