import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import { translate } from "@docusaurus/Translate";
import { useBackToTopButton } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/TOC";
import { ArrowUp } from "lucide-react";

import CarbonAds from "@site/src/components/CarbonAds";
import styles from "./styles.module.css";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }: Props): JSX.Element {
  const { scrollToTop } = useBackToTopButton({ threshold: 300 });

  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <div>
        <h4>On this page</h4>

        <TOCItems
          {...props}
          linkClassName={LINK_CLASS_NAME}
          linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
        />

        <hr className={clsx(styles.divider)} />

        <button
          aria-label={translate({
            id: "theme.BackToTopButton.buttonAriaLabel",
            message: "Scroll back to top",
            description: "The ARIA label for the back to top button",
          })}
          className={clsx(
            "clean-btn table-of-contents__link",
            styles.backToTopButton
          )}
          type="button"
          onClick={scrollToTop}
        >
          <ArrowUp size={16} /> Back to top
        </button>
      </div>

      <CarbonAds />
    </div>
  );
}
