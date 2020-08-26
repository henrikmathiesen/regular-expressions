describe('grouping', () => {

    // Lets say we want to match a pattern of a letter followed by a number

    const pattern = /^([a-zA-Z][0-9])+$/;

    it('should test - 1', () => {
        const result = 'A1'.match(pattern);
        expect(result.length).toBeTruthy();
    });

    it('should test - 2', () => {
        const result = 'a1B1'.match(pattern);
        expect(result.length).toBeTruthy();
    });

    it('should test - 3', () => {
        const result = 'a1B'.match(pattern);
        expect(result).toBe(null);
    });

});

describe('grouping - 2', () => {

    const pattern01 = /^(\d{8})-?\d{4}$/;
    const pattern02 = /^\d{8}-?\d{4}$/;

    it('should test - 1', () => { 
        const str01 = '123456789112';
        const str02 = '12345678-9112';

        const test1A = pattern01.test(str01);
        const test1B = pattern01.test(str02);

        const test2A = pattern02.test(str01);
        const test2B = pattern02.test(str02);

        expect(test1A).toBe(true);
        expect(test1B).toBe(true);

        expect(test2A).toBe(true);
        expect(test2B).toBe(true);

    });

});
