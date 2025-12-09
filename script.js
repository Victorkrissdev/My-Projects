document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    const marqueeText = document.getElementById('marqueeText');
    const marqueeWidth = marqueeText.offsetWidth;
    const containerWidth = marquee.parentElement.offsetWidth;

    let currentPosition = containerWidth;

    function scrollMarquee() {
        if (currentPosition < -marqueeWidth) {
            currentPosition = containerWidth;
        } else {
            currentPosition -= 3;
        }
        marquee.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
});


// Toggle for Clubs and Activities
document.getElementById("toggle-clubs").addEventListener("click", function() {
  const sublist = document.getElementById("clubs-sublist");
  const toggleIcon = this;

  if (sublist.style.display === "block") {
    sublist.style.display = "none";
    toggleIcon.textContent = "+";
  } else {
    sublist.style.display = "block";
    toggleIcon.textContent = "-";
  }
});

// Toggle for Living in Community
document.getElementById("toggle-community").addEventListener("click", function() {
  const sublist = document.getElementById("community-sublist");
  const toggleIcon = this;

  if (sublist.style.display === "block") {
    sublist.style.display = "none";
    toggleIcon.textContent = "+";
  } else {
    sublist.style.display = "block";
    toggleIcon.textContent = "-";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-menu');
  const card = document.getElementById('student-life-card');

  toggleButton.addEventListener('click', function() {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
      toggleButton.textContent = 'Hide Menu'; // Change button text when card is shown
    } else {
      card.classList.add('hidden');
      toggleButton.textContent = 'Menu here'; // Change button text when card is hidden
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-menu');
  const card = document.getElementById('student-life-card');

  // Initial state: card hidden on small screens
  if (window.innerWidth <= 768) {
    card.classList.add('hidden');
  }

  // Toggle card visibility on button click
  toggleButton.addEventListener('click', function() {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
      toggleButton.textContent = 'Hide Menu'; // Change button text when card is shown
    } else {
      card.classList.add('hidden');
      toggleButton.textContent = 'Menu here'; // Change button text when card is hidden
    }
  });

  // Adjust card visibility on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      card.classList.add('hidden');
      toggleButton.textContent = 'Menu here'; // Reset button text on resize
    } else {
      card.classList.remove('hidden');
    }
  });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}






