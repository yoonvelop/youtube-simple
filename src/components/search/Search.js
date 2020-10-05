import React, { memo, useRef } from "react";
import styles from "./Search.module.css";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Search = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="/youtube-simple">
          <FaYoutube />
          <h1 className={styles.title}>Simple Youtube</h1>
        </a>
        <div className={styles.inputBox}>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="검색"
            onKeyPress={onKeyPress}
          />
          <button className={styles.button} type="submit" onClick={onClick}>
            <AiOutlineSearch className={styles.searchIcon} />
          </button>
        </div>
      </div>
    </header>
  );
});

export default Search;
