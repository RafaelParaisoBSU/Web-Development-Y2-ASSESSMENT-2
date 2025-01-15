document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS library with custom settings
  AOS.init({
      // Global settings:
      disable: false, // Disable AOS on specific devices or conditions
      startEvent: 'DOMContentLoaded', // Event that triggers AOS initialization
      initClassName: 'aos-init', // Class added after AOS initialization
      animatedClassName: 'aos-animate', // Class added during animation
      useClassNames: false, // Add data-aos as classes on scroll if true
      disableMutationObserver: false, // Disable automatic mutation detection
      debounceDelay: 50, // Delay for debounce during window resize
      throttleDelay: 99, // Delay for throttle during page scroll

      // Element-specific settings:
      offset: 150, // Offset from trigger point in pixels
      delay: 200, // Delay before animation starts (0 to 3000 ms)
      duration: 1500, // Duration of animation (0 to 3000 ms)
      easing: 'ease', // Easing function for animations
      once: false, // Animate only once while scrolling down
      mirror: true, // Animate out while scrolling past elements
      anchorPlacement: 'top-bottom', // Position of element to trigger animation
  });
});

// Function to update the video source
function videoUrl(videoPath) {
  // Set the source of the video element to the provided path
  document.getElementById("vidslider").src = videoPath;
}