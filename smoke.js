const smokeContainer = document.getElementById("smoke-container");

let lastSmokeTime = 0;

document.addEventListener("mousemove", function(event) {

    const currentTime = Date.now();

    if (currentTime - lastSmokeTime < 40) {
        return;
    }

    lastSmokeTime = currentTime;

    const smoke = document.createElement("div");

    smoke.className = "smoke-particle";

    smoke.style.left = (event.clientX - 32) + "px";
    smoke.style.top = (event.clientY - 32) + "px";

    smokeContainer.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 1200);

});