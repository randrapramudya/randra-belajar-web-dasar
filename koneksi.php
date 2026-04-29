<?php
$host = "localhost";
$user = "root"; // Default Laragon
$pass = "";     // Default Laragon (kosong)
$db   = "db_portofolio";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>