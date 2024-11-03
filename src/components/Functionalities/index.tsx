import Heading from "@theme/Heading";

import styles from "./Functionalities.module.css";
import ContentIcon from "../ContentIcon/ContentIcon";

type Functionalities = {
  icon: string;
  title: string;
  description: string;
  link: string;
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
            {items.map((item, index) => (
              <li key={index} className={styles.item}>
                <a href={item.link} className={styles.link}>
                  <ContentIcon src={item.icon} variant="primary" />
                  <div>
                    <Heading as="h3" className={styles.title}>
                      {item.title}
                    </Heading>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
