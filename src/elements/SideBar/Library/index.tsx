import { Box } from "@mui/material";
import { FC, useState, useEffect } from "react";

import ListAlbum from "@/elements/ListAlbum";
import { albumMockData } from "@/mocks/albums";

import styles from "./index.module.scss";

const Library: FC = () => {
  const [listAlbum, setListAlbum] = useState<TAlbum[]>([]);

  useEffect(() => {
    setListAlbum([...albumMockData.recentlyPlayed, ...albumMockData.popularAlbum]);
  }, []);
  return (
    <Box className={styles.wrapper}>
      <h3>Your Library</h3>

      <Box className={styles.list}>
        <ListAlbum listAlbum={listAlbum} direction="column" />
      </Box>
    </Box>
  );
};

export default Library;
