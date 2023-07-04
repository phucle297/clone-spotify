import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Box } from "@mui/material";
import { FC } from "react";

import styles from "./index.module.scss";

const Nav: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid
        container
        columnSpacing={2}
        alignItems={"center"}
        className={styles.itemActive}
        sx={{
          mb: "16px",
        }}
      >
        <Grid item xs="auto">
          <HomeIcon
            sx={{
              fontSize: "1.8rem",
            }}
          />
        </Grid>
        <Grid item xs="auto">
          <p>Home</p>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} alignItems={"center"} className={styles.item}>
        <Grid item xs="auto">
          <SearchIcon
            sx={{
              fontSize: "1.8rem",
            }}
          />
        </Grid>
        <Grid item xs="auto">
          <p>Search</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
