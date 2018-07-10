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
