import React from 'react'
import { render, screen } from '@testing-library/react';
import { ResultComponent } from '../ResultComponent';

describe('ResultComponent', ()=>{
    test('renders the result correctly when it is a number', ()=>{
        const result = 5;
        const error = null;

        render(<ResultComponent result={result} error={error}/>);

        const resultText = screen.getByText(/Faltan 5 dias para la proxima luna/i);
        const errorElement = screen.queryByText(/error message/i);

        expect(resultText).toBeInTheDocument();
        expect(errorElement).not.toBeInTheDocument();
    });

    test('renders the result correctly when it is a string', ()=>{
        const result = 'Result text';
        const error = null;

        render(<ResultComponent result={result} error={error}/>);

        const resultText = screen.getByText(/Result text/i);
        const errorElement = screen.queryByText(/Error message/i);

        expect(resultText).toBeInTheDocument();
        expect(errorElement).not.toBeInTheDocument();
    });

    test('renders the error message correctly', ()=>{
        const result = '';
        const error = 'Error message';

        render(<ResultComponent result={result} error={error}/>);

        const resultText = screen.queryByText(/Faltan \d+ dias para la proxima luna de sangre/i);
        const  errorElement = screen.getByText(/Error message/);

        expect(resultText).not.toBeInTheDocument();
        expect(errorElement).toBeInTheDocument();

    })
})