import { FC, useState, useEffect } from "react";

import { albumMockData } from "@/mocks/albums";

import styles from "./index.module.scss";
import Slider from "./Slider";
import Track from "./Track";
import Volume from "./Volume";
import { useRecoilValue, useSetRecoilState } from "recoil";
import currentTractAtom from "@/recoil/albums";

const Control: FC = () => {
  const [tracks, setTracks] = useState<TTrack[]>(albumMockData.madeForYou);
  const currentTrack = useRecoilValue(currentTractAtom);
  const setCurrentTrack = useSetRecoilState(currentTractAtom);
  useEffect(() => {
    if (currentTrack) {
      const isMadeForYou = albumMockData.madeForYou.find(track => track.id === currentTrack.id);
      if (isMadeForYou) {
        setTracks(albumMockData.madeForYou);
      }
      const isRecentlyPlayed = albumMockData.recentlyPlayed.find(
        track => track.id === currentTrack.id
      );
      if (isRecentlyPlayed) {
        setTracks(albumMockData.recentlyPlayed);
      }
      const isNewRelease = albumMockData.newRelease.find(track => track.id === currentTrack.id);
      if (isNewRelease) {
        setTracks(albumMockData.newRelease);
      }
      const isPopularAlbum = albumMockData.popularAlbum.find(track => track.id === currentTrack.id);
      if (isPopularAlbum) {
        setTracks(albumMockData.popularAlbum);
      }
      const isUniquelyYours = albumMockData.uniquelyYours.find(
        track => track.id === currentTrack.id
      );
      if (isUniquelyYours) {
        setTracks(albumMockData.uniquelyYours);
      }
    } else {
      setTracks(albumMockData.madeForYou);
    }
  }, [currentTrack]);

  const handleLikeTrack = (trackId: number) => {
    const updatedTracks = tracks.map(track => {
      if (track.id === trackId) {
        return {
          ...track,
          isLiked: !track.isLiked,
        };
      }
      return track;
    });
    setTracks(updatedTracks);
  };
  const handlePlayNext = () => {
    const currentTrackIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextTrackIndex = currentTrackIndex + 1;
    if (nextTrackIndex < tracks.length) {
      setCurrentTrack(tracks[nextTrackIndex]);
    }
  };

  const handlePlayPrevious = () => {
    const currentTrackIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const previousTrackIndex = currentTrackIndex - 1;
    if (previousTrackIndex >= 0) {
      setCurrentTrack(tracks[previousTrackIndex]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Track track={currentTrack} handleLikeTrack={handleLikeTrack} />
      <Slider
        duration={currentTrack.duration}
        handlePlayNext={handlePlayNext}
        handlePlayPrevious={handlePlayPrevious}
      />
      <Volume />
    </div>
  );
};

export default Control;
