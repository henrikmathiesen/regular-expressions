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

});
