describe('input must be binary', () => {

    const pattern = /^([0]|[1])+$/;

    it('should test 1', () => { 
        const result = '10010011'.match(pattern);
        expect(result.length).toBeTruthy();
    });

    it('should test 2', () => { 
        const result = '10010012'.match(pattern);
        expect(result).toBe(null);
    });

    it('should test 3', () => { 
        const result = '11111111'.match(pattern);
        expect(result.length).toBeTruthy();
    });

});
