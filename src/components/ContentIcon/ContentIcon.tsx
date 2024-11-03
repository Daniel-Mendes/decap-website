import clsx from "clsx";
import styles from "./ContentIcon.module.css";

type ContentIconProps = {
  src: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary";
};

export default function ContentIcon({
  src,
  size = "md",
  variant = "default",
}: ContentIconProps) {
  return (
    <div className={clsx(styles.iconWrap, styles[size], styles[variant])}>
      <img
        src={src}
        className={clsx(styles.icon, styles[size], styles[variant])}
        aria-hidden="true"
      />
    </div>
  );
}
