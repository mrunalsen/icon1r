const axios = require('axios');
const fs = require('fs');
const path = require('path');
// Api endpoint
const API_URL = 'http://localhost:3000/icons';
const ICON_SOURCE_FOLDER = 'icon-source';

async function fetchAndSaveSVGs() {
    try {
        // Making a GET request to the JSON server
        const response = await axios.get(API_URL);

        // Check if the response is successful
        if (response.status === 200) {
            const icons = response.data;

            // Create the icon-source folder if it doesn't exist
            if (!fs.existsSync(ICON_SOURCE_FOLDER)) {
                fs.mkdirSync(ICON_SOURCE_FOLDER);
            }

            // Looping through each icon and saving the SVG content to a file
            icons.forEach((icon) => {
                const { id, name, svg } = icon;
                const fileName = `${name}.svg`;
                const filePath = path.join(ICON_SOURCE_FOLDER, fileName);

                // Writing the SVG content to the file
                fs.writeFileSync(filePath, svg);
                console.log(`SVG saved: ${filePath}`);
            });

            console.log('SVGs fetched and saved successfully.');
        } else {
            console.error('Failed to fetch SVGs from the JSON server.');
        }
    } catch (error) {
        console.error('Error fetching SVGs:', error.message);
    }
}

fetchAndSaveSVGs();