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

    it('ends with .png --- REMEMBER TO ESCAPE THE DOT', () => {
        const pattern = /\.png$/;

        const subject01 = 'foo.pn';
        const subject02 = 'foo.pg';
        const subject03 = 'foo.ppng';
        const subject04 = 'foo.pngx';
        const subject05 = 'foo.png';

        expect(pattern.test(subject01)).toBe(false);
        expect(pattern.test(subject02)).toBe(false);
        expect(pattern.test(subject03)).toBe(false);
        expect(pattern.test(subject04)).toBe(false);
        expect(pattern.test(subject05)).toBe(true);
    });

    it('should test word boundary -- test 1', () => {
        const subject01 = 'Can you deposit?';
        const subject02 = 'We look for sit!';

        const patternWithoutBoundary = /sit/;

        expect(patternWithoutBoundary.test(subject01)).toBe(true);
        expect(patternWithoutBoundary.test(subject02)).toBe(true);

        const patternWithBoundary = /\bsit\b/;

        expect(patternWithBoundary.test(subject01)).toBe(false);
        expect(patternWithBoundary.test(subject02)).toBe(true);
    });

    it('should test word boundary -- test 2', () => {
        const subject = 'Vi letar efter ån i ånäsånsån';
        const pattern = /\bån\b/;

        const result = pattern.exec(subject);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('ån');
    });

    it('should test word boundary -- test 3', () => { 
        const subject = '4 times 44 sheets of a4';
        const pattern = /\b4\b/;

        const result = pattern.exec(subject);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('4');
    });

});
