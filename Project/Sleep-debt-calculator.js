const getSleepHours = day => {
    switch(day){
        case 'monday':
            return 5
        case 'tuesday':
            return 5
        case 'wednesday':
            return 5
        case 'thursday':
            return 5
        case 'friday':
            return 10
        case 'saturday':
            return 7
        case 'sunday':
            return 9
        default:
            return "Error !"
    }
};

const getActualSleepHours = () => {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday'); 
};

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());


// sommeil idéal
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

// fonction calcutateur de sommeil necéssaire en fonction du nombre d'heure de sommeil
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep');
    } 
    
    else if(actualSleepHours > idealSleepHours){
        console.log("You've got more " + (actualSleepHours - idealSleepHours) + " more sleep than needed");
    } 
    
    else if(actualSleepHours < idealSleepHours){
        console.log("You should get " + (idealSleepHours - actualSleepHours) + " hours more rest");
    } 
    
    else {
        console.log('Something wrong in the code');
    }
};

calculateSleepDebt()