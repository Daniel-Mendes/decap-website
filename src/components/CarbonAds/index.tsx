import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import "./CarbonAds.css";

export default function CarbonAds({ className }) {
  const ref = useRef();
  const [isBlocked, setBlocked] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.carbonads.com/carbon.js?serve=CWYIKK77&placement=decapcmsorg";
    script.async = true;
    script.id = "_carbonads_js";
    ref.current.appendChild(script);
    script.onerror = (e) => {
      setBlocked(true);
    };
  }, []);

  return (
    <div className={clsx(className, "carbonWrapper")}>
      <div ref={ref} />

      {isBlocked && (
        <div className="carbonFallback">
          <h4>You blocked an ad that keeps this project alive</h4>
          <p>
            Please consider supporting Decap by donating on{" "}
            <a href="https://opencollective.com/decap">Open Collective</a> or
            sponsoring on{" "}
            <a href="https://github.com/sponsors/decaporg/">GitHub</a>.
          </p>
        </div>
      )}
    </div>
  );
}
