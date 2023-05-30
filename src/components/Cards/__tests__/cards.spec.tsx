import React from 'react'
import {render} from '@testing-library/react';
import { Cards } from '../Cards'

describe ('Cards component', ()=>{
    test('renders the correct day and message', ()=>{
        const nextBloodMoon = 5;
        const { getByText } = render(<Cards nextBloodMoon={nextBloodMoon}/>);

        const dayElement = getByText(`dia ${nextBloodMoon}`);
        expect(dayElement).toBeInTheDocument();

        const messageElement = getByText(/Hoy es la luna!/);
        expect(messageElement).toBeInTheDocument();
    })

    test('disables the button', () =>{
        const nextBloodMoon = 7;
        const { getByText } = render(<Cards nextBloodMoon={nextBloodMoon}/>);

        const buttonElement = getByText('Voy a sobrevivir');
        expect(buttonElement).toBeDisabled();
    })
})