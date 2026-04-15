function updateJam() {
    const sekarang = new Date();

    // Format Jam, Minit, dan Saat
    const jam = String(sekarang.getHours()).padStart(2, '0');
    const menit = String(sekarang.getMinutes()).padStart(2, '0');
    const detik = String(sekarang.getSeconds()).padStart(2, '0');
    
   
    const daftarHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const daftarBulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const daftarPasaran = ['KLIWON', 'LEGI', 'PAHING', 'WAGE', 'PON'];
    
    const hari = daftarHari[sekarang.getDay()];
    const tanggal = sekarang.getDate();
    const bulan = daftarBulan[sekarang.getMonth()];
    const tahun = sekarang.getFullYear();


    const hariReferensi = new Date(2000, 0, 1);
    const selisiHari = Math.floor((sekarang - hariReferensi) / (1000 * 60 * 60 * 24));
    const indexPasaran = (selisiHari + 1) % 5;
    const pasaran = daftarPasaran[indexPasaran];

    // Memasukkan data ke dalam HTML
    document.getElementById('waktu').textContent = `${jam}:${menit}:${detik}`;
    document.getElementById('tanggal').textContent = `${hari}, ${tanggal} ${bulan} ${tahun}`;
    document.getElementById('tanggal-jawa').textContent = `${pasaran}`;
}

// Menjalankan fungsi setiap 1000ms (1 saat)
setInterval(updateJam, 1000);

// Panggil fungsi sekali semasa mula supaya tidak menunggu 1 saat pertama
updateJam();