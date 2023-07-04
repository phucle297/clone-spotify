import { Box, Grid, Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";

import Control from "@/elements/Control";
import Header from "@/elements/Header";
import ListAlbum from "@/elements/ListAlbum";
import PaperCus from "@/elements/PaperCus";
import SideBar from "@/elements/SideBar";
import { albumMockData } from "@/mocks/albums";

import styles from "./index.module.scss";

const HomePage: FC = () => {
  const [isInit, setisInit] = useState<boolean>(true);
  const [recentlyPlayed, setRecentlyPlayed] = useState<TAlbum[]>([]);
  const [madeForYou, setMadeForYou] = useState<TAlbum[]>([]);
  const [popularAlbum, setPopularAlbum] = useState<TAlbum[]>([]);
  const [newRelease, setNewRelease] = useState<TAlbum[]>([]);
  const [uniquelyYours, setUniquelyYours] = useState<TAlbum[]>([]);

  useEffect(() => {
    setRecentlyPlayed(albumMockData.recentlyPlayed);
    setMadeForYou(albumMockData.madeForYou);
    setPopularAlbum(albumMockData.popularAlbum);
    setNewRelease(albumMockData.newRelease);
    setUniquelyYours(albumMockData.uniquelyYours);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisInit(false);
    }, 1500);
  }, []);
  return (
    <Box className={styles.wrapper}>
      <Grid container>
        <Grid item xs={2.5}>
          <SideBar />
        </Grid>
        <Grid item xs={9.5} className={styles.content}>
          <PaperCus
            stylePaper={{
              paddingTop: 0,
            }}
          >
            <Header />
            {!isInit ? (
              <Box>
                <ListAlbum name="Recently played" listAlbum={recentlyPlayed} />
                <ListAlbum name="Made for you" listAlbum={madeForYou} />
                <ListAlbum name="Popular album" listAlbum={popularAlbum} />
                <ListAlbum name="New release" listAlbum={newRelease} />
                <ListAlbum name="Uniquely yours" listAlbum={uniquelyYours} />
              </Box>
            ) : (
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "20px", mb: "20px" }}
                  variant="rounded"
                  width={"60%"}
                  height={70}
                />
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={"auto"}>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="circular"
                          width={50}
                          height={50}
                        />
                      </Grid>
                      <Grid item xs>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="rounded"
                          width={"100%"}
                          height={50}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={"auto"}>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="circular"
                          width={50}
                          height={50}
                        />
                      </Grid>
                      <Grid item xs>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="rounded"
                          width={"100%"}
                          height={50}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={"auto"}>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="circular"
                          width={50}
                          height={50}
                        />
                      </Grid>
                      <Grid item xs>
                        <Skeleton
                          sx={{ bgcolor: "grey.700" }}
                          variant="rounded"
                          width={"100%"}
                          height={50}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "20px", my: "20px" }}
                  variant="rounded"
                  width={"20%"}
                  height={20}
                />

                <Grid container spacing={2}>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "20px", my: "20px" }}
                  variant="rounded"
                  width={"20%"}
                  height={20}
                />

                <Grid container spacing={2}>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "20px", my: "20px" }}
                  variant="rounded"
                  width={"20%"}
                  height={20}
                />

                <Grid container spacing={2}>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={1.5}>
                    <Box
                      sx={{
                        bgcolor: "grey.800",
                        p: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={"100%"}
                        height={150}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"5`0%"}
                        height={15}
                      />
                      <Skeleton
                        sx={{ bgcolor: "grey.700", mt: "5px" }}
                        variant="rounded"
                        width={"80%"}
                        height={15}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
          </PaperCus>
        </Grid>
      </Grid>

      <Control />
    </Box>
  );
};

export default HomePage;
