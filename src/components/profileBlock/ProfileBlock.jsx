// Libraries
import axios from "axios";
import React, { useState, useEffect } from "react";
import cl from "classnames";
// Css
import styles from "./ProfileBlock.module.scss";

const ProfileBlock = () => {
  const [persone, setPersone] = useState([]);
  const [toggleDisabled, setToggleDisabled] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then(({ data }) => setPersone(data));
  }, []);

  const toogleEdit = () => {
    setToggleDisabled(!toggleDisabled);
  };

  const sbor = (e) => {
    e.preventDefault();
    
    console.log(123);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.header__title}>Профиль пользователя</div>
        <div className={styles.header__edit} onClick={toogleEdit}>
          Редактироввать
        </div>
      </div>
      <form className={styles.form} action="index.html" method="post">
        <label htmlFor="name">Name</label>
        <input
          disabled={toggleDisabled}
          type="text"
          id="name"
          placeholder={persone.name}
        />
        <label htmlFor="username">User name</label>
        <input
          disabled={toggleDisabled}
          type="text"
          id="username"
          placeholder={persone.username}
        />
        <label htmlFor="email">E-mail</label>
        <input
          disabled={toggleDisabled}
          type="email"
          id="email"
          placeholder={persone.email}
        />
        <label htmlFor="street">Street</label>
        <input
          disabled={toggleDisabled}
          type="text"
          id="street"
          placeholder=""
        />
        <label htmlFor="city">City</label>
        <input disabled={toggleDisabled} type="text" id="city" placeholder="" />
        <label htmlFor="zipcode">Zip code</label>
        <input
          disabled={toggleDisabled}
          type="text"
          id="zipcode"
          placeholder=""
        />
        <label htmlFor="phone">Phone</label>
        <input
          disabled={toggleDisabled}
          type="tel"
          id="phone"
          placeholder={persone.phone}
        />
        <label htmlFor="website">Website</label>
        <input
          disabled={toggleDisabled}
          type="text"
          id="website"
          placeholder={persone.website}
        />
        <label htmlFor="comment">Comment</label>
        <textarea disabled={toggleDisabled} id="comment"></textarea>
        <button
          onClick={(e) => sbor(e)}
          disabled={toggleDisabled}
          type="submit"
          className={toggleDisabled ? styles.button : styles.buttonDis}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ProfileBlock;
