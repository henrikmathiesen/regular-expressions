describe('the g flag', () => {

    it('should get a basic understandment - 1', () => { 
        const result = 'aaa'.match(/a/);
        expect(result.length).toBe(1);
    });

    it('should get a basic understandment - 2', () => { 
        const result = 'aaa'.match(/a/g);
        expect(result.length).toBe(3);
    });

});
