const images = document.querySelectorAll(".slider img");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function changeBackground() {
  const imageSrc = images[currentIndex].src;
  document.body.style.backgroundImage = `url(${imageSrc})`;
  document.body.style.backgroundSize = "cover"; 
  document.body.style.backgroundPosition = "center"; 
}

// Function to show the next image
const nextImage = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    changeBackground();
  }
};

// Function to show the previous image
const previousImage = () => {
  if (currentIndex > 0) {
    currentIndex--;
    changeBackground();
  }
};

const handleImageClick = (event) => {
  const imageSrc = event.target.src;
  document.body.style.backgroundImage = `url(${imageSrc})`;
  document.body.style.backgroundSize = "cover"; 
  document.body.style.backgroundPosition = "center"; 

};
images.forEach((img) => {
    img.addEventListener("click", handleImageClick); 
  });

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", previousImage);

changeBackground();
