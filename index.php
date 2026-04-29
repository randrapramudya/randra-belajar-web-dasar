<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Randra Pramudya | Digital Portfolio with Photo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="top-nav">
    <div class="logo">RANDRA</div>
    <div class="menu">
        <a href="#about">Tentang</a>
        <a href="#projects">Projek</a>
        <a href="#contact" class="cta-nav">Bekerja Sama</a>
    </div>
</nav>

<header class="hero-section">
    <div class="hero-inner">
        <h1 class="glitch-text">MOCH RANDRA PRAMUDYA</h1>
        <p class="hero-tagline">Membangun Solusi Digital dengan Presisi & Gaya.</p>
        <div class="hero-buttons">
            <a href="#projects" class="btn-primary">Karya Saya</a>
            <a href="#contact" class="btn-secondary">Kontak</a>
        </div>
    </div>
</header>

<main class="content-wrapper">
    <section id="about" class="neo-card about-with-photo">
        <div class="profile-text-content">
            <h2 class="title-accent">Mengenai Randra</h2>
            <p>Seorang visioner teknologi yang menggabungkan logika tajam dengan estetika visual yang kuat. Berdedikasi untuk menciptakan platform digital yang tak hanya berfungsi, tapi juga menginspirasi.</p>
        </div>
        <div class="profile-visual-wrapper">
            <img src="nailong.jpg" alt="Moch Randra Pramudya Profile Photo" class="profile-image-neo">
        </div>
    </section>

    <section id="projects" class="project-grid">
        <div class="neo-card project-item">
            <span class="project-tag">WEB APP</span>
            <h3>ERP Randra Logistics</h3>
            <p>Optimasi operasional dengan tingkat efisiensi hingga 40%.</p>
        </div>
        <div class="neo-card project-item">
            <span class="project-tag">DESIGN SYSTEM</span>
            <h3>Pramudya Fintech UI Kit</h3>
            <p>Eksplorasi desain masa depan untuk inklusi keuangan.</p>
        </div>
    </section>

    <section id="contact" class="neo-card contact-section">
        <h2 class="title-accent">Ayo Hubungi Saya</h2>
    <form id="contactForm" method="POST" action="proses_kontak.php">
    <input type="text" name="nama_lengkap" placeholder="Nama Lengkap" required>
    <input type="email" name="alamat_email" placeholder="Alamat Email" required>
    <textarea name="pesan_anda" placeholder="Pesan Anda" rows="4"></textarea>
    <button type="submit" class="btn-submit-neo">Kirim Pesan</button>
</form>
    </section>
</main>

<footer>
    <p>&copy; 2026 Moch Randra Pramudya. Dibuat dengan presisi dan dedikasi.</p>
</footer>

<script src="script.js"></script>
</body>
</html>