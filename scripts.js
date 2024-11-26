document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-right a");
  
    const handleScroll = () => {
      let currentSectionId = "";
  
      // Identify the current section in the viewport
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust offset for sticky header
        const sectionHeight = section.offsetHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });
  
      // Highlight the corresponding navigation link
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSectionId) {
          link.classList.add("active");
        }
      });
    };
  
    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);
  });


// Activate skill bar animation when in view
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-fill");
  
    const animateSkills = () => {
      skillBars.forEach((bar) => {
        const skillValue = bar.getAttribute("data-skill");
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Check if the skill bar is in view
        if (barTop < windowHeight - 100) {
          bar.style.width = skillValue + "%";
        }
      });
    };
  
    // Listen for scroll events
    window.addEventListener("scroll", animateSkills);
  });

// Smooth scrolling for header navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header .navbar a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute("href").substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Scroll smoothly to the target section
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for sticky header height if needed
            behavior: "smooth",
          });
        }
      });
    });
  });


// Modal Javascript Code
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalContent = modal.querySelector(".modal-content");
  const closeButton = modal.querySelector(".close-button");
  const projectItems = document.querySelectorAll(".project-item");

  // Open modal
  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex"; // Display the modal overlay
      document.body.classList.add("modal-open"); // Lock background scrolling

      // Start animation for modal-content
      modalContent.classList.remove("out");
      modalContent.classList.add("open");
    });
  });

  // Close modal
  closeButton.addEventListener("click", () => {
    // Start closing animation for modal-content
    modalContent.classList.remove("open");
    modalContent.classList.add("out");

    // Wait for animation to finish before hiding the modal
    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal overlay
      document.body.classList.remove("modal-open"); // Unlock background scrolling
    }, 500); // Match the animation duration
  });

  // Close modal when clicking outside the modal-content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modalContent.classList.remove("open");
      modalContent.classList.add("out");

      setTimeout(() => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }, 500);
    }
  });
});


// Modal dynamic content code
document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");
  const modal = document.getElementById("project-modal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const modalImage = modal.querySelector(".modal-image"); // Add an image to the modal if needed
  const closeButton = modal.querySelector(".close-button");

  // Open modal and populate content
  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");
      const image = item.getAttribute("data-image");

      // Update modal content
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      if (modalImage) {
        modalImage.src = image;
        modalImage.alt = title;
      }
    });
  });

  // Close modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});