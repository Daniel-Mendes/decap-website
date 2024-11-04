import { useState } from "react";
import ThemedImage from "@theme/ThemedImage";

import ContentIcon from "../ContentIcon/ContentIcon";
import styles from "./KeyFeature.module.css";
import clsx from "clsx";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type KeyFeatureProps = {
  headline: string;
  image: string;
  images: {
    sources: {
      light: string;
      dark: string;
    };
  };
  features: Feature[];
};

export default function KeyFeature({
  headline,
  image,
  images,
  features,
}: KeyFeatureProps) {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section className="container">
      <div className={clsx("row", styles.container)}>
        <div className={clsx("col", styles.content)}>
          <h2
            className={styles.headline}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={feature.title}>
                <button
                  onClick={() => setActiveFeature(index)}
                  className={clsx("clean-btn", styles.feature, {
                    [styles.active]: activeFeature === index,
                  })}
                >
                  <ContentIcon
                    src={feature.icon}
                    size="sm"
                    variant={activeFeature === index ? "primary" : "secondary"}
                  />

                  <div className={styles.featureBody}>
                    <h3 className={styles.title}>{feature.title}</h3>
                    <p className={styles.description}>{feature.description}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          {images ? (
            <ThemedImage sources={images.sources} className={styles.image} />
          ) : (
            <img src={image} className={styles.image} />
          )}
        </div>
      </div>
    </section>
  );
}
