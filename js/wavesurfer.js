"use strict";
import WaveSurfer from "https://cdn.jsdelivr.net/npm/wavesurfer.js@7/dist/wavesurfer.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const timer = document.getElementById("timer");
  let isPlaying = false;

  const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#98A5B4",
    progressColor: "#2A4566",
    barWidth: 2,
    responsive: true,
    height: 40,
    barRadius: 4,
    cursorColor: "null",
    url: "./public/audios/Myuu-TenderRemains.mp3",
  });

  wavesurfer.on("ready", () => {
    timer.textContent = `${formatTime(wavesurfer.getDuration())}`;
  });

  wavesurfer.on("audioprocess", () => {
    const timeLeft = wavesurfer.getDuration() - wavesurfer.getCurrentTime();
    timer.textContent = `${formatTime(timeLeft)}`;
  });

  wavesurfer.on("interaction", () => {
    wavesurfer.play();
  });

  wavesurfer.on("finish", () => {
    isPlaying = false;
    playBtn.src = `./public/img/pictogrammes/play.svg`;
    wavesurfer.stop();
    timer.textContent = `0:00`;
  });

  playBtn.addEventListener("click", () => {
    wavesurfer.playPause();
    isPlaying = !isPlaying;
    playBtn.src = `./public/img/pictogrammes/${
      isPlaying ? "pause" : "play"
    }.svg`;
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }
});
