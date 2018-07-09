describe('match phone number', () => {

    // 415-730-0000
    // The pattern here is 3 digits dash 3 digits dash 4 digits

    const sample = 'call me at 415-730-0000, thanks';

    it('should match - 1', () => {
        const result = sample.match(/\d\d\d-\d\d\d-\d\d\d/);
        expect(result.length).toBe(1);

        // \d is character class, it represent numbers
        // \D means not a number
    });

    it('should match - 2', () => { 
        // use {} for quantity , can use {3,5} for 3-5, can use {3,} for 3 or more
        const result = sample.match(/\d{3}-\d{3}-\d{4}/);
        expect(result.length).toBe(1);
    });

    it('should test the inverse - 1', () => {
        const result = sample.match(/\D/);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('c');
    });

    it('should test the inverse - 2', () => {
        const result = sample.match(/\D/g);

        expect(result.length > 1).toBe(true);
        expect(result[0]).toBe('c');
        expect(result[result.length - 1]).toBe('s');
    });

    // We create our own character class with []
    // So, lets extract everything that is NOT the phone number
    // We use ^ to negate
    it('should be fun', () => {
        const noNumbers = sample.match(/\D/g).join('');
        const noDashes = noNumbers.match(/[^-]/g).join('');

        expect(noDashes).toBe('call me at , thanks');
    });


});
