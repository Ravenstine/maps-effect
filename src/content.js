const audio = new Audio(chrome.runtime.getURL("assets/audio.mp3"));

audio.loop = true;

function onInteract () {
  audio.play()
    .catch((error) => {
      console.error("Audio playback failed:", error);
    });
}

window.addEventListener("click", onInteract, {
  capture: true,
  once: true,
  passive: true,
});

onInteract();