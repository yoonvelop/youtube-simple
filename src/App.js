import React, { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoDetail from "./components/detail/VideoDetail";
import VideoList from "./components/list/VideoList";
import Search from "./components/search/Search";
import { ImFire } from "react-icons/im";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} onSearch={search} />
          </div>
        )}

        <div className={styles.list}>
          {!selectedVideo && (
            <h2>
              <ImFire /> 인기 Top 25
            </h2>
          )}
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            size={selectedVideo ? "mini" : ""}
            // display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
