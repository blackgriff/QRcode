import React from 'react';
import { render, screen } from '@testing-library/react';
import QRCodeDisplay from '../QRCodeDisplay';

describe('QRCodeDisplay Component', () => {
    test('renders QR code with driver name', () => {
        render(<QRCodeDisplay qrCodeUrl="http://test.com/qr" driverName="John Doe" vehicleInfo="Vehicle XYZ" />);
        
        // Check for driver name and vehicle info
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Vehicle XYZ')).toBeInTheDocument();

        // Check for QR code image
        const qrCode = screen.getByAltText('QR Code');
        expect(qrCode).toHaveAttribute('src', 'http://test.com/qr');
    });
});
