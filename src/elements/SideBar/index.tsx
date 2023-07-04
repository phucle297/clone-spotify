import { Box } from "@mui/material";
import { FC } from "react";

import PaperCus from "../PaperCus";

import styles from "./index.module.scss";
import Library from "./Library";
import Nav from "./Nav";

const SideBar: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <PaperCus>
        <Nav />
      </PaperCus>
      <Box
        sx={{
          mt: "10px",
        }}
      >
        <PaperCus
          stylePaper={{
            padding: 0,
          }}
        >
          <Library />
        </PaperCus>
      </Box>
    </Box>
  );
};

export default SideBar;
