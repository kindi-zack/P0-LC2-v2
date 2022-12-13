/*
Group dota hero by primary attribute

Kamu diminta untuk membuat function untuk melakukan grouping terhadap data yang diberikan, dan mendapatkan hero dengan power paling besar disetiap group attribute yang ada.
Data yang diberikan berupa array multidimensi, disini setiap array yang berada didalam memiliki 3 element yang berfungsi sebagai info suatu hero, dimana :
    - element pertama adalah nama hero.
    - elemen kedua adalah primary attribute.
    - element ketiga adalah power.

Grouping yang harus kamu lakukan disini adalah grouping yang dilakukan tergantung dari Primary Attribute heronya.
Terdapat 3 jenis Primary Attribute disini : - Strength
                                            - Agility
                                            - Intelligence

Dimasing - masing group terdapat 2 key :    - list yang berupa array, dan digunakan untuk menyimpan nama - nama hero.
                                            - bestPower yang berupa object, dan digunakan untuk menampung nama hero dan power hero yang memiliki power paling besar dikelompok attribute tersebut.


Contoh:
- input :
    [
        ['Queen of Pain', 'Intelligence', 200],
        ['Viper', 'Agility', 400],
        ['Snapfire', 'Strength', 220],
        ['Juggernaut', 'Agility', 430],
        ['Wraith King', 'Strength', 390],
        ['Nyx Assasin', 'Agility', 170],
        ['Obsidian Destroyer', 'Intelligence', 340],
        ['Lina', 'Intelligence', 170]
    ];

- output :
    {
        Intelligence: {
            list: [ 'Queen of Pain', 'Obsidian Destroyer', 'Lina' ],
            bestPower: { name: 'Obsidian Destroyer', power: 340 }
        },
        Agility: {
            list: [ 'Viper', 'Juggernaut', 'Nyx Assasin' ],     
            bestPower: { name: 'Juggernaut', power: 430 }       
        },
        Strength: {
            list: [ 'Snapfire', 'Wraith King' ],
            bestPower: { name: 'Wraith King', power: 390 }      
        }
    }

NOTES :
1. Tidak boleh menggunakan built-in function selain .push().
2. Jangan lupa handle jika list heroes nya kosong dan tidak ada.
3. Urutan primary attribute dalam result akhir tidak perlu urut.
*/

function groupHeroes(heroes){
    // write your code here ...
}


let heroesList1 =  [
    ['Queen of Pain', 'Intelligence', 200],
    ['Viper', 'Agility', 400],
    ['Snapfire', 'Strength', 220],
    ['Juggernaut', 'Agility', 430],
    ['Wraith King', 'Strength', 390],
    ['Nyx Assasin', 'Agility', 170],
    ['Obsidian Destroyer', 'Intelligence', 340],
    ['Lina', 'Intelligence', 170]
];
console.log(groupHeroes(heroesList1));
/*
{
    Intelligence: {
        list: [ 'Queen of Pain', 'Obsidian Destroyer', 'Lina' ],
        bestPower: { name: 'Obsidian Destroyer', power: 340 }
    },
    Agility: {
        list: [ 'Viper', 'Juggernaut', 'Nyx Assasin' ],     
        bestPower: { name: 'Juggernaut', power: 430 }       
    },
    Strength: {
        list: [ 'Snapfire', 'Wraith King' ],
        bestPower: { name: 'Wraith King', power: 390 }      
    }
}
*/

let heroesList2 = [
    ['Ember Spirit', 'Agility', 320],
    ['Invoker', 'Intelligence', 400],
    ['Crystal Maiden', 'Intelligence', 140],
    ['Thinker', 'Intelligence', 320],
    ['Drow Ranger', 'Agility', 440],
];
console.log(groupHeroes(heroesList2));
/*
{
    Agility: {
        list: [ 'Ember Spirit', 'Drow Ranger' ],
        bestPower: { name: 'Drow Ranger', power: 440 }      
    },
    Intelligence: {
        list: [ 'Invoker', 'Crystal Maiden', 'Thinker' ],   
        bestPower: { name: 'Invoker', power: 400 }
    }
}
*/

console.log(groupHeroes([])); // There is no heroes on list, please check again!

console.log(groupHeroes()); // Error input, data not found!

module.exports = groupHeroes;