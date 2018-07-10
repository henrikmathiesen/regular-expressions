describe('the g flag', () => {

    it('should get a basic understandment - 1', () => {
        const result = 'aaa'.match(/a/);
        expect(result.length).toBe(1);
    });

    it('should get a basic understandment - 2', () => {
        const result = 'aaa'.match(/a/g);
        expect(result.length).toBe(3);
    });

    it('should get a basic understandment', () => { 
        const subject = 'Adam is sad and Bertil is sad';

        const resultWithoutG = subject.replace(/sad/, 'happy');
        const resultWithG = subject.replace(/sad/g, 'happy');

        expect(resultWithoutG).toBe('Adam is happy and Bertil is sad');
        expect(resultWithG).toBe('Adam is happy and Bertil is happy');

    });

});
