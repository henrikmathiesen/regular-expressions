describe('Result types', () => {

    const subject = 'The latest airplane designs evolved from slabcraft';
    const pattern = /abc/;

    it('should understand how to get a boolean, indicating Does it match', () => {
        expect(pattern.test(subject)).toBe(true);
    });

    it('should understand how to get an array, indicating How many matches ', () => {
        const result = pattern.exec(subject);

        expect(result.length).toBe(1);
        expect(result[0]).toBe('abc');
    });

    it('should understand how to get an array, indicating How many matches, this way', () => {
        const result = subject.match(pattern);
        expect(result.length).toBe(1);
        expect(result[0]).toBe('abc');
    });

    describe('no matches with array return type', () => {
        it('should understand that the return type will be null of no match -- A', () => { 
            const result = /xyz/.exec(subject);
            expect(result).toBe(null);
        });

        it('should understand that the return type will be null of no match -- B', () => { 
            const result = subject.match(/xyz/);
            expect(result).toBe(null);
        });
    });

});
