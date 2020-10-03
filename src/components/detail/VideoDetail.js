import React from "react";
import styles from "./VideoDetail.module.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
const VideoDetail = ({ video, video: { snippet, statistics }, onSearch }) => {
  const handleSearch = (event) => {
    const value = event.currentTarget.textContent.replace("#", "");
    console.log(value);
    onSearch(value);
  };
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title="youtube video player"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p className={styles.tags}>
        {snippet.tags &&
          snippet.tags.map((tag, index) => (
            <span className={styles.tag} key={index} onClick={handleSearch}>
              #{tag}
            </span>
          ))}
      </p>
      <h2 className={styles.title}>{snippet.title}</h2>
      <div className={styles.meta}>
        <div>
          <span className={styles.channel}>{snippet.channelTitle}</span>
          {statistics && (
            <>
              <span>조회수 {statistics.viewCount}회</span>
              <span>{snippet.publishedAt.substring(0, 10)}</span>
            </>
          )}
        </div>
        {statistics && (
          <div className={styles.likeBox}>
            <span>
              <AiFillLike />
              {statistics.likeCount}
            </span>
            <span>
              <AiFillDislike />
              {statistics.dislikeCount}
            </span>
          </div>
        )}
      </div>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
