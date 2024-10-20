import React from 'react';
import { render, screen } from '@testing-library/react';
import DriverProfile from '../DriverProfile';
import axios from 'axios';

jest.mock('axios');

describe('DriverProfile Component', () => {
    test('renders driver name and earnings', async () => {
        // Mock the API call
        const driverData = { name: 'John Doe', earnings: 5000, qrCodeUrl: 'http://test.com/qr' };
        axios.get.mockResolvedValue({ data: driverData });

        render(<DriverProfile />);

        // Check if driver name is rendered
        expect(await screen.findByText('John Doe')).toBeInTheDocument();
        // Check if earnings are displayed correctly
        expect(await screen.findByText('Earnings: $5000')).toBeInTheDocument();
    });
});
