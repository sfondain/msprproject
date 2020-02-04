const connection = require('../Screens/Login');

describe('Tests Login.js', () => {
    test('connection()', () => {
        this.state.mail = '';
        expect(connection()).toThrowError(loginError);
    });
});