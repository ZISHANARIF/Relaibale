function stickyHeader() {
    if ($('.mid-bar').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.mid-bar').addClass('stricky-fixed');
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.mid-bar').removeClass('stricky-fixed');
        }
    };
}

jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader();
    })(jQuery);
});

if ($(".navigation").length) {
    $(".navigation .navbar button").on("click", function () {
        $(".navigation .menu").slideToggle();
        $(this).toggleClass('open');
        return false;
    });
    $(".navigation .ls-submenu").children("a").append(function () {
        return '<button class="dropdown-expander"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g  stroke-width="1"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g > <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="currentColor"></path> </g></svg></button>';
    });
}

if (document.documentElement.clientWidth < 1023) {
    $(".navigation .menu .dropdown-expander").on("click", function () {
        $(this).parent().parent().children(".ls-dropdown").slideToggle();
        console.log($(this).parents("li"));
        console.log($(this).parents().children(".dropdown-expander").toggleClass("rotated"));
        return false
    })
    $(document).click(function (e) {
        if (!$(e.target).closest('.navigation .navbar button').length) {
            $('.navigation .menu').stop(true).slideUp();
            $(".navigation .navbar button").removeClass('open');

        }
    });
}

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});

wow.init();





        // **************************faq section code*********************************************
  document.addEventListener('DOMContentLoaded', function() {
            const leftSection = document.getElementById('leftSection');
            const faqItems = document.querySelectorAll('.faq-item');
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            let openCount = 0;
            const baseHeight = 400;
            const expansionHeight = 80;
             

            function updateLeftSectionHeight() {
                const newHeight = baseHeight + (openCount * expansionHeight);
                leftSection.style.minHeight = newHeight + 'px';
            }

            faqQuestions.forEach((question, index) => {
                question.addEventListener('click', function() {
                    const faqItem = this.parentNode;
                    const isActive = faqItem.classList.contains('active');

                    // Close all other FAQ items first
                    faqItems.forEach(item => {
                        if (item !== faqItem && item.classList.contains('active')) {
                            item.classList.remove('active');
                            openCount--;
                        }
                    });

                    // Toggle current item
                    if (isActive) {
                        faqItem.classList.remove('active');
                        openCount--;
                    } else {
                        faqItem.classList.add('active');
                        openCount++;
                    }

                    updateLeftSectionHeight();
                });
            });

            // Set initial height
            updateLeftSectionHeight();
        });


         // *********************************************new faq section code page********************************

 document.addEventListener('DOMContentLoaded', function () {
            const customAccordions = document.querySelectorAll('.custom-accordion');

            customAccordions.forEach(accordion => {
                const questions = accordion.querySelectorAll('.custom-accordion-question');
                
                questions.forEach(question => {
                    question.addEventListener('click', function () {
                        const parentItem = this.closest('.custom-accordion-item');

                        // This is your logic: close others in the same accordion
                        accordion.querySelectorAll('.custom-accordion-item').forEach(item => {
                            if (item !== parentItem) {
                                item.classList.remove('active');
                            }
                        });
                        
                        // Toggle the clicked item
                        parentItem.classList.toggle('active');
                    });
                });
            });
        });


      

     
     

    // ******************************progress bar scroll top js*****************************

const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show button when user scrolls down 200px
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };

    // Scroll to top smoothly
    scrollTopBtn.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };


document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".unique-star-rating").forEach(function (container) {

        const stars = container.querySelectorAll(".unique-starR");
        const inputField = container.querySelector("#rating-value");

        stars.forEach((star, index) => {

            star.addEventListener("click", function () {
                let current = star.getAttribute("data-state") || "empty"; 
                let starValue = index + 1;
                let rating = 0;

                // cycle empty → half → full → empty
                if (current === "empty") {
                    star.setAttribute("data-state", "half");
                    rating = starValue - 0.5;
                } 
                else if (current === "half") {
                    star.setAttribute("data-state", "full");
                    rating = starValue;
                } 
                else {
                    star.setAttribute("data-state", "empty");
                    rating = starValue - 1;
                }

                updateStars(stars);

                inputField.value = rating;
            });
        });

    });

    // Update visual stars based on their data-state
    function updateStars(stars) {
        stars.forEach((star, index) => {
            let state = star.getAttribute("data-state") || "empty";
            star.classList.remove("full", "half");

            if (state === "full") {
                star.classList.add("full");
            } 
            else if (state === "half") {
                star.classList.add("half");
            } 
        });
    }
});





// matrix section code/********************************** */
  document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('matrixSection');
            const counters = document.querySelectorAll('.counter');
            const progressBars = document.querySelectorAll('.progress-bar');
            
            let activated = false;

            const animateStats = () => {
                // 1. Animate Numbers
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps approx

                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });

                // 2. Animate Circular Progress Bars
                progressBars.forEach(bar => {
                    const percent = +bar.getAttribute('data-percent');
                    // Circumference is 2 * PI * r (45) approx 283
                    const circumference = 283; 
                    const offset = circumference - (percent / 100) * circumference;
                    
                    bar.style.strokeDashoffset = offset;
                });
            };

            // Intersection Observer to trigger on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !activated) {
                        animateStats();
                        activated = true; // Ensure it runs only once
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% visible

            observer.observe(section);
        });


     



  // *****************testimonials section code**************************



    var swiper = new Swiper(".mySwiper", {

      // Your requested config

      loop: true,

      autoplay: {

        delay: 3500,

        disableOnInteraction: false,

      },

      navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

      },

      

      // Added based on your "2 card show in one row" request

      slidesPerView: 1, // 1 slide on mobile

      spaceBetween: 30, // 30px gap

      breakpoints: {

        // when window width is >= 768px (tablets)

        768: {

          slidesPerView: 3, // 2 slides on desktop/tablet

          spaceBetween: 40

        }

      }

    });
    
    //******************************** */ review section code******************



document.addEventListener("DOMContentLoaded", function () {

  const stars = document.querySelectorAll(".unique-star");



  const hidden = document.getElementById("rating-value");



  let currentStarIndex = -1; // Tracks which star we're working with



  let clickCount = 0; // Tracks clicks on the current star



  function clearAllStars() {

    stars.forEach((star) => {

      star.classList.remove("half", "full");

    });

  }



  function fillStarsUpTo(index, state) {

    clearAllStars();



    stars.forEach((star, i) => {

      if (i < index) {

        star.classList.add("full");

      } else if (i === index) {

        star.classList.add(state);

      }

    });

  }



  stars.forEach((star, index) => {

    star.addEventListener("click", () => {

      // If clicking on a different star, reset



      if (currentStarIndex !== index) {

        currentStarIndex = index;



        clickCount = 1;



        fillStarsUpTo(index, "half");



        hidden.value = index + 0.5;

      } else {

        // Clicking on the same star



        clickCount++;



        if (clickCount === 2) {

          // Second click - fill completely



          fillStarsUpTo(index, "full");



          hidden.value = index + 1;

        } else if (clickCount >= 3) {

          // Third click - reset to half



          clickCount = 1;



          fillStarsUpTo(index, "half");



          hidden.value = index + 0.5;

        }

      }

    });

  });

});






// read morw toggle button section code************************************************************

        document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".aboutind");

  // Create toggle button
  const toggle = document.createElement("span");
  toggle.className = "read-toggle";
  toggle.textContent = "Read More...";

  // Insert toggle after content
  content.after(toggle);

  // Check if content needs toggle (if overflowing)
  const collapsedHeight = 530; // same as CSS max-height
  if (content.scrollHeight <= collapsedHeight + 10) {
    toggle.style.display = "none"; // hide toggle if not overflowing
    content.classList.add("expanded"); // remove fade effect
  }

  // Toggle expand/collapse
  toggle.addEventListener("click", () => {
    content.classList.toggle("expanded");
    toggle.textContent = content.classList.contains("expanded")
      ? "Read Less"
      : "Read More...";
  });
});
    




// ******************india map section code*******************
// ADD YOUR CITY LIST HERE
const citiesToHighlight = [
 { name: "India", lat: 20.5937, lng: 78.9629 },
{ name: "United States", lat: 37.0902, lng: -95.7129 },
{ name: "Canada", lat: 56.1304, lng: -106.3468 },

{ name: "Brazil", lat: -14.2350, lng: -51.9253 },
{ name: "Argentina", lat: -38.4161, lng: -63.6167 },

{ name: "United Kingdom", lat: 55.3781, lng: -3.4360 },
{ name: "France", lat: 46.2276, lng: 2.2137 },
{ name: "Russia", lat: 61.5240, lng: 105.3188 },

{ name: "South Africa", lat: -30.5595, lng: 22.9375 },
{ name: "Egypt", lat: 26.8206, lng: 30.8025 },
{ name: "Nigeria", lat: 9.0820, lng: 8.6753 },

{ name: "Australia", lat: -25.2744, lng: 133.7751 },
{ name: "New Zealand", lat: -40.9006, lng: 174.8860 },

{ name: "China", lat: 35.8617, lng: 104.1954 },
{ name: "Japan", lat: 36.2048, lng: 138.2529 },
{ name: "Indonesia", lat: -0.7893, lng: 113.9213 },

{ name: "Saudi Arabia", lat: 23.8859, lng: 45.0792 },
{ name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 },

];

// MAP INIT WITH ALL ZOOM DISABLED
var map = L.map('map', {
  zoomControl: false,       // hides + âˆ’ buttons
  scrollWheelZoom: false,  // disables mouse wheel zoom
  doubleClickZoom: false,  // disables double click zoom
  touchZoom: false,        // disables pinch zoom on mobile
  boxZoom: false,          // disables shift+drag zoom
  keyboard: false,         // disables keyboard zoom
  dragging: true           // âœ… keep dragging enabled
}).setView([22.9734, 78.6569], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let markers = [];
let bounds = [];



// AUTO HIGHLIGHT FUNCTION
function autoHighlightCities() {
  citiesToHighlight.forEach(city => {

    // Blinking Marker
    let marker = L.marker([city.lat, city.lng], {
      icon: L.divIcon({
        className: "",
        html: '<div class="blinking-marker"></div>',
        iconSize: [20, 20]
      })
    }).addTo(map);

    //Hover Popup
    let hoverPopup;

    marker.on("mouseover", () => {
      hoverPopup = setTimeout(() => {
        L.popup({ offset: [0, -10], closeButton: false })
          .setLatLng([city.lat, city.lng])
          .setContent(`<b>${city.name}</b>`)
          .openOn(map);
      }, 150);
    });

    marker.on("mouseout", () => {
      clearTimeout(hoverPopup);
      map.closePopup();
    });

    markers.push(marker);
    bounds.push([city.lat, city.lng]);
  });

  // Auto fit but still NO ZOOM interaction allowed
  map.fitBounds(bounds, { padding: [20, 20] });
}

window.onload = autoHighlightCities;