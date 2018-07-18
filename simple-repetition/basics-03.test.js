describe('Basics 03', () => {

    it('should test 1', () => {

        const pattern = /(10)+/g;
        const subject = '10100010';

        // remeber that .exec should be looped over in order to get all matches for the g flag
        const result = pattern.exec(subject);
        expect(result.length).toBe(2);
        expect(result[0]).toBe('1010');             // the result
        expect(result[1]).toBe('10');               // the capturing group


        const patternToo = /(10)+/g;                // We must define a new variable since .exec above mutates the result array

        let execMatches = [];
        let matches = [];
        while ((execMatches = patternToo.exec(subject)) !== null) {
            matches.push(execMatches[0]);
        }

        // Here we get all the matches (including the last 10)
        expect(matches.length).toBe(2);
        expect(matches[0]).toBe('1010');
        expect(matches[1]).toBe('10');
    });

    it('should test 2', () => { 

        // .match on string is more simple
        // But docs says that it is iffy to use with capture groups and g flag
        // Lets test it

        const pattern = /(10)+/g;
        const subject = '10100010';

        // It is not iffy! We get the same result (in an easier form)
        // But we dont get the capturing group
        const result = subject.match(pattern);
        expect(result.length).toBe(2);
        expect(result[0]).toBe('1010');
        expect(result[1]).toBe('10');
    });

});
