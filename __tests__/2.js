const Restriction = require("hacktiv8-restriction");
const fileName = '../2.js';
const checkStatus = require(fileName);

describe("Soal 1", () => {
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

  test("should return correct answer if person is a programmer (85)", () => {
    expect(checkStatus(person1)).toEqual(
      "Mark Zuckerberg diterima sebagai senior programmer dengan total nilai 100"
    );
    expect(checkStatus(person2)).toEqual(
      "Bill Gates diterima sebagai middle programmer dengan total nilai 150"
    );
    expect(checkStatus(person3)).toEqual(
      "James Gosling diterima sebagai junior programmer dengan total nilai 200"
    );
  });

  test("should return correct answer if person is not a programmer (15)", () => {
    expect(checkStatus(person4)).toEqual("Jeff Bezos ditolak karena tidak sesuai kriteria");
  });

  test("check restriction (-30)", async () => {
    const checkRestriction = new Restriction(fileName);
    checkRestriction.rules = ["split", "concat", "search", "unshift", "shift"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
