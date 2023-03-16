// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return (fare) => fare * int;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}