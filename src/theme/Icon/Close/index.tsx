import React from "react";
import { X } from "lucide-react";
import type { Props } from "@theme/Icon/Close";

export default function IconClose({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
  ...restProps
}: Props): JSX.Element {
  return <X width={width} height={height} {...restProps} />;
}
