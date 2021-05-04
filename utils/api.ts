import { event } from '../types/Event';

const getFeaturedEvents = async () => {
    const eventData = await fetch('https://udemy-courses-d8194-default-rtdb.firebaseio.com/courses.json');
    const data = await eventData.json();

    let filtered = [];

    for (let key in data) {
        if (data[key].isFeatured) {
            filtered.push({
                id: key,
                ...data[key]
            });
        }
    }
    return filtered;
};

const getAllEvents = async () => {
    const eventData = await fetch('https://udemy-courses-d8194-default-rtdb.firebaseio.com/courses.json');
    const data = await eventData.json();

    let filteredData = [];

    for (let key in data) {
        filteredData.push({
            id: key,
            ...data[key]
        });
    }
    return filteredData;
};

const getFilteredEvents = async ({ year, month }: any) => {
    const eventData = await fetch('https://udemy-courses-d8194-default-rtdb.firebaseio.com/courses.json');
    const data = await eventData.json();

    let filteredEvents: Array<string | boolean> = [];

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
};

const getEventById = async (id: string) => {
    const eventData = await fetch('https://udemy-courses-d8194-default-rtdb.firebaseio.com/courses.json');
    const data = await eventData.json();

    let filteredData: Array<event> = [];

    for (let key in data) {
        if (key === id) {
            filteredData.push({
                id: key,
                ...data[key]
            });
        }
    }

    return filteredData;
};

export {
    getAllEvents,
    getEventById,
    getFeaturedEvents,
    getFilteredEvents
};