import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer component', ()=>{
    test('render the footer text correctly', ()=>{
        render(<Footer />);

        const footerText = screen.getByText(/Copyright © 2023 - Developed by/i);
        const linkElement = screen.getByText(/Alejandro Maure/i);
    
        expect(footerText).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://alejandromaure.netlify.app/');
    })
})