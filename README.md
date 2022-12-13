# P0-Live-Code-2

## RULES

1. **Untuk kampus remote**: **WAJIB** melakukan **share screen** (**DESKTOP/ENTIRE SCREEN**) dan **unmute microphone** ketika Live Code berjalan (tidak melakukan share screen/salah screen atau tidak unmute microphone akan di ingatkan).
1. Kerjakan secara individu. Semua bentuk diskusi tidak diperbolehkan dan menyebabkan skor live code ini 0.
1. Clone repo ini kemudian buatlah **branch dengan nomor yang diinformasikan oleh buddy kalian**.
1. Kerjakan pada file JavaScript (\*.js) yang telah disediakan.
1. Waktu pengerjaan:
   - **90 menit** untuk **4 soal**.
1. **Pada text editor hanya ada file yang terdapat pada repository ini**.
1. Membuka referensi eksternal seperti Google, StackOverflow, dan MDN diperbolehkan.
1. Dilarang membuka repository di organisasi tugas, baik pada organisasi batch sendiri ataupun batch lain, baik branch sendiri maupun branch orang lain (**setelah melakukan clone, close tab GitHub pada web browser kalian**).
1. Lakukan `git push origin <branch-name>` dan create pull request **hanya jika waktu Live Code telah usai (bukan ketika kalian sudah selesai mengerjakan)**. Tuliskan nama lengkap kalian saat membuat pull request dan assign buddy.
1. **Penilaian berbasis logika dan hasil akhir**. Pastikan keduanya sudah benar.

## Notes

- Live code ini memiliki testing. Pastikan telah mengeksekusi command `npm install` sebelum melakukan test. Command line untuk test adalah `npm test -- <nama_file>`.

  | Soal | Command            | Max Score |
  | ---- | ------------------ | --------- |
  | 1    | `npm test -- 1.js` | 80        |
  | 2    | `npm test -- 2.js` | 100       |
  | 3    | `npm test -- 3.js` | 100       |
  | 4    | `npm test -- 4.js` | 100       |

- Built-in functions yang tidak dilarang oleh RULES:
  - Basic primitive data types: `Number()`, `String()`, `Boolean()`
  - Informatives: `.length`, `isInteger()`, `isArray()`, `isNaN()`
  - Maths: `Math.floor()`, `Math.round()`, `Math.ceil()`, `Math.abs()`
  - Strings: `toString()`, `toUpperCase()`, `toLowerCase()`, `parseInt()`
  - Array: `push()`
  - Object: `Object.keys()`, `Object.values()`, `delete`
- Jangan lupa untuk menyertakan pseudocode apabila diminta oleh soal. Apabila **pseudocode tidak disertakan**, mengakibatkan **nilai 0** untuk soal tersebut.
- Reminder:
  - **Live Code 1 = 15%**,
  - **Live Code 2 = 20%**,
  - **Live Code 3 = 20%**,
  - **Daily challenges = 45%**,
  - **Rocket 5%**.
- **Passing score phase 0 = 65%**.
