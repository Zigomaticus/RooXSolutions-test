// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
// Components
import SortBlock from "./components/sortBlock/SortBlock";
import ContentBlock from "./components/contentBlock/ContentBlock";
// Css
import "./App.scss";
import ProfileBlock from "./components/profileBlock/ProfileBlock";

function App() {
  const [people, setPeople] = useState([]);
  const [sortedCity, setSortedCity] = useState([]);
  const [sortedCompany, setSortedCompany] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const allPeople = res.data;
      setPeople(allPeople);
    });
  }, []);

  const sortCity = () => {
    setSortedCity(
      people.sort((a, b) => (a.address.city > b.address.city ? 1 : -1))
    );
    console.log("city");
  };

  const sortCompany = () => {
    setSortedCompany(
      people.sort((a, b) => (a.company.name > b.company.name ? 1 : -1))
    );
    console.log("company");
  };

  return (
    <div className="App">
      <SortBlock sortCity={sortCity} sortCompany={sortCompany} />
      <Routes>
        <Route path="/" element={<ContentBlock people={people} />} />
        <Route path="/profile" element={<ProfileBlock people={people} />} />
      </Routes>
    </div>
  );
}

export default App;
