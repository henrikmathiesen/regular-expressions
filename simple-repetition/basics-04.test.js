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
            // We need "Is reasonable date", see my-app > info > valid-date-string-from-user-input.ts
        });

        it('should be a correctly formated date - more relaxed - 1', () => {
            const pattern = /^\d{4}-?(0[1-9]|1[0-2])-?(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;      // -? = Once or none

            // Valid
            expect(pattern.test('1980-10-14')).toBe(true);
            expect(pattern.test('2003-02-03')).toBe(true);
            expect(pattern.test('1891-09-11')).toBe(true);
            expect(pattern.test('19801014')).toBe(true);
            expect(pattern.test('20030203')).toBe(true);
            expect(pattern.test('18910911')).toBe(true);
            expect(pattern.test('1891-0911')).toBe(true);                                   // not optimal
            expect(pattern.test('189109-11')).toBe(true);                                   // not optimal
        });

        it('should be a correctly formated date - more relaxed - 2', () => {
            const pattern01 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
            const pattern02 = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

            const checkPatterns = dateString => pattern01.test(dateString) || pattern02.test(dateString);

            // Valid
            expect(checkPatterns('1980-10-14')).toBe(true);
            expect(checkPatterns('2003-02-03')).toBe(true);
            expect(checkPatterns('1891-09-11')).toBe(true);
            expect(checkPatterns('19801014')).toBe(true);
            expect(checkPatterns('20030203')).toBe(true);
            expect(checkPatterns('18910911')).toBe(true);
            expect(checkPatterns('19950723')).toBe(true);

            // edge case again, 31 feb
            // We need "Is reasonable date", see my-app > info > valid-date-string-from-user-input.ts
            expect(checkPatterns('2001-02-31')).toBe(true);
            
            // invalid
            expect(checkPatterns('1891-0911')).toBe(false);
            expect(checkPatterns('189109-11')).toBe(false);

            // more invalid
            expect(checkPatterns('1980-13-14')).toBe(false);
            expect(checkPatterns('2009-01-32')).toBe(false);
            expect(checkPatterns('201-10-11')).toBe(false);
            expect(checkPatterns('2017-0210-31')).toBe(false);
        });

    });

    describe('Search', () => {

        it('should do something if localhost', () => {
            const pattern = /localhost:\d/;

            const subject01 = 'http://localhost:8080';
            const subject02 = 'http://wwww.test.com';
            const subject03 = 'http://wwww.localhoster.com';

            expect(pattern.test(subject01)).toBe(true);
            expect(pattern.test(subject02)).toBe(false);
            expect(pattern.test(subject03)).toBe(false);
        });

        it('should find all png files in an array', () => {
            const files = [
                'adam.png',
                'bertil.png',
                'ceasar.gif',
                'david.jpg',
                'erik.jpg',
                'fredrik.PNG',
                'gustav.gif'
            ];

            const pattern = /\.png$/i;
            const pngs = files.filter(f => f.match(pattern));   // .match returns null if no match, which is falsy

            expect(pngs.length).toBe(3);
            expect(pngs[0]).toBe('adam.png');
            expect(pngs[1]).toBe('bertil.png');
            expect(pngs[2]).toBe('fredrik.PNG');
        });

        it('should replace all gray and replace them with grey', () => { 
            const subject = 'It was a gray rainy day, as gray as my mood. It is not great this grayvy';
            const pattern = /\bgray\b/g;

            const greys = subject.replace(pattern, 'grey');
            expect(greys).toEqual('It was a grey rainy day, as grey as my mood. It is not great this grayvy');

            // If we had just used the string gray as first argument to .replace() it would have only replaced the first instance of gray
        });

    });

});



