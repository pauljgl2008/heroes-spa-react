import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
     })

     test('debe de (login) llamar al login autenticar y establecer el user', () => { 
            const action = { type: types.login, payload: { name: 'Paúl', id: '123' } }
            const state = authReducer({ logged: false }, action);
            expect(state).toEqual({ logged: true, user: action.payload });
      })
     test('debe de (logout) borrar el name del usuario y logged en false', () => { 
            const action = { type: types.logout }
            const newState = authReducer({ logged: true}, action);
            expect(newState).toEqual({ logged: false });
      })
 })