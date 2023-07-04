import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";

import styles from "./index.module.scss";

interface ITrackProps {
  track: TTrack;
  handleLikeTrack: (trackId: number) => void;
}
const Track: FC<ITrackProps> = ({ track, handleLikeTrack }) => {
  const [trackNameState, setTrackNameState] = useState<string>("");
  const [artistState, setArtistState] = useState<string>("");
  const [isLikedState, setIsLikedState] = useState<boolean>(false);
  useEffect(() => {
    setTrackNameState(track.title);
    setArtistState(track.artist);
    setIsLikedState(track.isLiked);
  }, [track]);

  return (
    <Box className={styles.wrapper}>
      {track?.id ? (
        <>
          <img src={track.img} alt="track" />
          <Box>
            <p>{trackNameState}</p>
            <small>{artistState}</small>
          </Box>
          <Box>
            {isLikedState ? (
              <FavoriteIcon
                style={{
                  color: "#13eb13",
                }}
                onClick={() => {
                  handleLikeTrack(track.id);
                  setIsLikedState(false);
                }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => {
                  handleLikeTrack(track.id);
                  setIsLikedState(true);
                }}
              />
            )}
          </Box>
          <Box>
            <PictureInPictureAltIcon />
          </Box>
        </>
      ) : (
        <div
          style={{
            width: 324,
            color: "transparent",
          }}
        >
          z
        </div>
      )}
    </Box>
  );
};

export default Track;
