/// Soal - 01
/// Buatlah sebuah kondisi dimana akan melakukan pengecekan terhadap user yang hendak bepergian menggunakan motor, ada beberapa hal yang perlu dilakukan salah satu-nya adalah
/// - kondisi dibuat menggunakn IF ELSE
/// - kondisi pertama akan mengecek apakah user sudah berusia kurang dari 18 tahun
/// - jika IYA, maka cetak tulisan "Anda belum cukup umur"
/// - jika TIDAK
///   buatlah kondisi lagi dimana akan melakukan cek terhadap user tersebut, apakah dia sudah memiliki SIM atau belum
///   - jika IYA, maka cetak tulisan "Selamat berkendara"
///   - jika Tidak, maka cetak tulisan "Diharapkan untuk membuat SIM terlebih dahulu"

const userAge = 20;
const drivingLicense = true;

if (userAge<=18 && drivingLicense != true){
  console.log("Anda belum cukup umur")
} else {
  console.log("Anda sudah cukup umur")
  console.log("Selamat berkendara")
} 


/// Soal - 02
/// Buatlah sebuah kondisi yang akan melakukan konversi suhu dari celcius ke variable yang dituju (kelvin, fahrenheit, dan celsius)
/// - kondisi dibuat menggunakan switch case
/// - konversi celcius menjadi kelvin apabila user memasukan unit berupa "K"
/// - konversi celcius menjadi fahrenheit apabila user memasukan unit berupa "F"
/// - konversi celcius menjadi celcius apabila user memasukan unit berupa "C"
/// - menampilkan pesan "Maaf anda salah input", apabila variable tidak memenuhi semua kondisi yang ada
const temperature = 100; /// suhu
const unit = "F"; /// inputan

switch(unit) {
  case "K":
      console.log("Nilai temperature ke kelvin adalah : ", temperature+ 273.15 )
    break;
  case "F":
      console.log("Nilai temperature ke kelvin adalah : ", temperature*9 / 5 + 32)
    break;
  case "C":
      console.log ("Nilai temperature ke kelvin adalah : ", temperature)
    break;
  default: console.log("Data Belum Di inputkan ")
}