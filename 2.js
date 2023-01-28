/*

  ================================
  +++ CHECK PROGRAMMING SKILLS +++
  ================================

  Sebuah perusahaan ingin mempekerjaka seorang programmer, dengan kriteria:
  - minimal memiliki 1 dari 6 skill programming yang dibutuhkan perusahaan
    > HTML
    > CSS
    > JS
    > SQL
    > VUE
    > REACT

  Jika seorang pelamar tidak memiliki skill yang dibutuhkan perusahaan maka kembalikan output berupa :
  "<nama> ditolak karena tidak sesuai kriteria"

  Jika seorang pelamar memiliki skill programming maka tampilkan output:
  "<nama> diterima sebagai <status> programmer dengan total nilai <totalNilai>"

  Note:
    <nama> : diisi dengan nama pelamar kerja
    <status>
      - junior : memiliki pengalaman dibawah 2 tahun kerja
      - middle : memiliki pengalaman dibawah 5 tahun kerja
      - senior : memiliki pengalaman minimal 5 tahun kerja
    <totalNilai> : setiap skill yang cocok dengan kebutuhan perusahaan akan mendapatkan nilai 50


  contoh 1 : 
  - Input : 
    {
      nama: "John Doe",
      skills: ["C++", "C#", "JAVA"],
      jumlahTahunKerja: 6,
    }

  - Output: "John Doe ditolak karena tidak sesuai kriteria"

  - Note: John Doe ditolak karena skillsnya tidak yang cocok dengan kebutuhan perusahaan

  
  contoh 2 : 
  - Input: 
    {
      nama: "Joh Snow",
      skills: ["JS", "SQL", "JAVA"],
      jumlahTahunKerja: 1,
    }

  - Output: "Joh Snow diterima sebagai junior programmer dengan total nilai 100"

  - Note: Jon Snow diterima karena memiliki skills yang cocok dengan kebutuhan perusahaan (JS dan SQL) 
    dan setiap skills yang cocok bernilai 50 (2 * 50 = 100)
*/

function checkStatus(data) {
  let programmingSkills = ["HTML", "CSS", "JS", "SQL", "VUE", "REACT"];
  // Jangan lupa berdoa
  // Tulis codenya dibawah ini
  
  let { nama, skills, jumlahTahunKerja } = data
  let suitedSkills = []
  let nilai = 0
  let status;

  for(let i = 0; i < skills.length; i++) {
    
    for(let s of programmingSkills) {
      if(skills[i] === s) {
        suitedSkills.push(s)
        nilai += 50
      }
    }
  }

  if (suitedSkills.length === 0) return `${nama} ditolak karena tidak sesuai kriteria`

  if(jumlahTahunKerja < 2) {
    status = 'junior'
  }else if(jumlahTahunKerja < 5) {
    status = 'middle'
  }else {
    status = 'senior'
  }

  return `${nama} diterima sebagai ${status} programmer dengan total nilai ${nilai}`
}

let person1 = {
  nama: "Mark Zuckerberg",
  skills: ["JS", "VUE", "MS.OFFICE"],
  jumlahTahunKerja: 7,
};

let person2 = {
  nama: "Bill Gates",
  skills: ["HTML", "JS", "REACT"],
  jumlahTahunKerja: 4,
};

let person3 = {
  nama: "James Gosling",
  skills: ["JAVA", "CSS", "REACT", "SQL", "JS", "PHP"],
  jumlahTahunKerja: 1,
};

let person4 = {
  nama: "Jeff Bezos",
  skills: ["MS.OFFICE", "PHOTOSHOP"],
  jumlahTahunKerja: 8,
};

console.log(checkStatus(person1)); // Mark Zuckerberg diterima sebagai senior programmer dengan total nilai 100
console.log(checkStatus(person2)); // Bill Gates diterima sebagai middle programmer dengan total nilai 150
console.log(checkStatus(person3)); // James Gosling diterima sebagai junior programmer dengan total nilai 200
console.log(checkStatus(person4)); // Jeff Bezos ditolak karena tidak sesuai kriteria

module.exports = checkStatus;
