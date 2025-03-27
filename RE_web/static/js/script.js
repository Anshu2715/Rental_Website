document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully!");

  // Add smooth hover effect to navbar links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });

});
let hasScrolled = false;
window.addEventListener("scroll", function () {
  if (!hasScrolled) {
    hasScrolled = true;
    setTimeout(showPopup, 2000);
  }
});
function showPopup() {
  document.getElementById("popupBox").style.display = "block";
  document.getElementById("popupOverlay").style.display = "block";
  document.body.classList.add("no-scroll");
}
function closePopup() {
  document.getElementById("popupBox").style.display = "none";
  document.getElementById("popupOverlay").style.display = "none";
  document.body.classList.remove("no-scroll");
}

function searchRooms() {
  // Function to handle search functionality
  const location = document.getElementById('location').value;
  const priceRange = document.getElementById('priceRange').value;
  const bhk = document.getElementById('bhk').value;
  alert(`Searching for rooms in ${location} with a price of ₹${priceRange} and ${bhk} BHK.`);
}
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

setInterval(() => {
    plusSlides(1);
}, 5000); 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a, .social-icon").forEach(item => {
      item.addEventListener("mouseover", () => {
          item.style.transform = "translateX(-5px)";
      });
      item.addEventListener("mouseout", () => {
          item.style.transform = "translateX(0)";
      });
  });
});


