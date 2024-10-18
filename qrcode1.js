const QRCode = require('qrcode');

// Function to generate a QR code
function generateQRCode(data) {
    QRCode.toDataURL(data, (err, url) => {
        if (err) {
            console.error('Error generating QR code', err);
            return;
        }
        console.log('Generated QR code URL:', url);
    });
}

// Generate a QR code for a driver or vehicle
generateQRCode('https://myapp.com/driver/123');

