document.addEventListener('DOMContentLoaded', function () {
    // Navbar toggler functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Popup and image fade-in effects
    const popups = document.querySelectorAll('.popup');
    const image = document.querySelector('.image');

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        popups.forEach(function (popup) {
            if (scrollPosition > popup.offsetTop - window.innerHeight + 100) {
                popup.classList.add('visible');
            }
        });

        if (scrollPosition > image.offsetTop - window.innerHeight + 100) {
            image.classList.add('visible');
        }
    });

    function checkInitialVisibility() {
        let scrollPosition = window.scrollY;

        popups.forEach(function (popup) {
            if (scrollPosition > popup.offsetTop - window.innerHeight + 100) {
                popup.classList.add('visible');
            }
        });

        if (scrollPosition > image.offsetTop - window.innerHeight + 100) {
            image.classList.add('visible');
        }
    }

    checkInitialVisibility();


    const navLinksItems = document.querySelectorAll('.nav-links li a');

    navLinksItems.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const marqueeContainers = document.querySelectorAll('.marquee-container');
        marqueeContainers.forEach(container => {
            const marquee = container.querySelector('.marquee');
            const clone = marquee.cloneNode(true);
            container.appendChild(clone);
        });
    });

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const loadingDiv = document.querySelector('.loading');
const statusMessageDiv = document.querySelector('.status-message');
const statusIcon = statusMessageDiv.querySelector('.status-icon');
const statusText = statusMessageDiv.querySelector('.status-text');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Tampilkan elemen loading dan sembunyikan tombol submit
    loadingDiv.classList.remove('d-none');
    submitBtn.classList.add('d-none');
    statusMessageDiv.style.display = 'none';

    const formData = new FormData(contactForm);
    const response = await fetch('https://script.google.com/macros/s/AKfycbxasHPxPZNPxvsddLMc3Pt70XRqIXL8N5FwrK5HHL3rn7ndhfS7UuvqUkJcrN2qPxym/exec', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    // Sembunyikan elemen loading dan tampilkan kembali tombol submit
    loadingDiv.classList.add('d-none');
    submitBtn.classList.remove('d-none');

    if (data.result === 'success') {
        statusMessageDiv.classList.add('success');
        statusMessageDiv.classList.remove('error');
        statusIcon.style.backgroundImage = 'url(success-icon.png)'; // Ganti dengan path ke ikon sukses
        statusText.textContent = 'Your message has been sent successfully!';
    } else {
        statusMessageDiv.classList.add('error');
        statusMessageDiv.classList.remove('success');
        statusIcon.style.backgroundImage = 'url(error-icon.png)'; // Ganti dengan path ke ikon error
        statusText.textContent = 'There was an error sending your message.';
    }

    // Tampilkan pesan selama 3 detik dan reset form
    statusMessageDiv.style.display = 'flex';
    setTimeout(() => {
        statusMessageDiv.style.display = 'none';
        statusMessageDiv.classList.remove('success', 'error');
        contactForm.reset();
    }, 3000);
});



});
