/* ==================================
Callback Hell | Pyramid of Doom
================================== */
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log("Loaded Script with src:", src);
        callback(null, src);
    };
    script.onerror = () => {
        console.log("Error in Loading Script with src:", src);
        callback(new Error("Failed to load script"), src);
    }
    document.head.appendChild(script);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", function checkFunc(error, src) {
        if (error) {
            console.log(error);
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
            if (error) {
                console.log(error);
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", function checkFunc(error, src) {
                if (error) {
                    console.log(error);
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", function checkFunc(error, src) {
                        if (error) {
                            console.log(error);
                            return;
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
                            if (error) {
                                console.log(error);
                                return;
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", function checkFunc(error, src) {
                                if (error) {
                                    console.log(error);
                                    return;
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
                                    if (error) {
                                        console.log(error);
                                        return;
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", function checkFunc(error, src) {
                                        if (error) {
                                            console.log(error);
                                            return;
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function checkFunc(error, src) {
                                            if (error) {
                                                console.log(error);
                                                return;
                                            }
                                            console.log("Script Loaded Successfully: " + src);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            })
        });
    });
});