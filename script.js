document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map and set its view to a specific location and zoom level
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example data for markers (replace with your actual data)
    const locations = [
        { lat: 51.5, lng: -0.09, title: "Location 1", description: "This is the first location." },
        { lat: 51.51, lng: -0.1, title: "Location 2", description: "This is the second location." },
        { lat: 51.49, lng: -0.08, title: "Location 3", description: "This is the third location." }
    ];

    // Loop through your data and add markers to the map
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.title}</b><br>${location.description}`);
    });
});
