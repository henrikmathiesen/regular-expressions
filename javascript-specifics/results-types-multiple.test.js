describe('Results Types, multiple with exec and match', () => {

    describe('query from regex pattern', () => {

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

            // With a capturing group we get 2 matches (removing g flag makes no difference)
            expect(result.length).toBe(2);
        });

        it('should get multiple matches with exec -- test 3', () => { 
            const subject = '4 piles of 4 A4';
            const result = /([4+])|([\d*4\d*])/g.exec(subject);

            // With a capturing group surrounding each search term, we get 3 matches
            expect(result.length).toBe(3);
        });
    });

    describe('query from string', () => {

    });
});
