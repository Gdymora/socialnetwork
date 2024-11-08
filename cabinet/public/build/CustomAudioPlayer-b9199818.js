import { jsx, jsxs } from "react/jsx-runtime";
import { BackwardIcon, PauseIcon, PlayIcon, ForwardIcon, SpeakerWaveIcon } from "@heroicons/react/16/solid";
import { useRef, useState, useEffect } from "react";
const RangeSlider = ({
  min,
  max,
  value,
  step,
  onChange,
  className
}) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "range",
      value,
      min,
      max,
      step,
      onChange,
      className: `transparent h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent accent-gray-700 hover:accent-gray-700 active:accent-gray-800 bg-gray-100 ${className || ""}`
    }
  );
};
const CustomAudioPlayer = ({ src }) => {
  var _a;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackPosition, setPlaybackPosition] = useState(1);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handlePlaybackPositionChange = (event) => {
    const newplaybackPosition = parseFloat(event.target.value);
    setPlaybackPosition(newplaybackPosition);
    if (audioRef.current) {
      audioRef.current.currentTime = newplaybackPosition;
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5;
    }
  };
  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5;
    }
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, [(_a = audioRef.current) == null ? void 0 : _a.duration]);
  const audioPlayerButton = {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    margin: "2px",
    alignContent: "center"
  };
  return /* @__PURE__ */ jsxs("div", { className: "custom-audio-player", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-1", style: audioPlayerButton, children: /* @__PURE__ */ jsxs("div", { className: "custom-audio-player-button m-2", children: [
      /* @__PURE__ */ jsx("span", { onClick: handleRewind, children: /* @__PURE__ */ jsx(BackwardIcon, { className: "w-6 h-6 text-gray-500 hover:text-gray-700" }) }),
      /* @__PURE__ */ jsx("span", { onClick: togglePlay, children: isPlaying ? /* @__PURE__ */ jsx(PauseIcon, { className: "w-8 h-8 text-gray-500 hover:text-gray-700" }) : /* @__PURE__ */ jsx(PlayIcon, { className: "w-8 h-8 text-gray-500 hover:text-gray-700" }) }),
      /* @__PURE__ */ jsx("span", { onClick: handleForward, children: /* @__PURE__ */ jsx(ForwardIcon, { className: "w-6 h-6 text-gray-500 hover:text-gray-700" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(
      RangeSlider,
      {
        min: 0,
        max: 100,
        step: 1,
        value: playbackPosition,
        onChange: handlePlaybackPositionChange
      }
    ) }),
    /* @__PURE__ */ jsx(
      "audio",
      {
        ref: audioRef,
        src,
        style: { display: "none" },
        onTimeUpdate: handleTimeUpdate,
        onLoadedMetadata: () => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex",
        style: {
          flexDirection: "column-reverse",
          alignItems: "center",
          justifyContent: "flex-end"
        },
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: volume,
              onChange: handleVolumeChange,
              style: { width: "46px" },
              className: "mt-2 transform -rotate-180"
            }
          ),
          /* @__PURE__ */ jsx(SpeakerWaveIcon, { className: "w-4 text-gray-500 hover:text-gray-700" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      currentTime.toFixed(2),
      " / ",
      duration.toFixed(2)
    ] })
  ] });
};
const CustomAudioPlayer$1 = CustomAudioPlayer;
export {
  CustomAudioPlayer$1 as C
};
