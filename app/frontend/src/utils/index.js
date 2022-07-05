const DATE = new Date();

const getFullYear = () => {
    return DATE.getFullYear()
};

const getMonth = () => {
    return DATE.getMonth();    
}

const getDay = () => {
    return DATE.getDay();
}

const getCurrentDate = () => {
    const day = getDay();
    const month = getMonth();
    const year = getFullYear()
    const currentDate = `${day}/${month}/${year}`;
    return currentDate;
}


export default getCurrentDate;