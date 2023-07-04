import { CURRENT_TRACK } from "@/constant/atomKey";

import { atom } from "recoil";

export const currentTractAtom = atom({
  key: CURRENT_TRACK,
  default: <TTrack>{},
});

export default currentTractAtom;
