import { Box, Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { FC } from "react";

import Album from "../Album";

interface IListAlbumProps {
  name?: string;
  listAlbum: TAlbum[];
  direction?: "row" | "column";
}
const ListAlbum: FC<IListAlbumProps> = ({ listAlbum, name, direction = "row" }) => {
  return (
    <>
      {direction === "row" ? (
        <Box
          sx={{
            mb: "30px",
          }}
        >
          <h3>{name}</h3>
          <Grid container spacing={2}>
            {listAlbum.map((album: TAlbum) => {
              return (
                <Grid item xs={12 / 9} key={nanoid()}>
                  <Album album={album} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <Box>
          {listAlbum.map((album: TAlbum) => {
            return (
              <Box key={nanoid()}>
                <Album direction="column" album={album} />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default ListAlbum;
