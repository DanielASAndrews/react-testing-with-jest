jest.mock('./request');

import * as times from './times';

describe('Times API', () => {

    // The assertion for a promise must be returned.
    it('works with promises', () => {
        expect.assertions(1);
        return times.getTime(1).then(data => expect(data).toEqual('30'));
    });


    // Testing for async using `.resolves`.
    it('works with resolves', () => {
        expect.assertions(1);
        return expect(times.getTime(1)).resolves.toEqual('30');
    });

    // Testing for async errors using Promise.catch.
    test('tests error with promises', () => {
        expect.assertions(1);
        return times.getTime(3).catch(e =>
            expect(e).toEqual({
                error: 'User with 3 not found.',
            }),
        );
    });

    // Testing for async errors using `.rejects`.
    it('tests error with rejects', () => {
        expect.assertions(1);
        return expect(times.getTime(3)).rejects.toEqual({
            error: 'User with 3 not found.',
        });
    });
});