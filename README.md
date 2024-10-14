Maps Effect
===========

This is a simple Manifest v3 extension that plays the galaxy map audio from *Mass Effect* when interacting with Google Maps.  It's just a little experiment that is not to be taken seriously.

Sound only can be played once the user clicks somewhere on the page because modern browsers require initial interaction in order for audio to begin playing automatically.

## Prerequisites

You must have the `yt-dlp` command installed as well as a POSIX shell like `Bash`.

## Installation

`cd` into the directory of this readme file and run the `make` command to download the audio and create a `dist/` directory where the unpacked extension lives.

This is an unsigned extension, meaning that it must be loaded as a *temporary* add-on unless you choose to publish it on one of the extension stores.

### Chrome

Visit [chrome://extensions/](chrome://extensions/), toggle on "Developer mode", click the "Load unpacked" button, select the `dist/` directory.

### Firefox

Visit [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox), click "Load Temporary Add-on", and select the `dist/manifest.json` file.

## License

See [LICENSE.txt](LICENSE.txt).
