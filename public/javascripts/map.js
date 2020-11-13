var mainMap = L.map('main_map').setView([4.7490318,-74.0364935,17.5], 30);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    style: 'mapbox://styles/mapbox/streets-v11',
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWphbHZhcmV6ODkiLCJhIjoiY2toOXRsejZnMDBlZzM0bG1ldHR6dTh5cCJ9.k1MgKQFWgZ1eFqMSKgZn2g'
}).addTo(mainMap);

L.marker([4.7490318,-74.0364935,17.5]).addTo(mainMap);