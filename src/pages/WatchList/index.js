import React, { useState, useEffect } from "react";
import { AddWatchItem } from "../../components/watchPage/AddWatchItem";
import { WatchList } from "../../components/watchPage/WatchList";

const Watch = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  const saveListToStorage = () => {
    localStorage.setItem("watchList", JSON.stringify(list));
  };

  const getListFromStorage = () => {
    if (localStorage.getItem("watchlist") === null) {
      localStorage.setItem("watchlist", JSON.stringify([]));
    } else {
      let watchlistLocal = localStorage.getItem(
        "watchList",
        JSON.stringify(list)
      );
      setList(JSON.parse(watchlistLocal));
    }
  };

  useEffect(() => {
    getListFromStorage();
  }, []);

  const filterHandler = () => {
    switch (status) {
      case "watched":
        setFilteredList(list.filter((item) => item.completed === true));
        break;
      case "unwatched":
        setFilteredList(list.filter((item) => item.completed === false));
        break;
      default:
        setFilteredList(list);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
    saveListToStorage();
  }, [list, status]);

  return (
    <section className="page__watchlist section">
      <div className="container">
        <h1 className="text-primary">Watch List:</h1>
        <AddWatchItem
          status={status}
          setStatus={setStatus}
          list={list}
          setList={setList}
          setInputText={setInputText}
          inputText={inputText}
        />
        <WatchList list={filteredList} setList={setList} />
      </div>
    </section>
  );
};

export default Watch;
