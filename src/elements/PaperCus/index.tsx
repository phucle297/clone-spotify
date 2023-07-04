import { Paper, Box } from "@mui/material";
import { FC, CSSProperties, ReactElement } from "react";

import styles from "./index.module.scss";

interface IPaperCusProps {
  style?: CSSProperties;
  stylePaper?: CSSProperties;
  children: ReactElement | ReactElement[];
}

const PaperCus: FC<IPaperCusProps> = ({ style, children, stylePaper }) => {
  return (
    <Box className={styles.wrapper} style={{ ...style }}>
      <Paper className={styles.paper} style={{ ...stylePaper }}>
        {children}
      </Paper>
    </Box>
  );
};

export default PaperCus;
