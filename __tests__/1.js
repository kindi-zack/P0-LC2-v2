const Restriction = require('hacktiv8-restriction');
const fileName = '../1.js';
const buatCatatan = require(fileName);

describe ('Soal 1', () => {
    var listObat1 = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran', 'anti-inflamasi', 'antiemetik']
    var listObat2 = ['analgesik', 'vitamin', 'antibiotik', 'antipespiran']
    var aturan1 = [3,2,2,3,3,1]
    let aturan2 = [0,0,0,3]

    test('should return correct answer if there is rule (60)', () => {
        expect(buatCatatan(listObat1, aturan1)).toEqual(
            [
                'analgesik diminum 3x',
                'vitamin diminum 2x',
                'antibiotik diminum 2x',
                'antipespiran diminum 3x',
                'anti-inflamasi diminum 3x',
                'antiemetik diminum 1x'
            ]
        );
        expect(buatCatatan(listObat2, aturan2)).toEqual(
            [
                'antipespiran diminum 3x'
            ]
        );
    });

    test('should return correct answer on empty rule (20)', () => {
        expect(buatCatatan()).toEqual('Budi harus bertanya lagi pada dokter.');
    });

    test('check restriction (-30)', async () => {
        const checkRestriction = new Restriction(fileName);
        checkRestriction.rules = ['match', 'split', 'concat', 'search', 'unshift', 'shift'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    });
})