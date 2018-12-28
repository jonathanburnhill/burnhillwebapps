document.addEventListener('DOMContentLoaded', function(event) {
    if('serviceWorker' in navigator) {
        window.addEventListener('load',() => {
            navigator.serviceWorker.register('./sw.js').then(registration => {
                console.log(`Service worker Registerd with scope ${registration}`);
            });
        });
    }
});

