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

