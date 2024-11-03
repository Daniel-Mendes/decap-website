import React from "react";
import { ExternalLink } from "lucide-react";
import type { Props } from "@theme/Icon/ExternalLink";

import styles from "./styles.module.css";

export default function IconExternalLink({
  width = 13.5,
  height = 13.5,
}: Props): JSX.Element {
  return (
    <ExternalLink
      width={width}
      height={height}
      className={styles.iconExternalLink}
    />
  );
}
