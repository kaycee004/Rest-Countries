import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  // https://restcountries.com/v3.1/all

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setAllCountries(data);
      setIsLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const filterByRegion = (region) => {
    const newCountries = allCountries.filter(
      (eachCountry) => eachCountry.region === region
    );
    console.log(newCountries);
    setfilteredCountries(newCountries);
  };

  const filterBySearch = (search) => {
    const newNations = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );
    console.log(newNations);
    setfilteredCountries(newNations);
  };

  return (
    <>
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
              
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                isLoading={isLoading}
                filterByRegion={filterByRegion}
                filterBySearch={filterBySearch}
                darkMode={darkMode}
              />
            }
          />
          <Route path="/:countryName" element={<CountryDetail darkMode={darkMode}/>} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
