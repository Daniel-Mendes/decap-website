import React from "react";
import { Clipboard } from "lucide-react";
import type { Props } from "@theme/Icon/Copy";

export default function IconCopy(props: Props): JSX.Element {
  return <Clipboard {...props} />;
}
