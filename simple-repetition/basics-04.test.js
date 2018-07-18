describe('Basics 04', () => {

    /*
    
        Practical application of regex for
        - Input validation
        - Search (and replace)

    */

    describe('Validation', () => {

        it('should be a correctly formated date', () => { 

            // yyyy-MM-dd

            const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

            // Valid
            expect(pattern.test('1980-10-14')).toBe(true);
            expect(pattern.test('2003-02-03')).toBe(true);
            expect(pattern.test('1891-09-11')).toBe(true);

            // Invalid
            expect(pattern.test('1980-13-14')).toBe(false);
            expect(pattern.test('2009-01-32')).toBe(false);
            expect(pattern.test('201-10-11')).toBe(false);
            expect(pattern.test('19950723')).toBe(false);
            expect(pattern.test('2017-0210-31')).toBe(false);

            // Edge cases (this should not be valid)
            const d = '2001-02-31';
            expect(pattern.test(d)).toBe(true);

            // new Date(d) actually just moves the day forward to mars 03...
        });

    });

});



