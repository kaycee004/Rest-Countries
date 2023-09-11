import React from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import Loading from "../utils/Loading";

const Homepage = ({ allCountries, isLoading, filterByRegion, filterBySearch, darkMode }) => {
  return (
    <div>
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
      {isLoading && <Loading darkMode={darkMode} />}
      {!isLoading && <Countries allCountries={allCountries} />}
    </div>
  );
};

export default Homepage;
