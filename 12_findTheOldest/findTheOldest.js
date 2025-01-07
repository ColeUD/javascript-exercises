const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    return people.reduce((oldest, person) => {
        // Calculate age for the current person
        const personDeathYear = person.yearOfDeath || currentYear;
        const personAge = personDeathYear - person.yearOfBirth;

        // Calculate age for the current oldest person
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        // Compare ages and return the oldest
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
