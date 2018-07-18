describe('Basics 02', () => {

    // A capturing group is a group of sub-patterns that is written inside Parentheses

    it('should understand capturing groups 1', () => { 
        /*
            Lets say we want to search for all name.png files, but we only want to return the name
            We can use a capturing group to capture just the name
        */

        const pattern = /^(\w+).png$/;

        const test01 = 'foo.png'.match(pattern);
        expect(test01[0]).toBe('foo.png');          // the captured pattern
        expect(test01[1]).toBe('foo');              // the captured group

        const test02 = 'foo.jpg'.match(pattern);
        expect(test02).toBeNull();
    });

    it('should understand capturing groups 2', () => { 

        // If we put quantifier after a capturing group then it repeats the whole capturing group.

        const pattern01 = /(10)+/;
        const result01 = '10101010'.match(pattern01);
        expect(result01.length).toBe(2);
        expect(result01[0]).toBe('10101010');       // the captured pattern
        expect(result01[1]).toBe('10');             // the captured group
        
        // This is the behavior without capturing group

        const pattern02 = /10+/;
        const result02 = '10101010'.match(pattern02);
        expect(result02.length).toBe(1);
        expect(result02[0]).toBe('10');             // the captured pattern

        // Lets try without a little more

        const result03 = '100'.match(pattern02);
        expect(result03.length).toBe(1);
        expect(result03[0]).toBe('100');            // as we can see, + means "repeat just the zero"

        const result04 = '1110'.match(pattern02);
        expect(result04.length).toBe(1);
        expect(result04[0]).toBe('10');             // it just matches 10
    });

});
