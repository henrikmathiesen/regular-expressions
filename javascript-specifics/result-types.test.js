describe('Result types', () => {

    const subject = 'The latest airplane designs evolved from slabcraft';
    const pattern = /abc/;

    it('shouls understand how to get a boolean, indicating Does it match', () => {
        expect(pattern.test(subject)).toBe(true);
    });

    it('shold understand how to get an array, indicating How many matches ', () => { 
        const result = pattern.exec(subject);

        expect(result.length).toBe(1);
        expect(result[0]).toBe('abc');
    });

});
