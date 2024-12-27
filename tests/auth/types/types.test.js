describe('Pruebas en types.js', () => { 
    test('debe de regresar estos types ', () => { 
        const types = {
            login: 'LOGIN',
            logout: 'LOGOUT'
        };
        expect(types).toEqual({ login: 'LOGIN', logout: 'LOGOUT' });
     })
 })