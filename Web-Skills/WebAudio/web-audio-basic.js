(function () {
    'use strict';
    const URL = 'https://cdn.xgqfrms.xyz/mp3/test.mp3';
    const context = new AudioContext();
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(play);
    function play(audioBuffer) {
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    }
    console.log("https is slowly, but promise ensure it works!");
}());