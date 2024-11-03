type SSGListProps = {
  title: string;
  tools: string[];
};

import clsx from "clsx";
import styles from "./SSGList.module.css";

export default function SSGList({ title, tools }: SSGListProps) {
  return (
    <section className="container">
      <div className="row">
        <div className={clsx("col col-md-6", styles.ssgList)}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.listBrandsWrapper}>
            <div className={styles.listBrandsAnimation}>
              <ul className={styles.listBrand}>
                {tools.map((tool, index) => (
                  <li key={index} className={styles.brand}>
                    <img src={tool} />
                  </li>
                ))}
              </ul>

              <ul className={styles.listBrand}>
                {tools.map((tool, index) => (
                  <li key={index} className={styles.brand}>
                    <img src={tool} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
