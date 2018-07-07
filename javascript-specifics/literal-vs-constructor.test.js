describe('Literal vs Constructor', () => {

    /*
        There are 2 ways to create a RegExp object: a literal notation and a constructor.

        /ab+c/i;
        new RegExp('ab+c', 'i');
        new RegExp(/ab+c/, 'i');

        These are the same.

        Use literal notation when the regular expression will remain constant. For example, 
        if you use literal notation to construct a regular expression used in a loop, 
        the regular expression won't be recompiled on each iteration.

        Use the constructor function when you know the regular expression pattern will be changing, 
        or you don't know the pattern and are getting it from another source, such as user input.

        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    */

    const subject = 'The latest airplane designs evolved from slabcraft';

    it('should do one regex that returns true, using literal notation', () => {
        const pattern = /abc/;
        expect(pattern.test(subject)).toBe(true);
    });

    it('should do one regex that returns true, using constructor', () => {
        const pattern = new RegExp(/abc/);
        expect(pattern.test(subject)).toBe(true);
    });

});
