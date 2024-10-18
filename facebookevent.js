// Assuming you have an OAuth token for Facebook's API
const axios = require('axios');

const createFacebookEvent = async (eventData, accessToken) => {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/v12.0/me/events?access_token=${accessToken}`,
            eventData
        );
        return response.data;
    } catch (error) {
        console.error('Error creating Facebook event', error);
        return null;
    }
};

// Event data example
const eventData = {
    name: "Sample Event",
    start_time: "2024-12-15T15:00:00",
    end_time: "2024-12-15T18:00:00",
    description: "This is a sample event",
    location: "1234 Sample St, Sample City"
};

createFacebookEvent(eventData, 'your_facebook_access_token');

