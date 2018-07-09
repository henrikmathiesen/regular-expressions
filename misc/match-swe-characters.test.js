describe('match swedish characters', () => {

    const samples = {
        sample01: 'lök',
        sample02: 'pong',
        sample03: 'öl1',
        sample04: '123',
        sample05: '1-b',
        sample06: 'LÖ1',
        sample07: 'L_k'
    };

    describe('should be exacly 3 characters or numbers', () => {
        const pattern = /^[a-ö0-9]{3}$/i;

        it('sample 1 should give 1 match', () => {
            const result = pattern.exec(samples.sample01);
            expect(result.length).toBe(1);
        });

        it('sample 2 should give no match', () => {
            const result = pattern.exec(samples.sample02);
            expect(result).toBe(null);
        });

        it('sample 3 should give 1 match', () => {
            const result = pattern.exec(samples.sample03);
            expect(result.length).toBe(1);
        });

        it('sample 4 should give 1 match', () => {
            const result = pattern.exec(samples.sample04);
            expect(result.length).toBe(1);
        });

        it('sample 5 should give no match', () => {
            const result = pattern.exec(samples.sample05);
            expect(result).toBe(null);
        });

        it('sample 6 should give 1 match', () => {
            const result = pattern.exec(samples.sample06);
            expect(result.length).toBe(1);
        });

        it('sample 7 should give no match', () => {
            const result = pattern.exec(samples.sample07);
            expect(result).toBe(null);
        });
    });

    describe('does \w catch swedish characters?', () => {
        const pattern = /\w/;

        it('should know that it does not', () => {
            const sample = 'å';
            const result = pattern.exec(sample);
            expect(result).toBe(null);
        });

        describe('should know that it DOES catch a-z, A-Z, 0-9, including the _ (underscore) character', () => {
            it('test 1', () => {
                const sample = 'z';
                const result = pattern.exec(sample);
                expect(result.length).toBe(1);
            });

            it('test 2, it does catch capital Z without the i flag', () => {
                const sample = 'Z';
                const result = pattern.exec(sample);
                expect(result.length).toBe(1);
            });
        });

    });


});
