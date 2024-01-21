// Wishlist.test.js

import Wishlist from './Wishlist'; // Replace with the correct path to the Wishlist component

describe('Wishlist Functionality', () => {
    it('adds trips to the Wishlist correctly', () => {
        // Instantiate the Wishlist class or function
        const wishlist = new Wishlist();

        // Add a trip to the Wishlist
        wishlist.addTrip('Trip Name'); // Replace 'Trip Name' with the actual trip name

        // Verify that the trip is added to the Wishlist
        expect(wishlist.getTrips()).toContain('Trip Name'); // Replace 'Trip Name' with the actual trip name
    });

    it('clears the Wishlist correctly', () => {
        const wishlist = new Wishlist(['Trip 1', 'Trip 2']);
        wishlist.clearWishlist();
        expect(wishlist.getTrips()).toHaveLength(0);
    });

    it('maintains data integrity and consistency', () => {
        const wishlist = new Wishlist();
        wishlist.addTrip('Trip 1');
        wishlist.addTrip('Trip 2');
        wishlist.removeTrip('Trip 1');
        expect(wishlist.getTrips()).toEqual(['Trip 2']);
    });

    it('maintains data integrity and consistency', () => {
        const wishlist = new Wishlist();
        wishlist.addTrip('Trip 1');
        console.log(wishlist.getTrips()); // Check the trips after adding 'Trip 1'
        wishlist.addTrip('Trip 2');
        console.log(wishlist.getTrips()); // Check the trips after adding 'Trip 2'
        wishlist.removeTrip('Trip 1');
        console.log(wishlist.getTrips()); // Check the trips after removing 'Trip 1'
        expect(wishlist.getTrips()).toEqual(['Trip 2']);
    });

    it('handles errors correctly', () => {
        const wishlist = new Wishlist();
        expect(() => wishlist.addTrip(null)).toThrow('Invalid trip');
    });
});