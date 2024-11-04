import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./Functionalities.module.css";
import ContentIcon from "../ContentIcon/ContentIcon";

type Functionalities = {
  icon: string;
  title: string;
  description: string;
  link: string;
  badge: string;
};

type FunctionalitiesProps = {
  headline: string;
  items: Functionalities[];
};

export default function Functionalities({
  headline,
  items,
}: FunctionalitiesProps) {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <Heading
            as="h2"
            className={styles.headline}
            dangerouslySetInnerHTML={{ __html: headline }}
          />

          <ul className={styles.list}>
            {items.map((item, index) => {
              const Wrapper = item.link ? "a" : "div";
              return (
                <li key={index} className={styles.item}>
                  <Wrapper href={item.link} className={styles.link}>
                    <div className={styles.itemHeader}>
                      <ContentIcon src={item.icon} variant="primary" />

                      {item.badge && (
                        <span
                          className={clsx(
                            "badge badge--secondary rounded--pill"
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <Heading as="h3" className={styles.title}>
                        {item.title}
                      </Heading>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
