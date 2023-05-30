import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../SearchInput';

describe('SearchInput component', () => {
    test('renders the search input correctly', () => {
        render(<SearchInput />);

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');
        const searchButton = screen.getByRole('button', { name: /Buscar/i });

        expect(searchInput).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
        expect(searchButton).toBeDisabled()
    });

    test('updates the input value correctly', () => {
        render(<SearchInput />);

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');
        fireEvent.change(searchInput, { target: { value: 5 } });

        expect(searchInput).toHaveValue('5')

    });

    test('disables search button and show error message when inpuit is invalid', () => {
        render(<SearchInput />)

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');
        const searchButton = screen.getByRole('button', { name: /Buscar/i });

        fireEvent.change(searchInput, { target: { value: 'abc' } });

        expect(searchButton).toBeDisabled();
        expect(screen.getByText(/Ingresa solo numeros hasta el 6986/i)).toBeInTheDocument();
    });

    test('enables search button an clears error message when input is valid', ()=>{
        render(<SearchInput />);

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');
        const searchButton = screen.getByRole('button', { name: /Buscar/i });

        fireEvent.change(searchInput, {target: {value: '6'}});

        expect(searchButton).not.toBeDisabled();
        expect(screen.queryByText(/Ingresa solo numeros hasta el 6986/i)).not.toBeInTheDocument()
    });

    test('shows the result correctly when it is a string', ()=>{
        render(<SearchInput />);

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');
        const searchButton = screen.getByRole('button', { name: /Buscar/i });

        fireEvent.change(searchInput, { target: { value: '30'}});
        fireEvent.click(searchButton);

        expect(screen.getByText(/Faltan 5 dias para la proxima luna de sangre/i)).toBeInTheDocument();
        expect(searchButton).not.toBeDisabled();
    })


})