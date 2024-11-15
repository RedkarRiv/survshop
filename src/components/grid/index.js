import React from "react";
import styles from "./index.module.scss"; // Puedes crear un archivo .scss para los estilos

const GridDisplay = ({items}) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.gridItem}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <div  className={styles.cardData}>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.price}>{item.price}{" €"}</div>
          </div>
          <button className={styles.button}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default GridDisplay;