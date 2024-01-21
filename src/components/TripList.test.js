// TripList.test.js

import TripList from './TripList'; // Replace with the correct path to the TripList component
import { render, screen, fireEvent } from '@testing-library/react';

describe('TripList User Interactions', () => {
    it('displays details when a trip is clicked', () => {
        const trips = ['Trip 1', 'Trip 2', 'Trip 3'];
        render(<TripList trips={trips} />);

        // Simulate clicking on a specific trip
        fireEvent.click(screen.getByText('Trip 1'));

        // Add console.log to debug the behavior after clicking
        console.log(screen.getByText('Details for Trip 1'));

        expect(screen.getByText('Details for Trip 1')).toBeInTheDocument();
    });

    it('selects a trip when it is hovered over', () => {
        const trips = ['Trip 1', 'Trip 2', 'Trip 3'];
        render(<TripList trips={trips} />);

        // Simulate hovering over a specific trip
        fireEvent.mouseOver(screen.getByText('Trip 2'));

        // Add console.log to debug the behavior after hovering
        console.log(screen.getByText('Trip 2'));

        expect(screen.getByText('Trip 2')).toHaveStyle('background-color: yellow');
    });
});