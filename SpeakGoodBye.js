(function(window) {
    var speakWord = "Goodbye: ";
    var byeSpeaker = {
        speak: function(name) {
            console.log(speakWord + name + "!");
            }
    };
    window.byeSpeaker = byeSpeaker;
})(window);
