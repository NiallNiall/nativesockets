# Native Sockets

A quick app playing around with websockets and midi from Traktor.

Needs Traktor obviously, and Node

Instructions below are a bit sketchy, so drop me a line if you need help

### Command Line Steps
* Install node
* Clone this repo
* npm install
* npm start (See below for arguments)
* Starts a server at localhost 3000

### Traktor Installation Steps
The script is waiting to receive a Midi message from the BeatPhase in Traktor
* Select a virtual MIDI device named Phonode Midi
* Add out > Deck Common > Beat Phase
* Send PitchBend to Ch.11 Pitchbend

## Versions
If no version is recognised, will start the basic one.

### npm start standard
Starts the Basic flashing version

### npm start three
Starts a 3D version

### npm start words
Starts a word Version

### npm start drawings
Starts a drawing Version