function clearInput() {
  const input = document.getElementById('tiktokUrl');
  input.value = '';
  input.focus();
  toggleClearButton();
}

function toggleClearButton() {
  const input = document.getElementById('tiktokUrl');
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.style.display = input.value.trim() !== '' ? 'block' : 'none';
}

function downloadTikTokVideo() {
  const url = document.getElementById('tiktokUrl').value.trim();

  if (url === '') {
    alert('❌ Please enter a valid TikTok video URL.');
    return;
  }

  const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('downloadResult');
      if (data.data && data.data.play) {
        resultDiv.innerHTML = `
          <video id="videoPreview" controls>
            <source src="${data.data.play}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>✅ Video Found! Click below to download:</p>
          <a href="${data.data.play}" target="_blank" download>⬇ Download Video</a>
        `;
        document.getElementById('videoPreview').style.display = 'block';
      } else {
        resultDiv.innerHTML = `<p style="color: yellow;">❌ Unable to fetch video.</p>`;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('downloadResult').innerHTML = `<p style="color: yellow;">❌ Failed to connect to the server.</p>`;
    });
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