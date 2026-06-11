const targetDate = new Date("July 18, 2026 15:00:00");

function updateCountdown() {
 const now = new Date();
 const diff = targetDate.getTime() - now.getTime();
 if (diff <= 0) {
   document.getElementById("countdown").innerHTML = "The Ranga Pravesha has begun!";
   return;
 }
 const days=Math.floor(diff/(1000*60*60*24));
 const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
 const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
 const seconds=Math.floor((diff%(1000*60))/1000);

 document.getElementById("countdown").innerHTML = `
 <div class="countdown-box"><span>${days}</span><small>Days</small></div>
 <div class="countdown-box"><span>${hours}</span><small>Hours</small></div>
 <div class="countdown-box"><span>${minutes}</span><small>Minutes</small></div>
 <div class="countdown-box"><span>${seconds}</span><small>Seconds</small></div>`;
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

    if (!image) return;

    setInterval(() => {

        currentGalleryImage++;

        if (currentGalleryImage >= galleryImages.length) {
            currentGalleryImage = 0;
        }

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = galleryImages[currentGalleryImage];

            image.style.opacity = "1";

        }, 300);

    }, 4000);

});