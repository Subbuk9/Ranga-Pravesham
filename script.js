const targetDate = new Date("July 18, 2026 15:00:00");

function updateCountdown() {

    const now = new Date();

    const diff = targetDate - now;

    if(diff <= 0){

        document.getElementById("countdown").innerHTML =
        "<div class='time-value'>Event Started!</div>";

        return;
    }

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    const minutes =
        Math.floor((diff % (1000 * 60 * 60))
        / (1000 * 60));

    const seconds =
        Math.floor((diff % (1000 * 60))
        / 1000);

    document.getElementById("countdown").innerHTML = `

        <div class="time-block">
            <div class="time-value">${days}</div>
            <div class="time-label">Days</div>
        </div>

        <div class="time-separator">:</div>

        <div class="time-block">
            <div class="time-value">${hours}</div>
            <div class="time-label">Hours</div>
        </div>

        <div class="time-separator">:</div>

        <div class="time-block">
            <div class="time-value">${minutes}</div>
            <div class="time-label">Min</div>
        </div>

        <div class="time-separator">:</div>

        <div class="time-block">
            <div class="time-value">${seconds}</div>
            <div class="time-label">Sec</div>
        </div>
    `;
}

updateCountdown();

setInterval(updateCountdown,1000);

const galleryImages = [
    "images/DSC_3195.jpg",
    "images/DSC_3315.jpg",
    "images/DSC_3766.jpg",
    "images/DSC_3810.jpg",
    "images/DSC_3836.jpg",
    "images/DSC_3853.jpg",
    "images/DSC_4355.jpg",
    "images/DSC_4457.jpg",
    "images/DSC_4467.jpg",
    "images/DSC_4780.jpg",
    "images/DSC_4902.jpg",
    "images/DSC_4905.jpg",
    "images/DSC_4912.jpg"
];

let currentGalleryImage = 0;

window.addEventListener("load", () => {

    const image = document.getElementById("galleryImage");

    setInterval(() => {

        image.style.opacity = 0.25;

        setTimeout(() => {

            currentGalleryImage =
                (currentGalleryImage + 1) %
                galleryImages.length;

            image.src =
                galleryImages[currentGalleryImage];

        }, 600);

        setTimeout(() => {

            image.style.opacity = 1;

        }, 650);

    }, 5000);

});