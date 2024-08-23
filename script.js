// Mengubah teks heading setelah halaman dimuat
window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};

// Deklarasi variabel
let name = "John";
const age = 30;

// Tampilkan nama dan umur di div dengan ID "output"
document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}`;

// Buat array dan tampilkan semua buah
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit) => {
  document.getElementById("output").innerHTML += `<br>Fruit: ${fruit}`;
});

// Buat objek dan tampilkan properti firstName dan lastName
let person = { firstName: "John", lastName: "Doe", age: 30 };
document.getElementById(
  "output"
).innerHTML += `<br>First Name: ${person.firstName}, Last Name: ${person.lastName}`;

// Baca nilai input dan periksa kondisi
function checkValue() {
  let userInput = document.getElementById("userInput").value;
  let output = "";

  if (userInput > 10) {
    output = "Nilai lebih besar dari 10";
  } else if (userInput == 10) {
    output = "Nilai sama dengan 10";
  } else {
    output = "Nilai kurang dari 10";
  }

  // Tampilkan pesan kondisi
  document.getElementById("output").innerHTML = output;

  // Tampilkan angka 1 hingga nilai yang dimasukkan pengguna
  for (let i = 1; i <= userInput; i++) {
    document.getElementById("output").innerHTML += `<br>${i}`;
  }
}

// Fungsi untuk mengembalikan pesan greeting
function greet(name) {
  return `Hello, ${name}`;
}

// Panggil fungsi greet dengan argumen berbeda
document.getElementById("output").innerHTML += `<br>${greet("Alice")}`;
document.getElementById("output").innerHTML += `<br>${greet("Bob")}`;

// Fungsi untuk mengembalikan kuadrat dari angka
function calculateSquare(number) {
  return number * number;
}

// Tampilkan hasil kuadrat dari beberapa angka
document.getElementById(
  "output"
).innerHTML += `<br>Square of 4: ${calculateSquare(4)}`;
document.getElementById(
  "output"
).innerHTML += `<br>Square of 5: ${calculateSquare(5)}`;

// Arrow function untuk menjumlahkan dua angka
const addNumbers = (a, b) => a + b;
document.getElementById(
  "output"
).innerHTML += `<br>Sum of 3 and 4: ${addNumbers(3, 4)}`;

// Buat array students dan tampilkan semua nama siswa
let students = ["Alice", "Bob", "Charlie"];
students.push("David");

students.forEach((student) => {
  document.getElementById("output").innerHTML += `<br>Student: ${student}`;
});

// Buat objek car dan tampilkan semua properti
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
  document.getElementById("output").innerHTML += `<br>${key}: ${car[key]}`;
}

// Buat array objek untuk menyimpan data beberapa mobil
let cars = [
  { brand: "Toyota", model: "Corolla", year: 2020 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Mustang", year: 2019 },
];

// Tampilkan informasi setiap mobil
cars.forEach((car) => {
  document.getElementById(
    "output"
  ).innerHTML += `<br>Car: ${car.brand} ${car.model} (${car.year})`;
});
