import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./style.module.scss";
import { SvgIcon } from "src/components";

export const Search = () => {
  const [query, setQuery] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clear = () => {
    setQuery("");
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    params.append("q", query || "");

    setSearchParams(params.toString());
  }, [query]);

  return (
    <div className={classes["search"]}>
      <SvgIcon name="search" />
      <input
        type="text"
        placeholder="Поиск"
        value={query}
        onChange={onInputChange}
      />
      <button className={classes["search__clear-btn"]} onClick={clear}>
        <SvgIcon name="close" />
      </button>
    </div>
  );
};
