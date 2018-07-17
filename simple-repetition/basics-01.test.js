describe('Basics 01', () => {

    it('should understand some basics', () => {

        // It contains b followed by any of the letters a,e,i,o and u, followed by the letter t.
        // So long as those three items appear in a string, then it will match this expression.
        // letter [character class] letter

        const pattern = /b[aeiou]t/;

        expect('bat'.match(pattern).length).toBeTruthy();
        expect('bet'.match(pattern).length).toBeTruthy();
        expect('bit'.match(pattern).length).toBeTruthy();
        expect('bot'.match(pattern).length).toBeTruthy();
        expect('but'.match(pattern).length).toBeTruthy();
        expect('cricket bat'.match(pattern).length).toBeTruthy();
        expect('bitternes'.match(pattern).length).toBeTruthy();
    });

    it('should match swedish car registration plate', () => {
        const pattern = /^[A-Ö]{3}[0-9]{3}$/;

        expect('ABC123'.match(pattern).length).toBeTruthy();
        expect('LÖK090'.match(pattern).length).toBeTruthy();

        expect('VROM123'.match(pattern)).toBeNull();
        expect('VR123'.match(pattern)).toBeNull();
        expect('ABC9990'.match(pattern)).toBeNull();
        expect('123ABC'.match(pattern)).toBeNull();

        const txt = `LÖK090
        Hi from new line
        `;

        expect(txt.match(pattern)).toBeNull();
    });

    it('should catch variations', () => { 
        const pattern = /gr[ea]y/;

        const subject01 = 'The sky was grey';
        const subject02 = 'The sky was gray';

        expect(subject01.match(pattern).length).toBeTruthy();
        expect(subject02.match(pattern).length).toBeTruthy();
    });

});
