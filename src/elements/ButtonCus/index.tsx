import { FC, CSSProperties, ReactElement } from "react";

import styles from "./index.module.scss";
interface IButtonCusProps {
  style?: CSSProperties;
  children: ReactElement | ReactElement[] | string | number | (string | number)[];
  color?: "white" | "black";
  rounded?: boolean;
  onClick?: () => void;
}

const ButtonCus: FC<IButtonCusProps> = ({
  style,
  children,
  onClick,
  color = "black",
  rounded = false,
}) => {
  const classBtn = color === "black" ? styles.btnBlack : styles.btnWhite;
  return (
    <button
      className={`${styles.wrapper} ${classBtn} ${rounded ? styles.btnRounded : ""}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonCus;
