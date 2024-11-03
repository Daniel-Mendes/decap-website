import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import styles from "./Banner.module.css";
import clsx from "clsx";

type BannerProps = {
  title: string;
  subtitle: string;
  action: {
    label: string;
    link: string;
  };
};

export default function Banner({ title, subtitle, action }: BannerProps) {
  return (
    <section className="container">
      <div className="row">
        <div className={clsx("col", styles.banner)}>
          <Heading
            as="h2"
            className={styles.bannerTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={styles.bannerSubtitle}>{subtitle}</p>
          <Link
            to={action.link}
            className={clsx(
              "button button--primary button--lg",
              styles.bannerLink
            )}
          >
            {action.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
