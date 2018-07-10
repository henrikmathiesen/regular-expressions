describe('boundaries', () => {

    it('should start with hello', () => {
        const pattern = /^Hello/;

        const subject01 = 'Hello there!';
        const subject02 = 'Hejsan hoppsan';

        const startsWithHello01 = pattern.test(subject01);
        const startsWithHello02 = pattern.test(subject02);

        expect(startsWithHello01).toBe(true);
        expect(startsWithHello02).toBe(false);
    });

    it('ends with .png', () => {
        const pattern = /.png$/;

        const subject01 = 'foo.pn';
        const subject02 = 'foo.pg';
        const subject03 = 'foo.ppng';
        const subject04 = 'foo.pngx';
        const subject05 = 'foo.png';

        expect(pattern.test(subject01)).toBe(false);
        expect(pattern.test(subject02)).toBe(false);
        expect(pattern.test(subject03)).toBe(true);                         // a little surprise
        expect(pattern.test(subject04)).toBe(false);
        expect(pattern.test(subject05)).toBe(true);

        const patternWordBoundry = /\b.png\b$/;                             // lets test again with this

        expect(patternWordBoundry.test(subject01)).toBe(false);
        expect(patternWordBoundry.test(subject02)).toBe(false);
        expect(patternWordBoundry.test(subject03)).toBe(true);              // no, not working, still a match
        expect(patternWordBoundry.test(subject04)).toBe(false);
        expect(patternWordBoundry.test(subject05)).toBe(true);

        const parentheses = /(.png)$/;

        expect(parentheses.test(subject01)).toBe(false);
        expect(parentheses.test(subject02)).toBe(false);
        expect(parentheses.test(subject03)).toBe(true);                     // not working neither
        expect(parentheses.test(subject04)).toBe(false);
        expect(parentheses.test(subject05)).toBe(true);

        // lets try this

        const anchorPattern = /^.png$/;
        const subjects = { subject01, subject02, subject03, subject04, subject05 };
        let subjectsAndStatus = [];

        Object.keys(subjects).forEach((property) => { 
            const last4 = subjects[property].slice(-4);
            const isMatch = anchorPattern.test(last4);
            subjectsAndStatus.push({ last4, isMatch });
        });
    });

});
