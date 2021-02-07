import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <input />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      ) : (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
