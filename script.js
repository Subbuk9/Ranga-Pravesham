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
    "images/DSC_3232.jpg",
    "images/DSC_3319.jpg",
    "images/DSC_3667.jpg",
    "images/DSC_3670.jpg",
    "images/DSC_3679.jpg",
    "images/DSC_3691.jpg",
    "images/DSC_3693.jpg",
    "images/DSC_3727.jpg",
    "images/DSC_3788.jpg",
    "images/DSC_3795.jpg",
    "images/DSC_3810.jpg",
    "images/DSC_3812.jpg",
    "images/DSC_3813.jpg",
    "images/DSC_3836.jpg",
    "images/DSC_3844.jpg",
    "images/DSC_3853.jpg",
    "images/DSC_3880.jpg",
    "images/DSC_4356.jpg",
    "images/DSC_4401.jpg",
    "images/DSC_4405.jpg",
    "images/DSC_4457.jpg",
    "images/DSC_4467.jpg",
    "images/DSC_4517.jpg",
    "images/DSC_4548.jpg",
    "images/DSC_4765.jpg",
    "images/DSC_4768.jpg",
    "images/DSC_4773.jpg",
    "images/DSC_4780.jpg",
    "images/DSC_4826.jpg",
    "images/DSC_4905.jpg",
    "images/DSC_4912.jpg"
];

let currentImage = 0;

const galleryImage =
    document.getElementById("galleryImage");

setInterval(() => {

    currentImage =
        (currentImage + 1) % galleryImages.length;

    galleryImage.src =
        galleryImages[currentImage];

}, 4000);