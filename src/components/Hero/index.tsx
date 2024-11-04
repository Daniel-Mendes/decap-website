import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import ThemedImage from "@theme/ThemedImage";
import ExternalLinkIcon from "@theme/Icon/ExternalLink";

import styles from "./Hero.module.css";
import clsx from "clsx";

type Props = {
  badge: {
    label: string;
    link: string;
  };
  headline: string;
  description: string;
  images: {
    sources: {
      light: string;
      dark: string;
    };
    alt: string;
  };
  actions: {
    label: string;
    link: string;
    variant: "primary" | "secondary";
    outline?: boolean;
  }[];
};

export default function Hero({
  badge,
  headline,
  description,
  images,
  actions,
}: Props) {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          {badge && (
            <a
              className="button button--primary button--outline rounded--pill button--sm"
              href={badge.link}
            >
              {badge.label}
            </a>
          )}

          <Heading
            as="h1"
            className={styles.heroTitle}
            dangerouslySetInnerHTML={{ __html: headline }}
          />

          <p className={styles.heroDescription}>{description}</p>

          <div className={styles.heroActions}>
            {actions.map(({ label, link, variant, outline }) => (
              <Link
                key={label}
                className={clsx(`button button--${variant} button--lg`, {
                  "button--outline": outline,
                })}
                to={link}
              >
                {label}
                {link.includes("http") && <ExternalLinkIcon />}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.heroImage}>
          <ThemedImage sources={images.sources} alt={images.alt} />
        </div>
      </div>
    </header>
  );
}
