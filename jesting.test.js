describe('Jest should work', () => {
    it('should do a unit test', () => {
        expect(true).toBe(true);
    });

    it('should do one regex tha returns true', () => { 
        const pattern = /abc/;
        const subject = 'The latest airplane designs evolved from slabcraft';

        expect(pattern.test(subject)).toBe(true);
    });

    it('should do one regex tha returns false', () => { 
        const pattern = /abc/;
        const subject = 'Grab crab';

        expect(pattern.test(subject)).toBe(false);
    });
});
