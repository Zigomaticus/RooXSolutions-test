import React from "react";
// Css
import styles from "./SortBlock.module.scss";

const SortBlock = ({ sortCity, sortCompany }) => {
  return (
    <div className={styles.sort}>
      <div className={styles.block}>
        <div className={styles.block__title}>Сортировка</div>
        <div className={styles.block__btn} onClick={() => sortCity()}>
          по городу
        </div>
        <div className={styles.block__btn} onClick={() => sortCompany()}>
          по компании
        </div>
      </div>
    </div>
  );
};

export default SortBlock;
