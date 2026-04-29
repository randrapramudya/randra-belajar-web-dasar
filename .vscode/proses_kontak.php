<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama  = mysqli_real_escape_string($conn, $_POST['nama_lengkap']);
    $email = mysqli_real_escape_string($conn, $_POST['alamat_email']);
    $pesan = mysqli_real_escape_string($conn, $_POST['pesan_anda']);
    
    $query = "INSERT INTO pesan_kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

    if (mysqli_query($conn, $query)) {
        // Redirect kembali ke index dengan status sukses
        header("Location: index.php?status=sukses");
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}
?>