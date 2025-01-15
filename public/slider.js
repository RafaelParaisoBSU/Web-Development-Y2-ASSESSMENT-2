// Initialize the current index of the slide and the total number of slides
let currentIndex = 1;
let totalSlides = 7;

// Function to update the active slide based on the current index
const updateActiveSlide = () => {
    // Select all elements with the class 'title'
    document.querySelectorAll('.title').forEach((el, index) => {
        // If the element's index matches the current index, add the 'active' class
        if (index === currentIndex) {
            el.classList.add("active");
        } else {
            // Otherwise, remove the 'active' class
            el.classList.remove("active");
        }
    });
};

// Function to handle the slider movement
const handleSlider = () => {
    // Increment the current index or reset to 1 if it exceeds total slides
    if (currentIndex < totalSlides) {
        currentIndex++;
    } else {
        currentIndex = 1;
    }

    // Animate the slide titles using GSAP
    gsap.to(".slide-titles", {
        onStart: () => {
            // Delay the update of the active slide
            setTimeout(() => {
                updateActiveSlide();
            }, 100);

            // Update the images for the current slide
            updateImages(currentIndex);
        },
        // Move the slide titles horizontally based on the current index
        x: `-${(currentIndex - 1) * 11.1111}%`,
        duration: 2,
        ease: "power4.out",
    });
};

// Function to update images for the current slide
const updateImages = (imgNumber) => {
    // Construct the image source path
    const imgSrc = `./assets/img${imgNumber}.jpg`;
    // Create new image elements for the top and bottom images
    const imgTop = document.createElement("img");
    const imgBottom = document.createElement("img");

    // Set the source for both images
    imgTop.src = imgSrc;
    imgBottom.src = imgSrc;

    // Set initial styles for clipping and scaling
    imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    imgTop.style.transform = "scale(2)";
    imgBottom.style.transform = "scale(2)";

    // Append the images to their respective containers
    document.querySelector(".img-top").appendChild(imgTop);
    document.querySelector(".img-bottom").appendChild(imgBottom);

    // Animate the images to reveal them with a scaling effect
    gsap.to([imgTop, imgBottom], {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        transform: "scale(1)",
        duration: 2,
        ease: "power4.out",
        stagger: 0.15,
        onComplete: trimExcessImages
    });
};

// Function to remove excess images from the containers
const trimExcessImages = () => {
    const selectors = [".img-top", ".img-bottom"];

    selectors.forEach((selector) => {
        const container = document.querySelector(selector);
        if (container) {
            const images = Array.from(container.querySelectorAll("img"));
            const excessCount = images.length - 5;

            // Remove excess images if there are more than 5
            if (excessCount > 0) {
                images.slice(0, excessCount).forEach((image) => {
                    container.removeChild(image);
                });
            }
        }
    });
};

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.querySelector('.slider');

    // Add a click event listener to the slider content area
    contentArea.addEventListener("click", (event) => {
        // Check if the click is within the content area
        if (event.target.closest('.slider')) {
            handleSlider();
        }
    });

    // Initialize the first slide's images and active state
    updateImages(1);
    updateActiveSlide();
});