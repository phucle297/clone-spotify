import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { FC, useState } from "react";

import ButtonCus from "@/elements/ButtonCus";

import styles from "./index.module.scss";

const Volume: FC = () => {
  const [currentVolume, setCurrentVolume] = useState(100);
  const [memoVolume, setMemoVolume] = useState(100);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseInt(event.target.value, 10);
    setCurrentVolume(time);
  };

  return (
    <div className={styles.wrapper}>
      <ButtonCus
        style={{
          padding: 0,
          width: "40px",
          height: "40px",
        }}
        onClick={() => {
          if (memoVolume !== 0) {
            setCurrentVolume(memoVolume);
            setMemoVolume(0);
          } else {
            setMemoVolume(currentVolume);
            setCurrentVolume(0);
          }
        }}
      >
        {currentVolume === 0 ? <VolumeMuteIcon /> : <></>}
        {currentVolume > 0 && currentVolume < 50 ? <VolumeDownIcon /> : <></>}
        {currentVolume >= 50 ? <VolumeUpIcon /> : <></>}
      </ButtonCus>

      <input
        type="range"
        min={0}
        max={100}
        value={currentVolume}
        onChange={handleChange}
        className="Volume"
      />
    </div>
  );
};

export default Volume;
