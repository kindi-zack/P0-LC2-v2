const pairProject = require('../3')
const Restriction = require('hacktiv8-restriction')

describe ('Soal 1', () => {
    test('should return correct answer if there is rule (85)', () => {
        expect(pairProject(["Acong", "Afifah", "Charlie", "Samuel", "Daniel", "Wika", "Wiwin", "Mimin", "Rindu", "Semmi"])).toEqual(
            [
                'Acong dan Charlie',
                'Afifah dan Samuel',
                'Daniel dan Wika',
                'Wiwin dan Mimin',
                'Rindu dan Semmi'
            ]
        );
        expect(pairProject(["Afifah", "Bayu", "Juminten", "Junaedi", "Iqbal", "Marimar"])).toEqual(
            [
                "Afifah dan Bayu",
                "Juminten dan Iqbal",
                "Junaedi dan Marimar"
            ]
        );
    });

    test('should return correct answer on odd total students (15)', () => {
        expect(pairProject(["Afifah", "Bayu", "Juminten"])).toEqual("jumlah murid harus genap");
    }); 
    
    test('check restriction (-20)', async () => {
        const checkRestriction = new Restriction('../3.js');
        checkRestriction.rules = ['match', 'search'];
        const result = await checkRestriction.readCode();
        expect(result).toBe(null);
    });
})