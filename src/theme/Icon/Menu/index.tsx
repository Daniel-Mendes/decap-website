import React from "react";
import { Menu } from "lucide-react";
import type { Props } from "@theme/Icon/Menu";

export default function IconMenu({
  width = 30,
  height = 30,
  className,
  ...restProps
}: Props): JSX.Element {
  return (
    <Menu
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...restProps}
    />
  );
}
