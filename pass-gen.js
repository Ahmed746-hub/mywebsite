function generatePassword() {
      let length = document.getElementById('length').value;
      let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowercase = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let symbols = "!@#$%^&*()_+{}[]";
      let allChars = "";
      if (document.getElementById('uppercase').checked) allChars += uppercase;
      if (document.getElementById('lowercase').checked) allChars += lowercase;
      if (document.getElementById('numbers').checked) allChars += numbers;
      if (document.getElementById('symbols').checked) allChars += symbols;

      if (allChars === "") {
        alert("Please select at least one character set.");
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }

      document.getElementById('password').value = password;
    }

    function copyPassword() {
      let passwordField = document.getElementById('password');
      if (!passwordField.value) {
        alert("Generate a password first!");
        return;
      }
      passwordField.select();
      document.execCommand("copy");
      alert("Password copied!");
    }

    function toggleVisibility() {
      let passwordField = document.getElementById('password');
      passwordField.type = passwordField.type === "text" ? "password" : "text";
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