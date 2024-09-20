"use client";
import React, { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon, Pause } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(117);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);

  // Set volume to 50% by default when the component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1; // Set volume to 50%
    }
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar as audio plays
  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      const progress = (audio.currentTime / audio.duration) * 100;
      setCurrentTime(audio.currentTime);
      if (progressRef.current) {
        progressRef.current.value = progress.toString();
      }
    }
  };

  // Format time as mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Seek audio based on progress bar value
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const value = event.target.value;
    if (audio) {
      const seekTime = (audio.duration / 100) * Number(value);
      audio.currentTime = seekTime;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className="w-[92%] mx-auto bg-zinc-100 dark:bg-zinc-900 text-sm px-4 py-2 rounded-lg">
      <audio ref={audioRef} src="/intro.mp3" onTimeUpdate={updateProgress} />

      <div className="flex items-center space-x-4">
        {/* Play/Pause Button */}
        <button className="" onClick={togglePlayPause}>
          {isPlaying ? (
            <PauseIcon size={16}></PauseIcon>
          ) : (
            <PlayIcon size={16}></PlayIcon>
          )}
        </button>
        {/* Time Display */}
        <div className="text-sm w-32">
          <span>{formatTime(currentTime)}</span> /{" "}
          <span>{formatTime(duration)}</span>
        </div>
        {/* Progress Bar */}
        <input
          type="range"
          ref={progressRef}
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none"
          defaultValue="0"
          onChange={handleSeek}
          style={{
            background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${
              (currentTime / duration) * 100
            }%, #D1D5DB ${(currentTime / duration) * 100}%, #D1D5DB 100%)`,
            appearance: "none", // For some browsers
            WebkitAppearance: "none", // For Safari/Chrome
            MozAppearance: "none", // For Firefox
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
