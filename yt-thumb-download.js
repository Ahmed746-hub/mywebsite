
  async function downloadImage(url, filename) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      alert('❌ Failed to download thumbnail.');
    }
  }

  function getThumbnail() {
    const url = document.getElementById('videoUrl').value.trim();
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';

    const regex = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    if (match && match[1]) {
      const videoId = match[1];
      const largeImg = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const mediumImg = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

      thumbnailContainer.innerHTML = `
        <h3>Large Thumbnail</h3>
        <img src="${largeImg}" alt="Large YouTube Thumbnail" width="480" />
        <button onclick="downloadImage('${largeImg}', 'large_thumbnail.png')" class="download-btn">⬇ Download Large</button>

        <h3>Medium Thumbnail</h3>
        <img src="${mediumImg}" alt="Medium YouTube Thumbnail" width="320" />
        <button onclick="downloadImage('${mediumImg}', 'medium_thumbnail.png')" class="download-btn">⬇ Download Medium</button>
      `;
    } else {
      alert('❌ Invalid URL. Please enter a valid YouTube video link.');
    }
  }

  


 function toggleClearIcon() {
    const input = document.getElementById('videoUrl');
    const icon = document.getElementById('clearIcon');
    icon.style.display = input.value ? 'block' : 'none';
  }

  function clearInput() {
    const input = document.getElementById('videoUrl');
    input.value = '';
    toggleClearIcon();
    input.focus();
  }

 

function toggleMenu() {
      const nav = document.getElementById("nav-links");
      if (nav.classList.contains("nav-visible")) {
        nav.classList.add("nav-hide");
        setTimeout(() => {
          nav.classList.remove("nav-visible", "nav-hide");
        }, 300);
      } else {
        nav.classList.add("nav-visible");
      }
    }

    document.addEventListener("click", (e) => {
      const nav = document.getElementById("nav-links");
      const menuButton = document.querySelector(".menu-toggle");
      if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
        if (nav.classList.contains("nav-visible")) {
          nav.classList.add("nav-hide");
          setTimeout(() => {
            nav.classList.remove("nav-visible", "nav-hide");
          }, 300);
        }
      }
    });

    const menuButton = document.querySelector(".menu-toggle");
    menuButton.addEventListener("mouseenter", () => {
      menuButton.classList.add("animate");
    });
    menuButton.addEventListener("animationend", () => {
      menuButton.classList.remove("animate");
    });

    const toolButtons = document.querySelectorAll(".tool-btn");
    toolButtons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "transform 0.3s ease";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
      });
    });

    window.addEventListener("load", () => {
      const mainContent = document.querySelector("main");
      mainContent.style.opacity = 0;
      mainContent.style.transition = "opacity 1s ease-in-out";
      setTimeout(() => {
        mainContent.style.opacity = 1;
      }, 100);
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
      } else {
        header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
      }
    });
    const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
  });

  // Close nav on outside click (only on mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('nav-visible');
      }
    }
  });

  // Optional: animate button when hovered
  menuToggle.addEventListener('mouseenter', () => {
    menuToggle.classList.add('animate');
    setTimeout(() => menuToggle.classList.remove('animate'), 400);
  });
  

  
  document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle active class
        question.classList.toggle('active');

        // Toggle answer visibility
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }

        // Close other answers
        questions.forEach(q => {
          if (q !== question) {
            q.classList.remove('active');
            q.nextElementSibling.style.maxHeight = null;
          }
        });
      });
    });
  });



  