// TripList.test.js

import TripList from './TripList'; // Replace with the correct path to the TripList component
import { render, screen, fireEvent } from '@testing-library/react';

describe('TripList User Interactions', () => {
    it('displays details when a trip is clicked', () => {
        const trips = ['Trip 1', 'Trip 2', 'Trip 3']; // Replace with actual trip names
        render(<TripList trips={trips} />);

        // Simulate clicking on a specific trip
        fireEvent.click(screen.getByText('Trip 1')); // Replace 'Trip 1' with the actual trip name

        // Verify that the details of the clicked trip are displayed
        expect(screen.getByText('Details for Trip 1')).toBeInTheDocument(); // Replace with the expected details text
    });

    it('selects a trip when it is hovered over', () => {
        const trips = ['Trip 1', 'Trip 2', 'Trip 3']; // Replace with actual trip names
        render(<TripList trips={trips} />);

        // Simulate hovering over a specific trip
        fireEvent.mouseOver(screen.getByText('Trip 2')); // Replace 'Trip 2' with the actual trip name

        // Verify that the trip is selected or highlighted
        expect(screen.getByText('Trip 2')).toHaveStyle('background-color: yellow'); // Replace with the expected style or behavior
    });
});