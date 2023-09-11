import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [options, setOptions] = useState([
    "All",
    "Africa",
    "Asia",
    "Americas",
    "Europe",
    "Oceania",
  ]);

const [selectedRegion, setSelectedRegion] = useState("Filter by Region")

  return (
    <div className="dropdown position-relative d-md-flex justify-content-end">
      <div
        onClick={() => {
          setToggleDropdown(!toggleDropdown);
        }}
        className="dropdown-display d-flex justify-content-between w-50 bg-elements my-3 p-3 rounded-2 align-items-center"
      >
        <p className="m-0">{selectedRegion}</p>
        <RiArrowDownSLine
          style={{
            transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s ease-in-out",
          }}
        />
      </div>

      {toggleDropdown && (
        <ul className="dropdown-options py-3 px-0 bg-elements rounded-2 position-absolute top-100 mt-2 w-50">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(option === 'All' ? 'Filter by Region' : option)
                  setToggleDropdown(false);
                  filterByRegion(option)
                }}
                className="px-3"
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
