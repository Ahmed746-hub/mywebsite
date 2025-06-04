// QR Code Generator Function

 
function generateQR() {
  const text = document.getElementById("qrText").value.trim();
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // Clear previous

  if (text) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const qr = new QRCode(document.createElement("div"), {
      text: text,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });

    setTimeout(() => {
      const tempCanvas = qr._el.querySelector("canvas");
      if (tempCanvas) {
        const qrSize = 200;
        const padding = 20;
        const textHeight = 40;

        // Resize main canvas
        canvas.width = qrSize + padding * 2;
        canvas.height = qrSize + textHeight + padding * 2;

        // Fill background white
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw QR code
        ctx.drawImage(tempCanvas, padding, padding);

        // Draw label text
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("SCAN ME", canvas.width / 2, canvas.height - padding);

         // Display final QR + text in container
        qrContainer.appendChild(canvas);

        // Add download button
        let downloadBtn = document.getElementById("downloadBtn");
        if (!downloadBtn) {
          downloadBtn = document.createElement("a");
          downloadBtn.id = "downloadBtn";
          downloadBtn.className = "tool-btn";
          downloadBtn.style.marginTop = "16px";
          qrContainer.appendChild(downloadBtn);
        }
        downloadBtn.textContent = "Download QR Code";
        downloadBtn.href = canvas.toDataURL("image/png");
        downloadBtn.download = "qr-with-label.png";

        
      }
    }, 200);
  }
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