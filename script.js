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

/* =====================================
GALLERY LIGHTBOX
===================================== */

const galleryItems =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

let currentIndex = 0;

/* Open Image */

galleryItems.forEach((img,index)=>{

```
img.addEventListener("click",()=>{

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImage.src = img.src;

});
```

});

/* Change Image */

function showImage(index){

```
if(index < 0){

    currentIndex =
        galleryItems.length - 1;

}
else if(index >= galleryItems.length){

    currentIndex = 0;

}
else{

    currentIndex = index;

}

lightboxImage.src =
    galleryItems[currentIndex].src;
```

}

/* Next */

nextBtn.addEventListener("click",()=>{

```
showImage(currentIndex + 1);
```

});

/* Previous */

prevBtn.addEventListener("click",()=>{

```
showImage(currentIndex - 1);
```

});

/* Close */

document
.querySelector(".close-lightbox")
.addEventListener("click",()=>{

```
lightbox.style.display = "none";
```

});

lightbox.addEventListener("click",(e)=>{

```
if(e.target === lightbox){

    lightbox.style.display = "none";

}
```

});

/* Keyboard */

document.addEventListener("keydown",(e)=>{

```
if(lightbox.style.display !== "flex")
    return;

if(e.key === "ArrowRight")
    showImage(currentIndex + 1);

if(e.key === "ArrowLeft")
    showImage(currentIndex - 1);

if(e.key === "Escape")
    lightbox.style.display = "none";
```

});
