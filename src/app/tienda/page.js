import GridDisplay from "@/components/grid";
import styles from "./index.module.scss";
import { gridItems } from "@settings/data/links.js";

const Tienda = () => {
  return (
    <div className={styles.page}>
      <div className={styles.gridContainer}>
        <GridDisplay items={gridItems}/>
      </div>
    </div>
  );
}

export default Tienda;
