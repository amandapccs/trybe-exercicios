const returnWaking = () => `Acordando!!`;

const returnBreakfast = () => `Bora tomar café!!`;

const returnSleep = () => `Partiu dormir!!`

const doingThings = (callback) => callback();

console.log(doingThings(returnSleep))