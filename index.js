const returnFirstTwoDrivers = (driverArray) => {
    return driverArray.slice(0,2)
}

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// selectingDrivers[0](['Sally', "bob"])

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return multiplier * fare
    }
}
const fareMultiplier = (multiplier, fare) => {
    return multiplier * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (driverArray, driverSelectFunc) => {
    return driverSelectFunc(driverArray)
}
