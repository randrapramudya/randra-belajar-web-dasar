document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Ketikan (Typewriter) untuk Tagline Hero
    const tagline = document.querySelector('.hero-tagline');
    const textToType = tagline.innerText;
    tagline.innerText = '';
    let i = 0;

    function typeWriterEffect() {
        if (i < textToType.length) {
            tagline.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriterEffect, 50); // Kecepatan mengetik
        }
    }
    typeWriterEffect();

    // 2. Interaksi Hover Kartu - Membuat bayangan sedikit lebih goyah
    const neoCards = document.querySelectorAll('.neo-card');
    neoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translate(-6px, -6px)"; // Gerakan sedikit lebih jauh
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translate(-4px, -4px)"; // Kembalikan ke posisi awal
        });
    });

    // 3. Simple Form Feedback - Neo style
    const neoContactForm = document.getElementById('contactForm');
    if (neoContactForm) {
        neoContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = neoContactForm.querySelector('button');
            
            // Animasi tombol saat klik (efek "klik" yang tajam)
            submitBtn.style.transform = "translate(6px, 6px)";
            submitBtn.innerText = "SEDANG MENGIRIM...";
            
            setTimeout(() => {
                alert('Pesan Anda telah diterima oleh Moch Randra Pramudya. Terima kasih!');
                submitBtn.style.transform = "translate(0, 0)";
                submitBtn.innerText = "Kirim Pesan";
                neoContactForm.reset();
            }, 1200);
        });
    }

    // 4. Smooth Scroll untuk Link Navigasi - Menghaluskan perpindahan
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});