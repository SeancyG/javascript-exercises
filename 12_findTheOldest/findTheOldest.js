const getAge = function(person) {
    if (person.yearOfDeath) {
        let age = person.yearOfDeath- person.yearOfBirth;
        return age;
    } else {
        let age = new Date().getFullYear() - person.yearOfBirth;
        return age;
    }
}

const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        if (getAge(person1) > getAge(person2)) return 1;
        if (getAge(person1) == getAge(person2)) return 0;
        if (getAge(person1) < getAge(person2)) return -1;
    });

    return people[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
