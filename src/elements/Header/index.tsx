import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid } from "@mui/material";
import { FC } from "react";

import ButtonCus from "../ButtonCus";

import styles from "./index.module.scss";

const Header: FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs="auto">
          <Grid container columnSpacing={2}>
            <Grid item xs="auto">
              <ButtonCus
                style={{
                  width: "40px",
                  height: "40px",
                }}
                rounded
              >
                <ChevronLeftIcon />
              </ButtonCus>
            </Grid>
            <Grid item xs="auto">
              <ButtonCus
                style={{
                  width: "40px",
                  height: "40px",
                }}
                rounded
              >
                <ChevronRightIcon />
              </ButtonCus>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container columnSpacing={2}>
            <Grid item xs="auto">
              <ButtonCus color="white">
                <p>Explore Premium</p>
              </ButtonCus>
            </Grid>
            <Grid item xs="auto">
              <ButtonCus>
                <ArrowCircleDownIcon />
                <p>Install App</p>
              </ButtonCus>
            </Grid>

            <Grid item xs="auto">
              <ButtonCus
                color="white"
                style={{
                  width: "45px",
                  height: "45px",
                }}
              >
                <PersonIcon />
              </ButtonCus>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
