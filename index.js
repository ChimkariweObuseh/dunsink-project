const track = document.getElementById('image-track');

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.prevPercentage;
}

window.onmousemove = e => {
  if (track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);

  track.dataset.percentage = nextPercentage;
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
  
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${nextPercentage + 100}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      
  if (!track.dataset.mouseDownAt === "0") {
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);

  track.dataset.percentage = nextPercentage;
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
  
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${nextPercentage + 100}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
    } else {
      // swiped right
      
  if (!track.dataset.mouseDownAt === "0") {
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * 100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);

  track.dataset.percentage = nextPercentage;
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
  
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${nextPercentage + 100}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
    }
  }
 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};
