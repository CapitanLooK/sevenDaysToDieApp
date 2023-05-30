import React from 'react';
import { render, screen } from '@testing-library/react';
import { CWmain } from '../CWmain';

describe('CWmain', ()=>{
    test('renders the SearchInput component correctly', ()=>{
        render (<CWmain/>);

        const searchInput = screen.getByPlaceholderText('Ingresa el dia actual');

        expect (searchInput).toBeInTheDocument()
    })
})