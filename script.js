
const targetDate = new Date("July 18, 2026 15:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML =
            "The Ranga Pravesha has begun!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="countdown-box">
            <span>${days}</span>
            <small>Days</small>
        </div>
        <div class="countdown-box">
            <span>${hours}</span>
            <small>Hours</small>
        </div>
        <div class="countdown-box">
            <span>${minutes}</span>
            <small>Minutes</small>
        </div>
        <div class="countdown-box">
            <span>${seconds}</span>
            <small>Seconds</small>
        </div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
