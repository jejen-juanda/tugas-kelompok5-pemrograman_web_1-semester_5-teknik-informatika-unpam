function tampilkan()
{
var nilai1=document.getElementById("form1").text1.value;
var oprator=document.getElementById("form1").select.value;
var nilai2=document.getElementById("form1").text2.value;
var submit=document.getElementById("form1").hitung;
var back="<br> <button onclick='kembali()'>kembali</button>";
if (nilai1 != "" && oprator !="a" && nilai2 !="")
{
var a=parseInt(nilai1)+parseInt(nilai2);
var b=parseInt(nilai1)-parseInt(nilai2);
var c=parseInt(nilai1)*parseInt(nilai2);
var d=parseInt(nilai1)/parseInt(nilai2);
var e=Math.pow(parseInt(nilai1),parseInt(nilai2));
var f=parseInt(nilai1)%parseInt(nilai2);
var x=0;
var max=parseInt(nilai1)*parseInt(nilai2);
if(nilai1 > nilai2)
{
var min=nilai1;
}
else
{
var min=nilai2;
}
for(x=min; x<=max; x++)
{
if(parseInt(x)%parseInt(nilai1) ==0 && parseInt(x)%parseInt(nilai2) ==0)
{
var h=x;
}
}
var p_kontainer=document.getElementById("form1");
if (oprator=="tambah")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+a+"."+back;
}
else if (oprator=="kurang")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+b+"."+back;
}
else if (oprator=="kali")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+c+"."+back;
}
else if (oprator=="bagi")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+d+"."+back;
}
else if (oprator=="pangkat")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+e+"."+back;
}
else if (oprator=="modulus")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil penjumlahan "+nilai1+" "+oprator+" "+nilai2+" = "+f+"."+back;
}
else if (oprator=="kpk")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, nilai pertama ="+nilai1+".<br>Nilai ke dua ="+nilai2+".<br>maka, hasil pencarian "+oprator+" dari "+nilai1+" dan "+nilai2+" adalah "+h+"."+back;
}
}
else if (nilai1 != "" && oprator =="akar" && nilai2 =="")
{
var g=Math.sqrt(parseInt(nilai1));
var p_kontainer=document.getElementById("form1");
if (oprator=="akar")
{
p_kontainer.innerHTML="<h2>hasil</h2>"+"telah diketahui, sebuah nilai ="+nilai1+".<br>maka, "+nilai1+" adalah hasil "+oprator+" dari "+g+" quadrat."+"<br>("+g+" dikali "+g+" )."+back;
}
}
else
{
submit.disabled = true;
alert('Anda harus mengisi form dengan lengkap !');
}
}
function kembali()
{
var b_kontainer=document.getElementById("form1");
b_kontainer.innerHTML="<form id='form1' name='form1' onsubmit='return false' autocomplete='on'> <fieldset id='input1'> <legend>Pilih Nama Dan Oprator</legend> <br> <label for='text1'>Masukkan nilai pertama: </label> <input type='text' id='text1' onkeyup='tulis()' name='text1' title='ketik nilai' autofocus> <label for='select'>Pilih oprator: </label> <select id='select' onchange='pilih()' name='select' disabled='disabled'> <option value='a' selected>Pilih</option> <option value='akar'>Akar</option> <option value='bagi'>Bagi</option> <option value='kali'>Kali</option> <option value='kpk'>KPK</option> <option value='kurang'>Kurang</option> <option value='modulus'>Modulus</option> <option value='pangkat'>Pangkat</option> <option value='tambah'>Tambah</option> </select> </fieldset> <label for='text2'>Masukkan nilai ke dua: </label> <input type='text' id='text2' onkeyup='cek()' name='text2' title='ketik nilai' disabled='disabled'> <fieldset id='input2'> <legend>Silahkan Klik hitung untuk mengetahui hasil-nya, atau klik reset untuk mengulangi pengisian form</legend> <input type='submit' id='hitung' value='hitung' onclick='tampilkan()' disabled='disabled'> <input type='reset' id='reset' onclick='back()' disabled='disabled'> </fieldset> </form>";
}
function tulis()
{
const e = document.getElementById("form1").reset;
const p = document.getElementById("form1").text1;
const q = document.getElementById("form1").select;
if(p.value.length > 0)
{
q.disabled = false;
e.disabled = false;
}
else
{
q.disabled = true;
e.disabled = false;
}
}
function pilih()
{
const a = document.getElementById("form1").select.value;
const b = document.getElementById("form1").text2;
const c = document.getElementById("form1").hitung;
if(a=="a")
{
b.disabled = true;
c.disabled = true;
}
else if(a=="akar")
{
b.disabled = true;
c.disabled = false;
}
else
{
b.disabled = false;
}
}
function cek()
{
const r = document.getElementById("form1").text2;
const s = document.getElementById("form1").hitung;
if(r.value.length > 0)
{
s.disabled = false;
}
else
{
s.disabled = true;
}
}
function back()
{
var y=document.getElementById("form1").text2;
var Y=document.getElementById("form1").select;
var z=document.getElementById("form1").reset;
var Z=document.getElementById("form1").hitung;
Z.disabled = true;
z.disabled = true;
y.disabled = true;
Y.disabled = true;
alert('Form telah di reset, silahkan isi kembali!');
}