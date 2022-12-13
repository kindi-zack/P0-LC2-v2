const Restriction = require('hacktiv8-restriction');
const fileName = '../4.js';
const groupHeroes = require(fileName);

describe('Soal 4', () => {
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

    let heroesList2 = [
        ['Ember Spirit', 'Agility', 320],
        ['Invoker', 'Intelligence', 400],
        ['Crystal Maiden', 'Intelligence', 140],
        ['Thinker', 'Intelligence', 320],
        ['Drow Ranger', 'Agility', 440],
    ];

    test('should return correct answer if there is heroes on list (60)', () => {
        expect(groupHeroes(heroesList1)).toEqual({
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
        });
        expect(groupHeroes(heroesList2)).toEqual({
            Agility: {
                list: [ 'Ember Spirit', 'Drow Ranger' ],
                bestPower: { name: 'Drow Ranger', power: 440 }      
            },
            Intelligence: {
                list: [ 'Invoker', 'Crystal Maiden', 'Thinker' ],   
                bestPower: { name: 'Invoker', power: 400 }
            }
        });
    });

    test('should return correct answer if there is no heroes on list (20)', () => {
        expect(groupHeroes([])).toEqual("There is no heroes on list, please check again!");
    });

    test('should return correct answer if there is no input (20)', () => {
        expect(groupHeroes()).toEqual("Error input, data not found!");
    });

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction(fileName);
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    });
});