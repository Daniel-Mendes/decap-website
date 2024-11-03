import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderImage() {
  const { metadata, assets } = useBlogPost();
  const { permalink } = metadata;
  const image = assets.image;

  if (!image) {
    return null;
  }

  return (
    <Link to={permalink}>
      <img src={image} className={clsx(styles.image)} />
    </Link>
  );
}
