import React from "react";
import clsx from "clsx";
import { Pencil } from "lucide-react";
import type { Props } from "@theme/Icon/Edit";

import styles from "./styles.module.css";

export default function IconEdit({
  className,
  width = 20,
  height = 20,
  ...restProps
}: Props): JSX.Element {
  return (
    <Pencil
      width={width}
      height={height}
      className={clsx(styles.iconEdit, className)}
      aria-hidden="true"
      {...restProps}
    />
  );
}
