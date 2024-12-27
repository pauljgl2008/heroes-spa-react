import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/index.js"
import { PrivateRoute } from "../../src/router/PrivateRoute.jsx"
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute />', () => {
    test('debe de mostrar el children si no está autenticado', () => {
        Storage.prototype.setItem = jest.fn(); // Mock de localStorage.setItem
        
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Paúl'
            },
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
})