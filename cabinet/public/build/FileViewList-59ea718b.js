var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { S as SelectButton } from "./SelectButton-79e61b6d.js";
import { Howl } from "howler";
import FileCategoryView from "./FileCategoryView-b2a98b8c.js";
import "./FileView-a83e6aa4.js";
import "./FileViewHeader-989eeec3.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "axios";
import "./ModalYesOrNot-65fc07f4.js";
import "./useAxios-a6ad7719.js";
import "react-toastify";
import "./FileViewContent-3c344970.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-2a2dbeae.js";
import "./useExpandableContent-d234d7eb.js";
const audioPlayerHowler = "_audioPlayerHowler_1hy8c_1";
const title = "_title_1hy8c_19";
const timer = "_timer_1hy8c_32";
const duration = "_duration_1hy8c_43";
const controlsOuter = "_controlsOuter_1hy8c_56";
const controlsInner = "_controlsInner_1hy8c_66";
const btn = "_btn_1hy8c_73";
const playBtn = "_playBtn_1hy8c_86";
const pauseBtn = "_pauseBtn_1hy8c_92";
const prevBtn = "_prevBtn_1hy8c_98";
const nextBtn = "_nextBtn_1hy8c_106";
const playlistBtn = "_playlistBtn_1hy8c_114";
const volumeBtn = "_volumeBtn_1hy8c_122";
const waveform = "_waveform_1hy8c_132";
const barProgres = "_barProgres_1hy8c_150";
const progress = "_progress_1hy8c_160";
const loading = "_loading_1hy8c_171";
const playlist = "_playlist_1hy8c_114";
const list = "_list_1hy8c_215";
const list_song = "_list_song_1hy8c_236";
const list_song_playing = "_list_song_playing_1hy8c_252";
const volume = "_volume_1hy8c_122";
const bar = "_bar_1hy8c_150";
const barEmpty = "_barEmpty_1hy8c_278";
const barFull = "_barFull_1hy8c_284";
const sliderBtn = "_sliderBtn_1hy8c_287";
const fadeout = "_fadeout_1hy8c_301";
const fadein = "_fadein_1hy8c_306";
const styles = {
  audioPlayerHowler,
  title,
  timer,
  duration,
  controlsOuter,
  controlsInner,
  btn,
  playBtn,
  pauseBtn,
  prevBtn,
  nextBtn,
  playlistBtn,
  volumeBtn,
  waveform,
  barProgres,
  progress,
  loading,
  "sk-scaleout": "_sk-scaleout_1hy8c_1",
  playlist,
  list,
  list_song,
  list_song_playing,
  volume,
  bar,
  barEmpty,
  barFull,
  sliderBtn,
  fadeout,
  fadein
};
class SiriWave {
  constructor(opt = {}) {
    __publicField(this, "_GATF_cache", {});
    this.phase = 0;
    this.run = false;
    console.log(opt);
    this.ratio = opt.ratio || window.devicePixelRatio || 1;
    this.width = this.ratio * (opt.width || 320);
    this.width_2 = this.width / 2;
    this.width_4 = this.width / 4;
    this.height = this.ratio * (opt.height || 100);
    this.height_2 = this.height / 2;
    this.MAX = this.height_2 - 4;
    this.amplitude = opt.amplitude || 1;
    this.speed = opt.speed || 0.2;
    this.frequency = opt.frequency || 6;
    this.color = this.hex2rgb(opt.color || "#fff") || "255,255,255";
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    if (opt.cover) {
      this.canvas.style.width = this.canvas.style.height = "100%";
    } else {
      this.canvas.style.width = `${this.width / this.ratio}px`;
      this.canvas.style.height = `${this.height / this.ratio}px`;
    }
    this.container = opt.container || document.body;
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    if (opt.autostart) {
      this.start();
    }
  }
  hex2rgb(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(
      shorthandRegex,
      (m, r, g, b) => r + r + g + g + b + b
    );
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
      result[3],
      16
    )}` : null;
  }
  _globAttFunc(x) {
    if (this._GATF_cache[x] == null) {
      this._GATF_cache[x] = Math.pow(4 / (4 + Math.pow(x, 4)), 4);
    }
    return this._GATF_cache[x];
  }
  _xpos(i) {
    return this.width_2 + i * this.width_4;
  }
  _ypos(i, attenuation) {
    var att = this.MAX * this.amplitude / attenuation;
    return this.height_2 + this._globAttFunc(i) * att * Math.sin(this.frequency * i - this.phase);
  }
  _drawLine(attenuation, color, width) {
    this.ctx.moveTo(0, 0);
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width || 1;
    var i = -2;
    while ((i += 0.01) <= 2) {
      var y = this._ypos(i, attenuation);
      if (Math.abs(i) >= 1.9)
        y = this.height_2;
      this.ctx.lineTo(this._xpos(i), y);
    }
    this.ctx.stroke();
  }
  _clear() {
    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = "source-over";
  }
  _draw() {
    if (this.run === false)
      return;
    this.phase = (this.phase + Math.PI * this.speed) % (2 * Math.PI);
    this._clear();
    this._drawLine(-2, `rgba(${this.color},0.1)`);
    this._drawLine(-6, `rgba(${this.color},0.2)`);
    this._drawLine(4, `rgba(${this.color},0.4)`);
    this._drawLine(2, `rgba(${this.color},0.6)`);
    this._drawLine(1, `rgba(${this.color},1)`, 1.5);
    if (window.requestAnimationFrame) {
      requestAnimationFrame(this._draw.bind(this));
      return;
    }
    setTimeout(this._draw.bind(this), 20);
  }
  start() {
    this.phase = 0;
    this.run = true;
    this._draw();
  }
  stop() {
    this.phase = 0;
    this.run = false;
  }
  setSpeed(v) {
    this.speed = v;
  }
  setNoise(v) {
    this.setAmplitude(v);
  }
  setAmplitude(v) {
    this.amplitude = Math.max(Math.min(v, 1), 0);
  }
}
const SiriWaveComponent = (props) => {
  const waveRef = useRef(null);
  useEffect(() => {
    const siriWave = new SiriWave({
      ...props,
      container: waveRef.current,
      cover: true,
      frequency: 2
    });
    siriWave.start();
    return () => {
      siriWave.stop();
      if (waveRef.current && waveRef.current.firstChild) {
        waveRef.current.removeChild(
          waveRef.current.firstChild
        );
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: waveRef });
};
const AudioPlayer = ({
  playlist: playlist2,
  currentIndex,
  widthCanvas,
  heightCanvas
}) => {
  var _a;
  const [playing, setPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(currentIndex);
  const [sound, setSound] = useState(null);
  const [duration2, setDuration] = useState(0);
  const [volume2, setVolume] = useState(0.3);
  const [sliderDown, setSliderDown] = useState(false);
  const [volumeVisible, setVolumeVisible] = useState(false);
  const [containerSize, setContainerSize] = useState({
    width: widthCanvas,
    height: heightCanvas
  });
  const [isBar, setIsBar] = useState(false);
  const [isWave, setIsWave] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);
  const playerContainerRef = useRef(null);
  const barFullRef = useRef(null);
  const sliderBtnRef = useRef(null);
  const barEmptyRef = useRef(null);
  const volumeRef = useRef(null);
  const durationRef = useRef(null);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const animationFrameId = useRef(null);
  useEffect(() => {
    sound == null ? void 0 : sound.once("load", function() {
      if (sound) {
        const durationInSeconds = Math.round(sound.duration());
        setDuration(durationInSeconds);
        if (durationRef.current) {
          durationRef.current.innerHTML = formatTime(durationInSeconds);
        }
        const duration22 = sound == null ? void 0 : sound.duration();
        console.log("Тривалість треку:", duration22, "секунд");
        getHTMLMediaElement();
      }
    });
  }, [sound]);
  const getHTMLMediaElement = () => {
    const node = sound == null ? void 0 : sound._sounds[0]._node;
    console.log(node);
  };
  useEffect(() => {
    setContainerSize({
      width: widthCanvas,
      height: heightCanvas
    });
  }, [widthCanvas, heightCanvas]);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    if (playerContainerRef.current) {
      resizeObserver.observe(playerContainerRef.current);
    }
    if (sound && sliderBtnRef.current) {
      const barWidth = volume2 * 0.9;
      sliderBtnRef.current.style.left = (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25).toString();
    }
    console.log("effectSound", sound);
    step();
    return () => {
      if (playerContainerRef.current) {
        resizeObserver.unobserve(playerContainerRef.current);
      }
      stop();
    };
  }, [sound]);
  useEffect(() => {
    if (playlist2 && playlist2.length > 0 && !sound) {
      const track = playlist2[currentTrackIndex];
      if (!track) {
        setIsLoading(true);
        return;
      }
      const newSound = new Howl({
        src: [track.src],
        html5: false,
        // html5: true, почне відтворюватися, щойно стане можливо, за замовченням завантажує весь файл
        volume: volume2,
        onplay: () => {
          setPlaying(true);
          setIsWave(true);
          setIsBar(false);
          setIsLoading(false);
          step();
          console.log("one play");
        },
        onend: () => {
          setIsWave(false);
          setIsBar(true);
          setPlaying(false);
          nextTrack();
        },
        onpause: () => {
          setPlaying(false);
          setIsWave(false);
          setIsBar(true);
          cancelAnimationFrame(animationFrameId.current);
        },
        onstop: () => {
          setPlaying(false);
          setIsWave(false);
          setIsBar(true);
        },
        onseek: () => {
          step();
        }
      });
      setSound(newSound);
      newSound.play();
      console.log(newSound);
    }
  }, [playlist2, currentTrackIndex, sound, volume2]);
  useEffect(() => {
    if (barFullRef.current && sliderBtnRef.current) {
      const barWidth = volume2 * 0.9;
      barFullRef.current.style.width = `${barWidth * 100}%`;
      sliderBtnRef.current.style.left = `${containerSize.width * barWidth + containerSize.width * 0.05 - 25}px`;
    }
  }, [volume2, containerSize]);
  const play = () => {
    if (sound && sound.state() === "loaded") {
      sound.play();
      step();
    } else {
      setIsLoading(true);
    }
  };
  const pause = () => sound == null ? void 0 : sound.pause();
  const stop = () => {
    sound == null ? void 0 : sound.stop();
    cancelAnimationFrame(animationFrameId.current);
  };
  const nextTrack = () => changeTrack(
    currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist2.length - 1
  );
  const prevTrack = () => changeTrack(
    currentTrackIndex < playlist2.length - 1 ? currentTrackIndex + 1 : 0
  );
  const changeTrack = (index) => {
    stop();
    setSound(null);
    setCurrentTrackIndex(index);
  };
  const seek = (per) => {
    if (sound == null ? void 0 : sound.playing()) {
      sound == null ? void 0 : sound.seek((sound == null ? void 0 : sound.duration()) * per);
    }
  };
  const step = () => {
    if (sound) {
      const seek2 = (sound == null ? void 0 : sound.seek()) || 0;
      if (timerRef.current) {
        timerRef.current.innerHTML = formatTime(Math.round(seek2));
      }
      if (progressRef.current) {
        progressRef.current.style.width = `${seek2 / (sound == null ? void 0 : sound.duration()) * 100 || 0}%`;
      }
      animationFrameId.current = requestAnimationFrame(step);
    }
  };
  const waveformClick = (event) => {
    if (sound && progressRef.current) {
      const progressBarStart = progressRef.current.getBoundingClientRect().left;
      const clickX = event.clientX - progressBarStart;
      seek(clickX / containerSize.width);
    }
  };
  const playlistBtn2 = () => {
    setIsPlaylist((prevIsPlaylist) => !prevIsPlaylist);
  };
  const toggleVolume = () => {
    setVolumeVisible((prevVisible) => !prevVisible);
  };
  const barEmpty2 = (event) => {
    if (barEmptyRef.current) {
      const per = event.layerX / parseFloat(barEmptyRef.current.scrollWidth.toString());
      setVolume(per);
    }
  };
  const handleMove = (event) => {
    if (!sliderDown)
      return;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    if (volumeRef.current) {
      const startX = volumeRef.current.getBoundingClientRect().left;
      const layerX = clientX - startX;
      const per = Math.min(
        1,
        Math.max(0, layerX / volumeRef.current.offsetWidth)
      );
      setVolume(per);
      sound == null ? void 0 : sound.volume(volume2);
    }
  };
  const sliderBtn2 = () => {
    setSliderDown(true);
  };
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = Math.floor(secs - minutes * 60) || 0;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const volumeMouseUp = () => setSliderDown(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: playerContainerRef,
      className: styles.audioPlayerHowler,
      style: {
        width: containerSize.width,
        height: containerSize.height
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.title, children: [
          /* @__PURE__ */ jsx("span", { className: styles.track, children: ((_a = playlist2[currentTrackIndex]) == null ? void 0 : _a.title) || "" }),
          /* @__PURE__ */ jsx("div", { ref: timerRef, className: styles.timer }),
          /* @__PURE__ */ jsx("div", { ref: durationRef, className: styles.duration })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.controlsOuter, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${styles.btn} ${styles.playlistBtn}`,
              onClick: playlistBtn2
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: styles.controlsInner, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${styles.btn} ${styles.prevBtn}`,
                onClick: prevTrack
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: styles.loading,
                style: { display: isLoading ? "block" : "none" }
              }
            ),
            !isLoading && (playing ? /* @__PURE__ */ jsx(
              "div",
              {
                className: `${styles.btn} ${styles.pauseBtn}`,
                onClick: pause
              }
            ) : /* @__PURE__ */ jsx(
              "div",
              {
                className: `${styles.btn} ${styles.playBtn}`,
                onClick: play
              }
            )),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${styles.btn} ${styles.nextBtn}`,
                onClick: nextTrack
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${styles.btn} ${styles.volumeBtn}`,
              onClick: toggleVolume
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: isWave ? "block" : "none" }, children: containerSize.width > 0 && /* @__PURE__ */ jsx(
          SiriWaveComponent,
          {
            color: "white",
            speed: 0.03,
            amplitude: 0.5,
            width: containerSize.width,
            height: containerSize.height
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: isPlaylist || volumeVisible ? "none" : "block"
            },
            className: styles.waveform,
            onClick: waveformClick
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: styles.barProgres,
            style: {
              display: isBar ? "block" : "none",
              width: `${containerSize.width}px`
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { ref: progressRef, className: styles.progress }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: styles.playlist,
            onClick: playlistBtn2,
            style: { display: isPlaylist ? "block" : "none" },
            children: /* @__PURE__ */ jsx("div", { className: styles.list, children: playlist2.map((song, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: `${styles.list_song} ${currentTrackIndex === index ? styles.list_song_playing : ""}`,
                onClick: () => changeTrack(index),
                children: [
                  index + 1,
                  ". ",
                  song.title
                ]
              },
              index
            )) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: volumeRef,
            className: `${volumeVisible ? styles.fadein : styles.fadeout} ${styles.volume}`,
            style: { display: volumeVisible ? "block" : "none" },
            onClick: toggleVolume,
            onMouseUp: volumeMouseUp,
            onTouchEnd: volumeMouseUp,
            onMouseMove: handleMove,
            onTouchMove: handleMove,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: barFullRef,
                  className: `${styles.barFull} ${styles.bar}`
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: barEmptyRef,
                  className: `${styles.barEmpty} ${styles.bar}`,
                  onClick: barEmpty2
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  ref: sliderBtnRef,
                  className: styles.sliderBtn,
                  onTouchStart: sliderBtn2,
                  onMouseDown: sliderBtn2
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const MediaCarousel = ({
  media,
  autoPlay = true,
  autoPlayTime = 0,
  startIndex = 0,
  onClose
}) => {
  var _a;
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex > 0 ? prevIndex - 1 : media.length - 1
    );
  };
  const startSlideShow = () => {
    return;
  };
  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex < media.length - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    if (autoPlay && autoPlayTime > 0) {
      timeoutRef.current = setTimeout(goToNext, autoPlayTime);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [currentIndex, autoPlay, autoPlayTime]);
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);
  const renderMediaItem = (item) => {
    switch (item.type) {
      case "video":
        return /* @__PURE__ */ jsx(
          "video",
          {
            controls: true,
            src: `/user-file/${item.url}`,
            className: "w-full h-auto"
          }
        );
      case "music":
        return /* @__PURE__ */ jsxs("audio", { controls: true, className: "w-full", children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              src: `/user-file/${item.url}`,
              type: "audio/mp3"
            }
          ),
          "Your browser does not support the audio element."
        ] });
      case "image":
      default:
        return /* @__PURE__ */ jsx(
          "img",
          {
            src: `/user-file/${item.url}`,
            alt: item.title || "media social",
            className: ""
          }
        );
    }
  };
  const renderMediaAudio = (media2) => {
    const [containerSize, setContainerSize] = useState({
      width: 0,
      height: 0
    });
    useEffect(() => {
      const updateSize = () => {
        if (containerRef.current) {
          setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight
          });
        }
      };
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    const playlist2 = media2.map((item) => ({
      src: `/user-file/${item.url}`,
      title: item.title
    }));
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: `absolute audio_player_canvas !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`,
        children: /* @__PURE__ */ jsx(
          AudioPlayer,
          {
            playlist: playlist2,
            currentIndex: startIndex,
            widthCanvas: containerSize.width,
            heightCanvas: containerSize.height
          }
        )
      }
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "fixed top-24 right-12 z-50 p-2 m-2 text-white bg-red-600 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center",
        children: "X"
      }
    ),
    ((_a = media[currentIndex]) == null ? void 0 : _a.type) === "image" ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "large-image flex justify-content-center align-items-center", children: [
      media.map((item, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
          style: { maxWidth: "90vh" },
          children: renderMediaItem(item)
        },
        item.id
      )),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute bottom-12 inset-x-0 mx-auto rounded-lg p-4 flex items-center justify-center",
          style: { maxWidth: "600px" },
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: goToPrevious,
                className: "z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:left-1",
                children: "<"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: startSlideShow,
                className: "p-2 text-black bg-white bg-opacity-75 rounded-lg flex items-center justify-center text-sm md:w-32 md:text-base",
                children: "Auto"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: goToNext,
                className: "z-10 p-2 text-black bg-white bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center md:absolute md:right-1",
                children: ">"
              }
            )
          ]
        }
      )
    ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "large-image flex justify-content-center align-items-center", children: renderMediaAudio(media) }) })
  ] });
};
const MediaCarousel$1 = MediaCarousel;
function FileViewList({ files }) {
  const [allFiles, setAllFiles] = useState([]);
  const [filteredFiles, setАilteredFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const mergedFiles = [
      ...files == null ? void 0 : files.public,
      ...files == null ? void 0 : files.private,
      ...files == null ? void 0 : files.friends
    ];
    setAllFiles(mergedFiles);
  }, [files]);
  const handleOpenModal = (selectedFile, index) => {
    if (selectedFile) {
      const filteredFiles2 = allFiles.filter(
        (file) => file.type === selectedFile.type
      );
      const globalIndex = filteredFiles2.findIndex(
        (file) => file.id === selectedFile.id
      );
      setCurrentFileIndex(globalIndex);
      setАilteredFiles(filteredFiles2);
      setIsModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState(
    "all"
  );
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "post", children: /* @__PURE__ */ jsxs("div", { className: "post-header", children: [
      /* @__PURE__ */ jsx("div", { className: "text", children: /* @__PURE__ */ jsx("p", { className: "bold", children: "File" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsx(
        SelectButton,
        {
          size: "small",
          style: {
            backgroundColor: "lightblue"
          },
          options: [
            { label: "All", value: "all" },
            { label: "Image", value: "image" },
            { label: "Video", value: "video" },
            { label: "Music", value: "music" }
          ],
          onChange: handleSelectChange
        }
      ) })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsx(
      MediaCarousel$1,
      {
        media: filteredFiles,
        startIndex: currentFileIndex,
        onClose: handleCloseModal
      }
    ),
    /* @__PURE__ */ jsx(
      FileCategoryView,
      {
        title: "Private",
        files: files.private.filter(
          (file) => selectedOption === "all" || file.type === selectedOption
        ),
        onFileClick: handleOpenModal
      }
    ),
    /* @__PURE__ */ jsx(
      FileCategoryView,
      {
        title: "Friends",
        files: files.friends.filter(
          (file) => selectedOption === "all" || file.type === selectedOption
        ),
        onFileClick: handleOpenModal
      }
    ),
    /* @__PURE__ */ jsx(
      FileCategoryView,
      {
        title: "Public",
        files: files.public.filter(
          (file) => selectedOption === "all" || file.type === selectedOption
        ),
        onFileClick: handleOpenModal
      }
    )
  ] });
}
export {
  FileViewList as default
};
