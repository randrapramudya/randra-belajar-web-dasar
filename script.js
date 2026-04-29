document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Ketikan (Typewriter) untuk Tagline Hero
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const textToType = tagline.innerText;
        tagline.innerText = '';
        let i = 0;

        function typeWriterEffect() {
            if (i < textToType.length) {
                tagline.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriterEffect, 50);
            }
        }
        typeWriterEffect();
    }

    // 2. Interaksi Hover Kartu - Neo Brutalism Style
    const neoCards = document.querySelectorAll('.neo-card');
    neoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translate(-8px, -8px)"; 
            card.style.transition = "transform 0.2s ease";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translate(-4px, -4px)";
        });
    });

    // 3. Form Submission Handling (REVISI DI SINI)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function() {
            const btn = this.querySelector('button');
            
            // Memberikan efek visual tombol tertekan ke dalam
            btn.style.transform = "translate(2px, 2px)";
            btn.style.boxShadow = "none";
            btn.innerText = "MENGIRIM...";
            btn.style.backgroundColor = "#555";
            btn.style.pointerEvents = "none"; // Mencegah klik ganda saat loading
        });
    }

    // 4. Smooth Scroll untuk Link Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});