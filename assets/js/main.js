---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map ? window.conference.map.getMap() : undefined;

    if (typeof map !== 'undefined') {
        let main_station = L.marker([49.27965, -122.91770], {
            icon: L.divIcon({
                className: 'fas fa-map-pin',
                html: '',
                iconSize: [200, 80]
            })
        }).addTo(map);
    }

    const initCountdowns = () => {
        const countdowns = document.querySelectorAll('[data-countdown]');
        if (!countdowns.length) {
            return;
        }

        const pad = (value) => String(value).padStart(2, '0');
        const updateCountdown = (el) => {
            const target = new Date(el.getAttribute('data-countdown'));
            if (Number.isNaN(target.getTime())) {
                return;
            }

            const now = new Date();
            const diff = Math.max(0, target - now);
            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            const updatePart = (part, value) => {
                const node = el.querySelector(`[data-part="${part}"]`);
                if (node) {
                    node.textContent = pad(value);
                }
            };

            updatePart('days', days);
            updatePart('hours', hours);
            updatePart('minutes', minutes);
            updatePart('seconds', seconds);
        };

        countdowns.forEach((el) => {
            updateCountdown(el);
            setInterval(() => updateCountdown(el), 1000);
        });
    };

    const initReveals = () => {
        const revealItems = document.querySelectorAll('.reveal');
        if (!revealItems.length) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            revealItems.forEach((item) => item.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        revealItems.forEach((item, index) => {
            if (!item.style.getPropertyValue('--delay')) {
                item.style.setProperty('--delay', `${index * 80}ms`);
            }
            observer.observe(item);
        });
    };

    initCountdowns();
    initReveals();
});
