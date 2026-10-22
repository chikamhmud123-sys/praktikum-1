// 1. Deklarasi Variabel
const nama = "Jesyka Fadilah Mahmud";
const nim = "05301425101";
let semester = 3;
const aktif = true;
const hobi = ["colourgard", "Membaca", "Menulis"];

// 2. Output Ke Console
console.log("Nama: ", nama);
console.log("Tipe Data Semester:", typeof semester);
console.log("RTipe Data Aktif:", typeof aktif);
console.log("Hobi Pertama:", hobi[0]);

// 3. Output Ke Halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML =`
    NIM: ${nim}<br>
    Semester: ${semester}<br>
    Status: ${aktif ? "Aktif" : "Cuti"}<br>
    Hobi: ${hobi.join(", ")}`;