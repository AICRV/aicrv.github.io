---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let main_station = L.marker([49.27965, -122.91770], {
            icon: L.divIcon({
                className: 'fas fa-map-pin',
                html: '',
                iconSize: [200, 80]
            })
        }).addTo(map);
    }
});
