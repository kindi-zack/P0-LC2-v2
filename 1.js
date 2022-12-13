/*
MINUM OBAT

Budi sedang mengalami sakit parah. Dirinya diwajibkan untuk mengkonsumsi obat setiap harinya. List obat budi merupakan sebuah array yang berisi nama-nama obatnya.
Tiap obatnya harus diminum sesuai dengan arahan dokter seperti yang terlihat di variable aturan.

let listObat = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran', 'anti-inflamasi', 'antiemetik']
let aturan = [3,2,2,3,3,1]

Bantulah Budi dalam membuat catatan konsumsi obatnya sesuai dengan aturan tersebut.
Jika di aturannya terdapat obat yang tidak perlu diminum, maka dia tidak akan masuk ke dalam catatan. *Lihat contoh 2
Jika tidak ada yang bisa dicatat, maka Budi harus bertanya lagi ke dokter.

Contoh 1:

INPUT:
let listObat = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran', 'anti-inflamasi', 'antiemetik']
let aturan = [3,2,2,3,3,1]

OUTPUT:
['analgesik diminum 3x', 'vitamin diminum 2x', 'antibiotik diminum 2x', 'antipespiran diminum 3x', 'anti-inflamasi diminum 3x', 'antiemetik diminum 1x']


Contoh 2:

INPUT:
let listObat = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran', 'anti-inflamasi']
let aturan = [3,2,2,0,3]

OUTPUT:
['analgesik diminum 3x', 'vitamin diminum 2x', 'antibiotik diminum 2x', 'anti-inflamasi diminum 3x']


Contoh 3:

INPUT: *TIDAK ADA INPUT*

OUTPUT:
'Budi harus bertanya lagi pada dokter.'

RULES:
- Tidak boleh menggunakan built in function apapun kecuali .push
- WAJIB menuliskan pseudocode
*/


/*
YOUR PSEUDOCODE BELOW:

*/



function buatCatatan (meds, rules) {
    // your code here
    
}


let listObat1 = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran', 'anti-inflamasi', 'antiemetik']
let aturan1 = [3,2,2,3,3,1]

console.log(buatCatatan(listObat1, aturan1))
// [
//     'analgesik diminum 3x',
//     'vitamin diminum 2x',
//     'antibiotik diminum 2x',
//     'antipespiran diminum 3x',
//     'anti-inflamasi diminum 3x',
//     'antiemetik diminum 1x'
// ]


let listObat2 = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran']
let aturan2 = [3,2,0,3]

console.log(buatCatatan(listObat2, aturan2))
// [
//     'analgesik diminum 3x',
//     'vitamin diminum 2x',
//     'antipespiran diminum 3x'
// ]

console.log(buatCatatan()) // Budi harus bertanya lagi pada dokter.

module.exports = buatCatatan;