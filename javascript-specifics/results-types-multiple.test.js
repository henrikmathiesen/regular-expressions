describe('Results Types, multiple with exec and match', () => {

    describe('exec: query from regex pattern', () => {

        it('should get one match with exec', () => {
            const subject = '4 piles of 4 A4';
            const result = /4/.exec(subject);

            expect(result.length).toBe(1);
        });

        it('should get multiple matches with exec -- test 1', () => {
            const subject = '4 piles of 4 A4';
            const result = /4/g.exec(subject);

            // I expected to actually get a length greater than 1
            expect(result.length > 1).toBe(false);
        });

        it('should get multiple matches with exec -- test 2', () => {
            const subject = '4 piles of 4 A4';
            const result = /(4)/g.exec(subject);

            // This is how it is
            // With a capturing group (parentheses) we get 2 items in the array
            // The match at index 0 and the capturing group (also at index 0)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

            expect(result.length).toBe(2);
        });

        it('should get multiple matches with exec -- test 3', () => {
            // BUT! I want all the 4:s in the string.

            const subject = '4 piles of 4 A4';
            const pattern = /4/g;
            let execMatches = [];
            let matches = [];

            while ((execMatches = pattern.exec(subject)) !== null) {
                // The match is always at index 0
                // The rest of the items are capturing groups
                matches.push(execMatches[0]);
            }

            // Here we finaly get all the 4:s in the string
            expect(matches.length).toBe(3);
        });

        // IMPORTANT!
        // "exec with a global regular expression is meant to be used in a loop"
        // https://stackoverflow.com/questions/9214754/what-is-the-difference-between-regexp-s-exec-function-and-string-s-match-fun
    });

    describe('match: query from string', () => {

        /*
            If you need to know if a string matches a regular expression RegExp, use RegExp.test().
            If you only want the first match found, you might want to use RegExp.exec() instead.
            if you want to obtain capture groups and the global flag is set, you need to use RegExp.exec() instead.
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
        */

        it('should get one match with match', () => { 
            const subject = '4 piles of 4 A4';
            const result = subject.match(/4/);
        });

    });
});
