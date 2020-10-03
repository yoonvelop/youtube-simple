import React, { memo } from "react";
import styles from "./VideoItems.module.css";
import LinesEllipsis from "react-lines-ellipsis";

const VideoItem = memo(({ video, video: { snippet }, onVideoClick }) => {
  // const displayType = display === "list" ? styles.list : styles.grid;
  const defference = calculateDate(snippet.publishedAt);

  return (
    <li className={`${styles.container}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <LinesEllipsis
            className={styles.title}
            text={snippet.title}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.date}>{defference}일 전</p>
          <LinesEllipsis
            className={styles.desc}
            text={snippet.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </li>
  );
});

function calculateDate(publishedAt) {
  const publishedArr = publishedAt
    .substring(0, 10)
    .split("-")
    .map((item) => parseInt(item));
  const publishedDate = new Date(...publishedArr);
  const todayArr = getFormatDate(new Date());
  const today = new Date(...todayArr);
  return (today - publishedDate) / (1000 * 60 * 60 * 24);
}

function getFormatDate(date) {
  const year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return [year, month * 1, day * 1];
}

export default VideoItem;
