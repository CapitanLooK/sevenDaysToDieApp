import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar component', ()=>{
    test('render the links correctly', ()=>{

        render(<Navbar/>);

        const imageElement = screen.getByAltText('7 days to die image logo')
        const homeLinkElement = screen.getByText(/Home/)
        const aboutLinkElement = screen.getByText(/About/)
        const loginLinkElement = screen.getByText(/Login/)

        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'https://static.wikia.nocookie.net/markiplier/images/3/35/7_Days_To_Die_Logo.png');


        expect(homeLinkElement).toBeInTheDocument();
        expect(aboutLinkElement).toBeInTheDocument();
        expect(loginLinkElement).toBeInTheDocument();
    })
})