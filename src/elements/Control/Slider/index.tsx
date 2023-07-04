import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { FC, useEffect, useState, useCallback } from "react";

import styles from "./index.module.scss";
import { useRecoilValue } from "recoil";
import currentTractAtom from "@/recoil/albums";

interface ISliderProps {
  duration: number;
  handlePlayNext?: () => void;
  handlePlayPrevious?: () => void;
}

const Slider: FC<ISliderProps> = ({
  duration,
  handlePlayNext = () => {},
  handlePlayPrevious = () => {},
}) => {
  const currentTrack = useRecoilValue(currentTractAtom);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (isNaN(minutes) || isNaN(seconds)) return "0:00";
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const calculateTimeRemaining = () => {
    return formatTime(duration - currentTime);
  };

  const handlePlayPause = () => {
    if (!currentTrack.id) return;
    setIsPlaying(prevState => !prevState);
  };

  const handleNext = useCallback(() => {
    setCurrentTime(0);
    handlePlayNext();
  }, [handlePlayNext]);

  const handlePrevious = () => {
    setCurrentTime(0);
    handlePlayPrevious();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentTrack.id) return;
    const time = parseInt(event.target.value, 10);
    setCurrentTime(time);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime < duration) {
        setCurrentTime(prevTime => prevTime + 1);
      } else if (currentTime === duration) {
        handleNext();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration, handleNext]);

  useEffect(() => {
    if (!currentTrack.id) {
      setIsPlaying(false);
      return;
    } else {
      setIsPlaying(true);
      setCurrentTime(0);
    }
  }, [currentTrack]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button onClick={handlePrevious}>
          <SkipPreviousIcon />
        </button>
        <button onClick={handlePlayPause}>{!isPlaying ? <PlayArrowIcon /> : <PauseIcon />}</button>
        <button onClick={handleNext}>
          <SkipNextIcon />
        </button>
      </div>
      <div className={styles.slider}>
        <div className="time">{formatTime(currentTime)}</div>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleChange}
          className="slider"
        />
        <div className="time">{calculateTimeRemaining()}</div>
      </div>
    </div>
  );
};

export default Slider;
