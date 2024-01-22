const $ = document;
const navbarToggler = $.getElementById("navbarToggler");
const navbarOverlay = $.querySelector(".navbar__overlay");

navbarToggler.addEventListener("click", function(ev) {
    navbarOverlay.classList.toggle("navbar__overlay--hidden");
    if (ev.target.getAttribute("area-expanded") === "true") {
        ev.target.setAttribute("area-expanded", "false");
        ev.target.firstElementChild.setAttribute("src", "images/icon-hamburger.svg");
        $.body.style.overflow = "";
    } else {
        ev.target.setAttribute("area-expanded", "true");
        ev.target.firstElementChild.setAttribute("src", "images/icon-close.svg");
        $.body.style.overflow = "hidden";
    }
})

navbarOverlay.addEventListener("touchstart", function() {
    navbarToggler.click();
})


// slider

const sliderTrack = $.querySelector(".testimonial_slider");
const slides = Array.from(sliderTrack.children);
const navDots = $.querySelector(".testimonial__navDots");
const dots = Array.from(navDots.children);


// 
const setFlexProperty = (Index) => {
    dots.forEach(dot => {
        dot.classList.remove("current-slide");
    })

    if (Index === 0) {
        sliderTrack.style.justifyContent = "start";
        dots[0].classList.add("current-slide");
    } else if (Index === 1) {
        sliderTrack.style.justifyContent = "center";
        dots[1].classList.add("current-slide");
    } else {
        sliderTrack.style.justifyContent = "end";
        dots[2].classList.add("current-slide");
    }
};

// when click on cards change flex-justify-content
slides.forEach(slide => {
    slide.addEventListener("click", (ev) => {
        const cardTarget = ev.target.closest('article');
        if (!cardTarget) return;

        const slideIndex = slides.findIndex(element => element === cardTarget);

        setFlexProperty(slideIndex);
    })
})
// when click on dots change flex-justify-content
dots.forEach(dot => {
    dot.addEventListener("click", (ev) => {
        const dotTarget = ev.target;
        const dotIndex = dots.findIndex(element => element === dotTarget);
        setFlexProperty(dotIndex);
    })
})
