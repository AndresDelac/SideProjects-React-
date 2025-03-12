
export const formatDate = objDate => {
    const date = new Date(objDate.seconds * 1000);

    const time = `${date.getHours()} : ${date.getMinutes()}`

    const options = {
        month: 'long',
        day: 'numeric'
    }

    const newDate = date.toLocaleDateString('sp-SP', options);
    return `${newDate} - ${time}` ;
}