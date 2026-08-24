function openFullscreen() {
    const iframe = document.getElementById("the-iframe");
    
    if (iframe.requestFullscreen) {
        // Correct object wrapper layout for modern browsers
        iframe.requestFullscreen({ keyboardLock: "browser" })
        .catch(err => {
            // Fallback if the security settings block keyboard lock entirely
            console.warn("Keyboard lock failed, launching standard fullscreen instead", err);
            iframe.requestFullscreen();
        });
    } else if (iframe.webkitRequestFullscreen) {
        // Safari legacy wrapper fallback layout
        try {
        iframe.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } catch (e) {
        iframe.webkitRequestFullscreen(); // Normal fullscreen fallback
        }
    }
}