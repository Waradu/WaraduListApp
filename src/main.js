import React from 'react'
import { useMemo, useRef, useState } from "react";

export default function Main() {

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLocaleLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <div className="page" id="page">
        <h2>List Maker by Waradu</h2>
        Search:{" "}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
        />
        <br />
        <br />
        <form onSubmit={onSubmit}>
          New Item: <input ref={inputRef} type="text" />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        <h3>Items:</h3>
        {filteredItems.map((item) => (
          <div className="item">{item}</div>
        ))}
      </div>
    </>
  )
}
