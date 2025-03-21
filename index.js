const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const heroContent = document.querySelectorAll(".hero-content-container");

let currentIndex = 0;
let startX = 0;
let isDragging = false;

// Function to update the active slide and navigation dot
const updateSlider = (index) => {
  btns.forEach((btn) => btn.classList.remove("active"));
  slides.forEach((slide) => slide.classList.remove("active"));
  heroContent.forEach((content) => content.classList.remove("active"));

  btns[index].classList.add("active");
  slides[index].classList.add("active");
  heroContent[index].classList.add("active");
};

// Click navigation for dots
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
});

// Swipe functionality
const slider = document.getElementById("hero");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  // Swipe threshold to detect left or right swipe
  if (diffX > 50) {
    // Swipe left
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider(currentIndex);
    }
    isDragging = false; // End swipe
  } else if (diffX < -50) {
    // Swipe right
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider(currentIndex);
    }
    isDragging = false;
  }
});

slider.addEventListener("touchend", () => {
  isDragging = false;
});


/* ARITCLE */
function navigateToContent(location) {
  // This will open the URL in a new tab
  window.open(`/HTML/articlecontent.html?location=${location}`, '_blank');
}

/* CULTURE upto COMMUNITY */
// Swipe Functionality
const scrollContainers = document.querySelectorAll(".culture-scroll-container");

scrollContainers.forEach((slider) => {
  let startX = 0;
  let isDragging = false;
  let scrollLeft = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = slider.scrollLeft;
    isDragging = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    slider.scrollLeft = scrollLeft + diffX;
  });

  slider.addEventListener("touchend", () => {
    isDragging = false;
  });
});


/* TIPS slider */
{
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".tips-wrapper i");
const firstCardWidth = carousel.querySelector(".tips-card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


}
/* TIPS PopUp */
{
function showPopup(card) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

 
  const imgSrc = card.querySelector('img').src;
  const title = card.querySelector('img').alt;
  const description = card.querySelector('p').textContent;


  popupImg.src = imgSrc;
  popupTitle.textContent = title;
  popupDescription.textContent = description;

 
  popup.style.display = 'flex';
}


function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

};

/* COMMUNITY */
const communityData = [
  {
      author: "Mark Zuckerberg",
      quote: "My visit to Mt. Pinatubo was nothing short of extraordinary. The hike to the crater was challenging, but reaching the summit was absolutely worth it. Standing at the edge of the crater, the view of the emerald green lake nestled between rugged volcanic peaks was breathtaking. The surrounding landscapes, shaped by the 1991 eruption, were both humbling and awe-inspiring. It was a powerful reminder of nature's beauty and strength, and it gave me a sense of calm and appreciation for the raw, untouched beauty of the Philippines."
  },
  {
      author: "Jane Doe",
      quote: "Boracay exceeded all my expectations! The white sand beaches are like nothing I’ve ever seen—soft, powdery, and perfect for long walks. The crystal-clear water was great for swimming, and the sunsets were absolutely stunning. There’s so much to do, from island hopping and snorkeling to enjoying the lively beachfront bars. The food scene is amazing, with fresh seafood and tropical fruits everywhere. I especially loved the laid-back vibe, but it can get a bit crowded in some areas, especially around Station 2. The locals are incredibly friendly and welcoming, which made the whole experience even better. Boracay is a perfect mix of relaxation, adventure, and great food—definitely worth the visit!"
  },
  {
      author: "John Smith",
      quote: "Intramuros is a hidden gem in Manila! The historic Spanish-era architecture and cobblestone streets make you feel like you're stepping back in time. Highlights include Fort Santiago, San Agustin Church, and the Casa Manila Museum. It’s a peaceful place to explore, with plenty of history to take in. The local food spots inside are also great for a taste of Filipino cuisine. A must-visit for anyone interested in history and culture!"
  },
  {
      author: "Wil Ford",
      quote: "The Chocolate Hills in Bohol are truly one of nature's wonders! The view from the top is absolutely breathtaking, with over 1,200 green mounds scattered across the landscape. Visiting during the dry season is ideal, as the hills turn brown, just like chocolate, giving them their unique name. The climb to the viewing deck is a bit of a workout, but totally worth it for the panoramic view. The surrounding area is well-maintained and offers a peaceful vibe. There are also souvenir shops and local eateries nearby for a nice break after exploring. Overall, it was an unforgettable experience—highly recommend it to anyone visiting Bohol!"
  }
];

{
  let currentIndex = 0;

  const content = document.getElementById('content');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function updateContent(index) {
    const { author, quote } = communityData[index];
    content.innerHTML = `
      <h2 class="author">${author}</h2>
      <p class="quote">${quote}</p>
    `;

    // After content changes, scroll to the content smoothly
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + communityData.length) % communityData.length; 
    updateContent(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % communityData.length; 
    updateContent(currentIndex);
  });

  updateContent(currentIndex);
}

