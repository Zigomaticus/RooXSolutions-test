import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const allPeople = res.data;
      setPeople(allPeople);
    });
  }, []);

  return (
    <div className="App">
      <div className="sortind">
        <div className="sortind__block">
          <div className="sortind__block_title">Сортировка</div>
          <div className="sortind__block_btn">по городу</div>
          <div className="sortind__block_btn">по компании</div>
        </div>
      </div>
      <div className="content">
        <div className="content__title">Список пользователей</div>

        {people.map(({ id, name, address, company }) => (
          <div className="content__block" key={id}>
            <div className="wrapper">
              <div className="part">
                <div className="part__one">ФИО:&nbsp;</div>
                <div className="part__two">{name}</div>
              </div>
              <div className="part">
                <div className="part__part__one">город:&nbsp;</div>
                <div className="part__two">{address.city}</div>
              </div>
              <div className="part">
                <div className="part__part__one">компания:&nbsp;</div>
                <div className="part__two">{company.name}</div>
              </div>
              <div className="diteils">Подробнее</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
