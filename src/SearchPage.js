import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "./Logo.png";

function SearchPage() {
  const [{ term = "Apple" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img className="searchPage_Logo" src={Logo} alt="" />
        </Link>
        <div className="searchPage__headerbody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft"></div>
            <div className="searchPage__optionsRight"></div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>{item.displayLink} ▼</a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="SearchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
