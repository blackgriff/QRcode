const uberAPI = require('uber-api');

// Function to get available shuttles from hotel
const getShuttles = async (hotelLocation) => {
    try {
        const shuttles = await uberAPI.getShuttles({ startLocation: hotelLocation });
        return shuttles;
    } catch (error) {
        console.error('Error fetching shuttles', error);
        return [];
    }
};

getShuttles('123 Hotel St, Sample City');
