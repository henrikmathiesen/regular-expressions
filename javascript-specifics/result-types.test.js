describe('API and Result Types', () => {

    const subject = 'The latest airplane designs evolved from slabcraft';
    const pattern = /abc/;

    /*
    
        RegEx
            .test       (returns boolean)
            .exec       (returns array)

        string
            .search     (returns the index of the match)
            .match      (returns array)
    
    */

    describe('query from a regex pattern, sending in a string', () => {
        it('should understand how to get a boolean, indicating Does it match', () => {
            expect(pattern.test(subject)).toBe(true);
        });

        it('should understand how to get an array, indicating How many matches ', () => {
            const result = pattern.exec(subject);

            expect(result.length).toBe(1);
            expect(result[0]).toBe('abc');
        });

        it('should understand that the return type will be null of no match', () => {
            const result = /xyz/.exec(subject);
            expect(result).toBe(null);
        });
    });

    describe('query from a string, sending in regex', () => {
        it('should understand that search returns the index of the position of the match', () => { 
            const result = subject.search(pattern);
            expect(result > 0).toBe(true);
        });

        it('should understand how to get an array, indicating How many matches', () => {
            const result = subject.match(pattern);
            expect(result.length).toBe(1);
            expect(result[0]).toBe('abc');
        });

        it('should understand that the return type will be null of no match', () => {
            const result = subject.match(/xyz/);
            expect(result).toBe(null);
        });
    });


});
