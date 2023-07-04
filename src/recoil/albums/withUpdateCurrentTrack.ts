import { ALBUM_WITH_UPLOAD_CURRENT_TRACK } from "@/constant/selectorKey";
import { selector } from "recoil";
import currentTractAtom from "./atoms";

const albumsWithUpdateCurrentTrack = selector({
  key: ALBUM_WITH_UPLOAD_CURRENT_TRACK,
  get: ({ get }) => {
    const currentTrack = get(currentTractAtom);
    return currentTrack;
  },
});
export default albumsWithUpdateCurrentTrack;
