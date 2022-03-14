// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Css
import styles from "./ContentBlock.module.scss";
import Diteils from "./Diteils";

const ContentBlock = ({ people }) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Список пользователей</div>

      {people.map(({ id, name, address, company }) => (
        <div className={styles.block} key={id}>
          <div className={styles.wrapper}>
            <div className={styles.part}>
              <div className={styles.part__one}>ФИО:&nbsp;&nbsp;</div>
              <div>{name}</div>
            </div>
            <div className={styles.part}>
              <div className={styles.part__one}>город:&nbsp;&nbsp;</div>
              <div>{address.city}</div>
            </div>
            <div className={styles.part}>
              <div className={styles.part__one}>компания:&nbsp;&nbsp;</div>
              <div>{company.name}</div>
            </div>
            <Link to="/diteils" className={styles.diteils} people={people}>
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentBlock;
