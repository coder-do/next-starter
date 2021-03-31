


export async function getFeaturedEvents() {
    const eventData = await fetch('https://next-js-db-default-rtdb.firebaseio.com/events.json');
    const data = await eventData.json();

    let filtered = [];

    for (let key in data) {
        if (data[key].isFeatured) {
            filtered.push({
                id: key,
                ...data[key]
            })
        }
    }
    return filtered;
}

export async function getAllEvents() {
    const eventData = await fetch('https://next-js-db-default-rtdb.firebaseio.com/events.json');
    const data = await eventData.json();

    let filteredData = [];

    for (let key in data) {
        filteredData.push({
            id: key,
            ...data[key]
        })
    }
    return filteredData;
}

export async function getFilteredEvents({ year, month }) {
    const eventData = await fetch('https://next-js-db-default-rtdb.firebaseio.com/events.json');
    const data = await eventData.json();

    let filteredEvents = [];

    Object.keys(data).forEach(key => {
        const eventDate = new Date(data[key].date);
        if (eventDate.getFullYear() === year && eventDate.getMonth() === month - 1) {
            data[key].id = key;
            if (data[key].isFeatured) {
                data[key].isFeatured = ['Featured'];
            } else {
                data[key].isFeatured = ['Not featured'];
            }
            filteredEvents.push(data[key]);
        }
    });

    return filteredEvents;
}

export async function getEventById(id) {
    const eventData = await fetch('https://next-js-db-default-rtdb.firebaseio.com/events.json');
    const data = await eventData.json();

    let filteredData = [];

    for (let key in data) {
        if (key === id) {
            filteredData.push({
                id: key,
                ...data[key]
            })
        }
    }

    return filteredData;
}