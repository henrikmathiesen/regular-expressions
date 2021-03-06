describe('Building our first regex -- validating a hex color code', () => {

    /*

        Validating a hex color code
    
        First ask: What is the pattern?

        # AF 12 34

        It starts with a hash, then 3 groups of 2 characters
        Each character can be either A-F or 0-9
    
    */

    samples = {
        sample01: '#FF0012',
        sample02: 'Ff0012',
        sample03: 'A1',
        sample04: '13A',
        sample05: '#13A',
        sample06: 'blue',
        sample07: '#XYz87A',
        sample08: '#ff1122 test',
        sample09: 'test#ff1122test',
        sample10: ' #aabbcc '
    };

    it('should test -- 01', () => {
        // The brackets are used to group a range of acceptable characters
        const pattern = /#[ABCDEF0123456789]/;
        const result = pattern.exec(samples.sample01);

        expect(result.length).toBe(1);
        expect(result[0]).toBe('#F');

        // The problem here is that it only finds the first 2 characters
    });

    it('should test -- 02', () => {
        /* 
            We need to indicate that we expect more characters to match
            There are 3 basic quantifiers

            ?   =   match 0-1 times
            *   =   match 0-more times
            +   =   match 1-more times
        */

        const pattern = /#[ABCDEF0123456789]+/;
        const result = pattern.exec(samples.sample01);

        expect(result.length).toBe(1);
        expect(result[0]).toBe(samples.sample01);
        // It works
    });

    it('should test -- 03', () => {
        // Now we can simplify this regex

        const pattern = /#[A-F0-9]+/;
        const result = pattern.exec(samples.sample01);

        expect(result.length).toBe(1);
        expect(result[0]).toBe(samples.sample01);
        // It works
    });

    describe('Being more precise', () => {
        /* 
            What if the hex color code does not have a hash sign?
            What if the color code is in regular and CAPS?
        */

        it('should not get a match with our simple pattern', () => {
            const pattern = /#[A-F0-9]+/;
            const result = pattern.exec(samples.sample02);

            expect(result).toBe(null);
        });

        it('should get a match with this pattern', () => {
            // ? makes hash optional
            // i is a modifier that tells regex to ignore casing
            const pattern = /#?[A-F0-9]+/i;
            const result = pattern.exec(samples.sample02);

            expect(result.length).toBe(1);
            expect(result[0]).toBe(samples.sample02);
        });

        it('should also match sample01', () => {
            const pattern = /#?[A-F0-9]+/i;
            const result = pattern.exec(samples.sample01);

            expect(result.length).toBe(1);
            expect(result[0]).toBe(samples.sample01);
        });

        it('should know that we have a problem with sample 3, we dont want it to match', () => {
            const pattern = /#?[A-F0-9]+/i;
            const result = pattern.exec(samples.sample03);

            expect(result.length).toBe(1);
        });

        it('should replace the + sign with a more precise specifier', () => {
            // We want exactly 6 characters
            const pattern = /#?[A-F0-9]{6}/i;
            const result03 = pattern.exec(samples.sample03);
            const result01 = pattern.exec(samples.sample01);
            const result02 = pattern.exec(samples.sample02);

            expect(result03).toBe(null);        // not a match
            expect(result01.length).toBe(1);    // match
            expect(result02.length).toBe(1);    // match
        });

        it('should however know that 3 characters IS a valid color code', () => {
            // We use the pipe character to indicate OR, which is basicly 2 branches that will both be regarded as matches
            const pattern = /#?[A-F0-9]{6}|[A-F0-9]{3}/i;

            const result01 = pattern.exec(samples.sample01);
            const result02 = pattern.exec(samples.sample02);
            const result03 = pattern.exec(samples.sample03);
            const result04 = pattern.exec(samples.sample04);

            expect(result03).toBe(null);        // not a match
            expect(result01.length).toBe(1);    // match
            expect(result02.length).toBe(1);    // match
            expect(result04.length).toBe(1);    // match
        });

        it('should see a little bug with the pattern', () => {
            const pattern = /#?[A-F0-9]{6}|[A-F0-9]{3}/i;
            const result = pattern.exec(samples.sample05);

            expect(result.length).toBe(1);                      // so far so good
            expect(result[0]).not.toBe(samples.sample05);       // but it doesnt match exactly
            expect(result[0]).toBe('13A');                      // it matches this, it ignores the hash
        });

        it('should then know that we have to tell regex to include the hash for both pipes', () => {
            // We do that by adding parentheses
            const pattern = /#?([A-F0-9]{6}|[A-F0-9]{3})/i;
            const result = pattern.exec(samples.sample05);

            expect(result[0]).toBe(samples.sample05);           // now it does match what we want

            // also, important, the results array now contains 2 items
            expect(result.length).toBe(2);
            expect(result[1]).toBe('13A');                      // the second match is in index 1

            // the parentheses(?) remembers submatch... (I have difficulty hearing what the teacher says in the video)
        });

    });

    describe('Fine tuning even more', () => {
        it('test 01', () => {
            const pattern = /#?([A-F0-9]{6}|[A-F0-9]{3})/i;

            const result06 = pattern.exec(samples.sample06);
            const result07 = pattern.exec(samples.sample07);
            const result08 = pattern.exec(samples.sample08);
            const result09 = pattern.exec(samples.sample09);
            const result10 = pattern.exec(samples.sample10);

            expect(result06).toBe(null);

            // Problem! Neither of these should match
            expect(result07.length).toBeTruthy();
            expect(result08.length).toBeTruthy();
            expect(result09.length).toBeTruthy();
            expect(result10.length).toBeTruthy();
        });

        it('should fix the problem above with anchoring', () => {
            // ^ will anchor at the start of the string and $ will anchor at the end
            const pattern = /^#?([A-F0-9]{6}|[A-F0-9]{3})$/i;

            const result07 = pattern.exec(samples.sample07);
            const result08 = pattern.exec(samples.sample08);
            const result09 = pattern.exec(samples.sample09);
            const result10 = pattern.exec(samples.sample10);

            // Problem fixed
            expect(result07).toBe(null);
            expect(result08).toBe(null);
            expect(result09).toBe(null);
            expect(result10).toBe(null);
        });

        it('should however consider matching sample10 since its just white space', () => { 
            const pattern = /^#?([A-F0-9]{6}|[A-F0-9]{3})$/i;

            // We can do that in 2 ways

            // 1) using trim()
            const result10A = pattern.exec(samples.sample10.trim());
            expect(result10A.length).toBeTruthy();

            // 2) Adding \s* to our regex, this will allow all common white space (like space and tab)
            const patternAllowingWhiteSpace = /^\s*#?([A-F0-9]{6}|[A-F0-9]{3})\s*$/i;
            const result10B = patternAllowingWhiteSpace.exec(samples.sample10);
            expect(result10B.length).toBeTruthy();
        });
    });

});
