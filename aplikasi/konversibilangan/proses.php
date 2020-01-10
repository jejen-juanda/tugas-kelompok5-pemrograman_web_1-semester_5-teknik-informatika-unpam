<!DOCTYPE html>
<html lang="id" translate="no">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Flanet Kreatif|Aplikasi|Konversi Bilangan</title>
<meta name="description" content="Konversi Bilangan|Aplikasi|Komunitas koding yang kreatif">
<meta name="keywords" content="insha allah bermanfaat">
<meta name="author" content="Jejen Juanda">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header role="banner" aria-label="logo">
<div>
<a href="http://kelompok5.cvi106.com/index.html">
<img src="logo.jpg" alt="logo flanet kreatif">
</a>
</div>
<div id="head"></div>
</header>
<main role="main" aria-label="menu utama">
<p id="menu"></p>
<section role="region" aria-label="konten">
<div>
<article id="konten">
<h2>Hasil Konversi Bilangan</h2>
<?php
if ($_POST["submit"] == "konversi")
{
$sumber=$_POST["sumber"];
$nilai=$_POST["nilai"];
$target=$_POST["target"];
if($sumber=="binary" &&($target=="binary"))
{
echo "Target bilangan tidak boleh sama dengan sumber! <br> nilai tidak akan berubah.";
}
elseif($sumber=="binary" &&($target=="decimal"))
{
$hasil=bindec($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="binary" &&($target=="hexadecimal"))
{
$a=bindec($nilai);
$hasil=dechex($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="binary" &&($target=="octal"))
{
$a=bindec($nilai);
$hasil=decoct($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="decimal" &&($target=="binary"))
{
$hasil=decbin($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="decimal" &&($target=="decimal"))
{
echo "Target bilangan tidak boleh sama dengan sumber! <br> nilai tidak akan berubah.";
}
elseif($sumber=="decimal" &&($target=="hexadecimal"))
{
$hasil=dechex($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="decimal" &&($target=="octal"))
{
$hasil=decoct($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="hexadecimal" &&($target=="binary"))
{
$a=hexdec($nilai);
$hasil=decbin($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="hexadecimal" &&($target=="decimal"))
{
$hasil=hexdec($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="hexadecimal" &&($target=="hexadecimal"))
{
echo "Target bilangan tidak boleh sama dengan sumber! <br> nilai tidak akan berubah.";
}
elseif($sumber=="hexadecimal" &&($target=="octal"))
{
$a=hexdec($nilai);
$hasil=decoct($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="octal" &&($target=="binary"))
{
$a=octdec($nilai);
$hasil=decbin($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="octal" &&($target=="decimal"))
{
$hasil=octdec($nilai);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
elseif($sumber=="octal" &&($target=="hexadecimal"))
{
$a=octdec($nilai);
$hasil=dechex($a);
echo "Sumber bilangan yang dipilih adalah " . $sumber . "<br>Nilai yang dimasukkan adalah " . $nilai . "<br>Dengan target konversi adalah " . $target . "<br>Maka hasil konversinya adalah " . $hasil;
}
else
{
echo "Target bilangan tidak boleh sama dengan sumber! <br> nilai tidak akan berubah.";
}
}
?>
<button onclick="goBack()">Kembali</button>
<script>
function goBack() {
  window.history.back();
}
</script>
</article>
</div>
<aside>
<article>
<h2>Website Flanet Kreatif</h1>
<p>
Kreatif mengekspresikan logika didalam coding
</p>
<figure>
<img src="logo.jpg" alt="Flanet Kreatif">
<figcaption>Logo</figcaption>
</figure>
</article>
</aside>
</section>
<footer role="contentinfo" aria-label="footer">
<p>
design by Kelompok 5
</p>
<nav>
<a href='#konten'>kembali ke atas</a>
<a href='index.html'>Halaman Utama</a>
</nav>
<p>
copyright 2020 flanet kreatif. All rights reserved.
</p>
</footer>
<script src="app.js"></script>
</body>
</html>