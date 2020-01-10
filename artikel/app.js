var idbulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var idhari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum&#39;at","Sabtu"];
var date=new Date();
var tahun=date.getFullYear();
var bulan=date.getMonth();
var tanggal=date.getDate();
var hari=date.getDay();
var jam=date.getHours();
var menit=date.getMinutes();
var sekarang="<h1>Selamat Datang</h1>"+"<p>Saat ini anda berkunjung pada<br>"+idhari[hari]+", "+tanggal+" "+idbulan[bulan]+" "+tahun+"<br>jam "+jam+":"+menit+".</p>";
var menu="<a href='#konten'>loncat ke konten</a><br>"
+"<a href='http://kelompok5.cvi106.com/aplikasi/index.html'>Aplikasi</a><br>"
+"<a href='http://kelompok5.cvi106.com/artikel/index.html'>Artikel</a><br>"
+"<a href='http://kelompok5.cvi106.com/galeri/index.html'>Galeri</a><br>"
+"<a href='http://kelompok5.cvi106.com/tentang.html'>Tentang Kami</a>";
var artikel="<a href='http://kelompok5.cvi106.com/artikel/00.html'>Anatomi Website</a><br>"
+"<a href='http://kelompok5.cvi106.com/artikel/01.html'>Perulangan For</a>";
document.getElementById("head").innerHTML = sekarang;
document.getElementById("menu").innerHTML = menu;
document.getElementById("artikel").innerHTML = artikel;