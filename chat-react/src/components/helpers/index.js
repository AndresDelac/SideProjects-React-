export const formatDate = (objDate) => {
    if (!objDate || !objDate.seconds) {
        return "Hace un momento";
    }

    const date = new Date(objDate.seconds * 1000);

    const time = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;

    const options = {
        month: 'long',
        day: 'numeric'
    };

    const newDate = date.toLocaleDateString('es-ES', options); // Cambiado a 'es-ES' para español
    return `${newDate} - ${time}`;
};