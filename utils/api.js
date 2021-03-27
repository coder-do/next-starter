


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

// export async function getFilteredEvents(dateFilter) {
//     const eventData = await fetch('https://next-js-db-default-rtdb.firebaseio.com/events.json');
//     const data = await eventData.json();
//     const { year, month } = dateFilter;

//     let filteredEvents = data.filter((event) => {
//         const eventDate = new Date(event.date);
//         return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//     });

//     return filteredEvents;
// }

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