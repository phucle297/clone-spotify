import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Skeleton } from "@mui/material";
import { FC } from "react";

import currentTractAtom from "@/recoil/albums";
import { useSetRecoilState } from "recoil";
import styles from "./index.module.scss";

interface IAlbumProps {
  album: TAlbum;
  direction?: "row" | "column";
}

const Album: FC<IAlbumProps> = ({ album, direction = "row" }) => {
  const { title, img, artist } = album;
  const setCurrentTrack = useSetRecoilState(currentTractAtom);
  const handleChooseTrack = () => {
    setCurrentTrack(album as TTrack);
  };
  return (
    <>
      {direction === "row" ? (
        <Box className={styles.card}>
          <Box className={styles.top}>
            {img ? (
              <img src={img} alt={title} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={120}
                height={120}
                sx={{
                  bgcolor: "grey.800",
                  mb: "16px",
                  borderRadius: "4px",
                }}
              />
            )}

            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
              onClick={handleChooseTrack}
            >
              <Box className={styles.play}>
                <PlayArrowIcon />
              </Box>
            </button>
          </Box>
          <Box>
            <h4>{title}</h4>
            <p>{artist}</p>
          </Box>
        </Box>
      ) : (
        <Box className={styles.cardCol}>
          <Box className={styles.left}>
            {img ? (
              <img src={img} alt={title} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={120}
                height={120}
                sx={{
                  bgcolor: "grey.800",
                  mb: "16px",
                  borderRadius: "4px",
                }}
              />
            )}
          </Box>
          <Box className={styles.right}>
            <h4>{title}</h4>
            <p>{artist}</p>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Album;
